# Empirical Comparison of VLA Task Planners in Mode 1 (3-Arm 9-Block Tower)

**Source Trial Log:** `logs/experiments/raw/CUSTOM_trial01_20261018_174106.jsonl` & `logs/experiments/summaries/CUSTOM_summary.csv`  
**Date:** 2026-10-18  
**Environment:** NVIDIA Isaac Sim 6.0 (Windows 11, 240 Hz PhysX TGS) $\leftrightarrow$ FastDDS Unicast $\leftrightarrow$ ROS 2 Jazzy Jalisco (WSL2 Ubuntu 24.04, 50 Hz DLS IK `MultiRobotController`)  
**Benchmark Video:** [Gemini Robotics ER-2 vs. Gemini 4 Argon: Multi-Robot Task Planner Benchmark (Isaac Sim 6.0 & ROS 2)](https://www.youtube.com/watch?v=PPZ4vgVZlyA)  
**Repository:** [github.com/mincasurong/IsaacSim_GeminiRobotics](https://github.com/mincasurong/IsaacSim_GeminiRobotics)

<div align="center">
  <a href="https://www.youtube.com/watch?v=PPZ4vgVZlyA" target="_blank" rel="noopener noreferrer">
    <img src="https://img.youtube.com/vi/PPZ4vgVZlyA/maxresdefault.jpg" width="90%" alt="Gemini Robotics ER-2 vs. Gemini 4 Argon: Multi-Robot Task Planner Benchmark (Isaac Sim 6.0 & ROS 2)" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.45);" />
  </a>
  <p><i>▶️ Click to watch side-by-side execution: Gemini Robotics ER-2 (left, 13 turns wave-locked) vs. Gemini 4 Argon (right, 10 turns software-pipelined)</i></p>
</div>

### 🎬 Video Walkthrough & Key Benchmark Timestamps (`PPZ4vgVZlyA`)

| Timestamp | Visual Milestone in Side-by-Side Isaac Sim 6.0 Execution | What It Explains in the Telemetry |
| :---: | :--- | :--- |
| **[0:00](https://www.youtube.com/watch?v=PPZ4vgVZlyA&t=0s)** | **Turn-0 Blueprint & Parallel Wave 1 Picks (`FR3_1`, `FR3_2`, `FR3_3`)** | Both planners ingest the pure 3D `/tf` symbolic blueprint (`0` RGB image tokens) and dispatch 3 concurrent Wave-1 `pick` calls (`B1`, `B4`, `B7`) on Turn 1. |
| **[0:06](https://www.youtube.com/watch?v=PPZ4vgVZlyA&t=6s)** | **Schedule Divergence: ER-2 Serial Drain vs. Argon Pipelined `pick` $\parallel$ `place`** | As soon as `FR3_1` places `Block1` (`T2`), **Gemini 4 Argon (right)** immediately overlaps `pick(FR3_1, B2)` on Table 1 with `place(FR3_2)` on the central tower (`T3`), whereas **Gemini Robotics ER-2 (left)** stalls `FR3_1` and `FR3_2` at a wave-locked barrier until Layer 3 finishes (`T5`). |
| **[0:23](https://www.youtube.com/watch?v=PPZ4vgVZlyA&t=23s)** | **Gemini Robotics ER-2 Completes Layer 9 (`13 Turns`, Arms Left Un-Homed)** | ER-2 finishes the 9-block tower after `13` turns (`50,190` total tokens, `1,086` thinking tokens, `$0.07860`) and terminates without homing the arms. |
| **[0:31](https://www.youtube.com/watch?v=PPZ4vgVZlyA&t=31s)** | **Gemini 4 Argon Completes Layer 9 + Proactive `go_home` Clearances (`10 Turns`, `-22.9%` Tokens)** | Argon overlaps `go_home(FR3_1)` (`T9`) and `go_home(FR3_2)` (`T10`) with the final placements, completing all `9/9` blocks in `10` turns (`38,713` tokens pure Argon; `$0.01972` / `-76.6%` cost in Stage 3 hybrid `1x Argon Brain + 10x Flash-Lite Executor`). |

---

## TL;DR — Executive Summary & What Matters Most in This Simulation

1. **Modality Note — Zero RGB Image Input (`0` Image Tokens, Pure 3D `/tf` Symbolic Grounding)**:
   - All three benchmark runs were executed **without overhead RGB camera image input (`latest_rgb = None`, `--enable-cameras` disabled)**.
   - Instead of streaming multi-megabyte base64 PNG frames on every turn, the agentic loop operated strictly on **real-time 3D `/tf` coordinate feedback** (`WorkspaceState`), the deterministic `RuleBasedTaskGenerator` blueprint, and the pre-execution `RuleBasedTaskVerifier` safety shield.
   - **Why this is critical**: It proves that **100% (`9/9`) multi-robot tower assembly with `0` collisions, `0` hallucinations, and `100%` verifier pass rate** can be achieved through 3D `/tf` state grounding alone—eliminating both Isaac Sim Replicator GPU render-product overhead and per-turn visual token inflation.
2. **Token & Thinking-Budget Efficiency (`Stage 3` Cuts Cost by `76.6%` vs. Pure Argon and `74.9%` vs. Legacy ER-2)**:
   - **Stage 1 (`Legacy Loop: Gemini Robotics-ER 2`)** consumed **50,190 total tokens** (`48,377` input + `1,086` thinking + `727` output across `14` calls) at a cost of **`$0.07860`**.
   - **Stage 2 (`Pure Gemini-4-Argon Loop`)** consumed **38,713 total tokens** (`37,845` input + `0` thinking + `868` output across `11` calls) at a cost of **`$0.08437`**.
   - **Stage 3 (`Argon Brain 1x + Flash-Lite Executor 10x`)** consumed **38,277 total tokens** (`37,448` input + `0` thinking + `829` output across `1` Argon Brain call + `10` Flash-Lite Executor turns, with `thinking_budget=0` on step turns), slashing total cost to **`$0.01972` (`-76.6%` vs. Stage 2, `-74.9%` vs. Stage 1)** and cutting Turn-0 planning latency by **47.4% (`4,670 ms` vs. `8,870 ms`)**.
3. **Why `Gemini-4-Argon` Uses `22.6%` Fewer Input Tokens Than `Gemini Robotics-ER 2` (`10 Turns` vs. `13 Turns`)**:
   - In the raw JSONL trace, `Gemini Robotics-ER 2` used **wave-locked barrier batching (`13` turns)**: after picking 3 blocks in parallel (`T1`), it drained all 3 placements serially (`T2..T5`), leaving `FR3_1` and `FR3_2` idle while waiting for `FR3_3` to finish Layer 3 before allowing any robot to pick its second block (`T6`).
   - By contrast, **`Gemini-4-Argon` autonomously discovered software-pipelined `pick` + `place` interleaving (`10` turns)**: as soon as `FR3_1` placed `Block1` (`T2`), `Gemini-4-Argon` paired `pick(FR3_1, Block2)` on Table 1 **in the same turn (`T3`)** as `place(FR3_2)` on the central tower, sustaining `2` non-conflicting parallel actions per turn across `T3..T10`. Finishing in `10` turns instead of `13` eliminated `3` full-context round-trips (`-10,929` input tokens).

---

## 1. Automated 3-Stage Hardware-in-the-Loop Comparison Workflow

The evaluation runs as a continuous, closed-loop 3-stage state machine inside `GeminiRoboticsNode._run_automated_comparison_workflow()` in **Mode 1** (`three_robot_tower.py`):

```mermaid
flowchart TD
    Start(["User Prompt: 'Start comparison test'<br/>(Autonomous VLA Mode, Mode 1 — No RGB Image Input, 3D /tf Grounding)"]) --> S1

    subgraph Stage1 ["Stage 1: Legacy VLA Baseline (gemini-robotics-er-2-preview)"]
        S1["1. Turn-0 Spatial Blueprint & Strategy<br/>(gemini-robotics-er-2-preview, thinking_budget=256)"]
        S1 --> S1Loop["2. Multi-Turn Tool Dispatch Loop (13 Turns)<br/>(gemini-robotics-er-2-preview, thinking_budget=512)"]
        S1Loop --> S1Verify["3. Pre-Execution Safety Guardrail<br/>(RuleBasedTaskVerifier: Reachability & Ownership)"]
        S1Verify --> S1Exec["4. 50 Hz DLS IK + Central Zone Mutex<br/>(Wave-Locked 3-1-1-1-1-3... -> 9/9 Blocks Stacked)"]
        S1Exec --> S1Rep["5. Emit Stage 1 Telemetry Row<br/>(/gemini/model_comparison -> Frontend Monitor)"]
    end

    S1Rep --> Reset1["Publish Empty() -> /reset_simulation<br/>Reset 9 Blocks to Tables 1-3 & Home FR3_1..3 (4.0s dwell)"]
    Reset1 --> S2

    subgraph Stage2 ["Stage 2: Pure Gemini-4-Argon Loop (gemini-4-argon)"]
        S2["1. Turn-0 Spatial Blueprint & Strategy<br/>(gemini-4-argon, thinking_budget=256)"]
        S2 --> S2Loop["2. Multi-Turn Tool Dispatch Loop (10 Turns)<br/>(gemini-4-argon, thinking_budget=512)"]
        S2Loop --> S2Exec["3. 50 Hz DLS IK Execution<br/>(Software-Pipelined 3-1-2-2-2... -> 9/9 Blocks Stacked)"]
        S2Exec --> S2Rep["4. Emit Stage 2 Telemetry Row<br/>(/gemini/model_comparison -> Frontend Monitor)"]
    end

    S2Rep --> Reset2["Publish Empty() -> /reset_simulation<br/>Reset 9 Blocks to Tables 1-3 & Home FR3_1..3 (4.0s dwell)"]
    Reset2 --> S3

    subgraph Stage3 ["Stage 3: Argon Brain (1x) + Flash-Lite Executor (10x)"]
        S3["1. High-Level Brain Turn 0 (1x Call)<br/>(gemini-4-argon, thinking_budget=256)"]
        S3 --> S3Loop["2. Step Executor Turns 1..10 (10x Calls)<br/>(gemini-3.5-flash-lite, thinking_budget=0,<br/>Escalates to Argon ONLY on Pick Fault / Verifier Reject)"]
        S3Loop --> S3Exec["3. 50 Hz DLS IK Execution<br/>(Software-Pipelined 3-1-2-2-2... -> 9/9 Blocks + Home Clearances)"]
        S3Exec --> S3Rep["4. Emit Final 3-Stage Comparison Report<br/>(/gemini/model_comparison & /gemini/chat_reply)"]
    end

    S3Rep --> Done(["Benchmark Complete"])
```

---

## 2. Token Usage, Thinking-Budget Allocation, and Cost Comparison

### 2.1 End-to-End Comparison Table (Mode 1 — 9-Block Tower)

| Metric | Stage 1: Legacy Loop (`gemini-robotics-er-2-preview`) | Stage 2: Pure Gemini-4-Argon Loop (`gemini-4-argon`) | Stage 3: Argon Brain (`1x`) + Flash-Lite (`10x`) |
|---|---:|---:|---:|
| **Visual Input Modality** | **None (`0` Image Tokens; 3D `/tf` only)** | **None (`0` Image Tokens; 3D `/tf` only)** | **None (`0` Image Tokens; 3D `/tf` only)** |
| **Turn-0 High-Level Brain Model** | `gemini-robotics-er-2-preview` | `gemini-4-argon` | `gemini-4-argon` (`1A`) |
| **Turns 1..N Step Executor Model** | `gemini-robotics-er-2-preview` (`13E`) | `gemini-4-argon` (`10A`) | `gemini-3.5-flash-lite` (`10F`) |
| **Turn-0 Thinking Budget (`thinking_budget`)** | `256` tokens | `256` tokens | `256` tokens |
| **Step-Turn Thinking Budget (`thinking_budget`)** | `512` tokens / turn | `512` tokens / turn | **`0` tokens / turn (Disabled)** |
| **Agent Turns Used (`agent_turns`)** | `13 turns` | **`10 turns` (`-23.1%`)** | **`10 turns` (`-23.1%`)** |
| **Total API Calls (`Plan + Step Turns`)** | `14 calls` (`0A + 0F + 14E`) | `11 calls` (`11A + 0F + 0E`) | **`11 calls` (`1A + 10F + 0E`)** |
| **Input Tokens (`input_tokens`)** | `48,377` | `37,845` (`-21.8%` vs. S1) | **`37,448` (`-22.6%` vs. S1)** |
| **Thinking Tokens Consumed (`thinking_tokens`)** | `1,086` | `0` | **`0` (`-100%` vs. S1)** |
| **Output Action Tokens (`output_tokens`)** | `727` | `868` | **`829`** |
| **Total Tokens (`total_tokens`)** | `50,190` | `38,713` (`-22.9%` vs. S1) | **`38,277` (`-23.7%` vs. S1)** |
| **Avg Input Tokens per API Call** | `3,455 tok/call` | `3,440 tok/call` | `3,404 tok/call` |
| **Turn-0 Brain Plan Latency (`plan_latency_ms`)** | `1,987 ms` | `8,870 ms` | **`4,670 ms` (`-47.4%` vs. S2)** |
| **Early-Turn Step Latency (Turns 1–2 Mean)** | `2.58 s` | `13.31 s` | **`4.17 s` (`-68.7%` vs. S2)** |
| **Tower Completion & Verifier Pass Rate** | `9/9 blk` \| `19/19 (100%)` | `9/9 blk` \| `20/20 (100%)` | **`9/9 blk` \| `20/20 (100%)`** |
| **Multi-Arm Workload Gini Coefficient** | `0.0351` (`6, 7, 6` actions) | `0.0342` (`7, 7, 6` actions) | **`0.0339` (`7, 7, 6` actions)** |
| **Total API Cost (`$ USD`)** | `$0.07860` | `$0.08437` | **`$0.01972` (`-76.6%` vs. S2, `-74.9%` vs. S1)** |

---

### 2.2 Detailed Analysis of Token Usage & Thinking-Budget Mechanics

1. **Why Input Tokens Dominate (`96.4%–97.8%` of All Tokens) Even Without Images**:
   - Because no RGB images were sent (`latest_rgb = None`), 100% of the `37,448–48,377` input tokens came from **text context**:
     - Static `SYSTEM_PROMPT` + `ROBOT_TOOLS` JSON schema declarations ($\approx 1,450$ tokens)
     - Turn-0 `RuleBasedTaskGenerator` 3D `/tf` blueprint + High-Level Brain strategy ($\approx 1,350$ tokens)
     - Rolling multi-turn tool call (`function_call`) and controller execution result (`function_response`) history ($\approx 250\text{--}380$ tokens appended per turn).
   - Because each turn re-sends the rolling conversation history, **total input tokens scale quadratically with the number of turns $T$**:
     $$\text{InputTokens}(T) \approx T \cdot B_{\text{base}} + \frac{T(T-1)}{2} \cdot \Delta B_{\text{turn}}$$
   - Reducing the task from **`13` turns (Stage 1)** to **`10` turns (Stages 2 & 3)** eliminated the 3 heaviest final turns (where context exceeds `4,500` tokens/turn), saving **10,929 input tokens (`-22.6%`)** automatically.

2. **Thinking-Budget Usage (`thinking_budget`) Across Methods**:
   - **Stage 1 (`gemini-robotics-er-2-preview`)**: Configured with `thinking_budget=256` on Turn 0 and `thinking_budget=512` on Turns 1–13. It emitted **1,086 thinking tokens** (`~77.6` thinking tokens/call), which are billed at the **$10.00 / 1M output token rate** (`$0.01086` spent purely on internal reasoning tokens—`13.8%` of Stage 1's entire cost).
   - **Stage 2 (`Pure Gemini-4-Argon`)**: Configured with `thinking_budget=512` on every turn. Even when `thoughts_token_count` is folded or zero-reported in metadata, allowing an unconstrained reasoning budget on routine `place(x=0, y=0)` turns caused Turn 1–2 server latency to balloon to **`12.97s` and `13.64s`** (`8,870 ms` on Turn 0).
   - **Stage 3 (`Argon Brain 1x + Flash-Lite Executor 10x`)**:
     - **Turn 0 (`1A` on `gemini-4-argon`)**: Allocates `thinking_budget=256` strictly once to synthesize the global 9-block pipelined strategy.
     - **Turns 1–10 (`10F` on `gemini-3.5-flash-lite`)**: Sets **`thinking_budget=0`** because the Grounded Blueprint + Turn-0 Argon Strategy already specifies the exact sequence, and `RuleBasedTaskVerifier` deterministically guards every tool call before execution. Disabling step-turn thinking cut Turn 1–2 latency from `13.31s` down to **`4.17s` (`3.19×` faster)** with zero loss in plan quality (`20/20` verified tool calls, `9/9` blocks stacked).

3. **Per-Tier Token Cost Breakdown (`Stage 2` vs. `Stage 3`)**:
   - **Pricing Tiers**:
     - `gemini-4-argon`: **`$2.00 / 1M` input**, **`$10.00 / 1M` output**
     - `gemini-robotics-er-2-preview`: **`$1.25 / 1M` input**, **`$10.00 / 1M` output**
     - `gemini-3.5-flash-lite`: **`$0.30 / 1M` input**, **`$2.50 / 1M` output** (**6.7× cheaper input, 4.0× cheaper output** than Argon)
   - **Stage 2 Cost (`11A` on `gemini-4-argon`)**:
     $$37,845 \times \frac{\$2.00}{10^6} + 868 \times \frac{\$10.00}{10^6} = \$0.07569 + \$0.00868 = \mathbf{\$0.08437}$$
   - **Stage 3 Cost (`1A` on `gemini-4-argon` + `10F` on `gemini-3.5-flash-lite`)**:
     - Turn 0 Brain (`1A`: `2,800` input tok, `220` output tok on `gemini-4-argon`):
       $$2,800 \times \frac{\$2.00}{10^6} + 220 \times \frac{\$10.00}{10^6} = \$0.00560 + \$0.00220 = \$0.00780$$
     - Turns 1–10 Executor (`10F`: `34,648` input tok, `609` output tok on `gemini-3.5-flash-lite`):
       $$34,648 \times \frac{\$0.30}{10^6} + 609 \times \frac{\$2.50}{10^6} = \$0.01040 + \$0.00152 = \$0.01192$$
     - **Total Stage 3 Cost**: **`$0.01972`** (**`76.6%` cheaper than Stage 2** and **`74.9%` cheaper than Stage 1**).

---

## 3. Turn-by-Turn Scheduling Comparison from Raw JSONL Logs

The raw event trace in `CUSTOM_trial01_20261018_174106.jsonl` shows why **Stage 2 & Stage 3 (`Gemini-4-Argon` Brain)** completed the 9-block tower in **10 turns (`20` tool calls)** whereas **Stage 1 (`Gemini Robotics-ER 2`)** required **13 turns (`19` tool calls)**:

| Turn | Stage 1: `gemini-robotics-er-2-preview` (`13 Turns`, Wave-Locked Barrier) | Stages 2 & 3: `gemini-4-argon` Brain (`10 Turns`, Software-Pipelined Interleaving) |
|:---:|---|---|
| **T1** | `pick(R1,B1)` $\parallel$ `pick(R2,B4)` $\parallel$ `pick(R3,B7)` *(3 calls)* | `pick(R1,B1)` $\parallel$ `pick(R2,B4)` $\parallel$ `pick(R3,B7)` *(3 calls)* |
| **T2** | `place(R1)` *(Layer 1)* | `place(R1)` *(Layer 1)* |
| **T3** | `place_relative(R2,B1)` *(redundant relative call)* | **`pick(R1,B2)` (Table 1) $\parallel$ `place(R2)` (Layer 2)** *(2 calls)* |
| **T4** | `place(R2)` *(Layer 2)* | **`pick(R2,B5)` (Table 2) $\parallel$ `place(R3)` (Layer 3)** *(2 calls)* |
| **T5** | `place(R3)` *(Layer 3 — R1 & R2 sit idle!)* | **`pick(R3,B8)` (Table 3) $\parallel$ `place(R1)` (Layer 4)** *(2 calls)* |
| **T6** | `pick(R1,B2)` $\parallel$ `pick(R2,B5)` $\parallel$ `pick(R3,B8)` *(3 calls)* | **`pick(R1,B3)` (Table 1) $\parallel$ `place(R2)` (Layer 5)** *(2 calls)* |
| **T7** | `place(R1)` *(Layer 4)* | **`pick(R2,B6)` (Table 2) $\parallel$ `place(R3)` (Layer 6)** *(2 calls)* |
| **T8** | `place(R2)` *(Layer 5)* | **`pick(R3,B9)` (Table 3) $\parallel$ `place(R1)` (Layer 7)** *(2 calls)* |
| **T9** | `place(R3)` *(Layer 6 — R1 & R2 sit idle!)* | **`go_home(R1)` $\parallel$ `place(R2)` (Layer 8)** *(2 calls)* |
| **T10** | `pick(R1,B3)` $\parallel$ `pick(R2,B6)` $\parallel$ `pick(R3,B9)` *(3 calls)* | **`go_home(R2)` $\parallel$ `place(R3)` (Layer 9) — DONE (`9/9`)** *(2 calls)* |
| **T11** | `place(R1)` *(Layer 7)* | — |
| **T12** | `place(R2)` *(Layer 8)* | — |
| **T13** | `place(R3)` *(Layer 9 — DONE, omitted `go_home`)* | — |

### Key Takeaways from the Schedule Trace
- **Zero Central-Zone Contention with Maximum Outer-Table Overlap**: Because only one arm can occupy the central tower (`[0.0, 0.0]`) at a time (`center_occupied_by` mutex), `Gemini-4-Argon`'s `2-call` pipelined pattern (`1` central `place` $\parallel$ `1` outer-table `pick` or `go_home`) is the **provably optimal conflict-free schedule** for a 3-arm shared-center station.
- **Complete Workspace Clearance (`20/20` vs. `19/19` Calls)**: In Turns 9 and 10, `Gemini-4-Argon` proactively overlapped `go_home(FR3_1)` and `go_home(FR3_2)` while the final layers were being placed, whereas `Gemini Robotics-ER 2` left the arms un-homed at the end of Turn 13.
