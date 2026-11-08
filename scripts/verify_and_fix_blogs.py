import glob
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")


def fix_corrupted_json_ld(html: str) -> str:
    pattern = re.compile(
        r'(<script type="application/ld\+json">\s*\{.*?\})\s*function seekOmniVideo\(vidId, seconds, btn\)\s*\{.*?\}\s*(</script>)',
        flags=re.S,
    )
    return pattern.sub(r"\1\n  \2", html)


def fix_vla_blog(html: str) -> str:
    html = html.replace(
        "static base context <code>B_base ≈ 2,800</code> tokens",
        "static base context of <code>~2,800 tokens</code>",
    ).replace(
        "rolling increment <code>ΔB_turn ≈ 250–380</code> tokens",
        "rolling increment of <code>250 to 380 tokens</code>",
    )

    old_box1 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>M9G Context Scaling Model (IsaacSim_GeminiRobotics Mode 1)</span>
          <span>Ref: M9G-TR-2026-01</span>
        </div>
        CumulativeInputTokens(T; M9G_Mode1) ≈ T · B_base (2,800 tok) + [ T(T − 1) / 2 ] · ΔB_turn (250..380 tok)
      </div>"""

    new_box1 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>M9G Context Scaling Rule (IsaacSim_GeminiRobotics Mode 1)</span>
          <span>Ref: M9G-TR-2026-01</span>
        </div>
        <strong>Cumulative Input Tokens (for <em>T</em> turns)</strong> = (<em>T</em> &times; 2,800 Base Context Tokens) + [ <em>T</em> &times; (<em>T</em> &minus; 1) / 2 ] &times; (250 to 380 Per-Turn History Tokens)
      </div>"""

    old_box2 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>M9G Stage 3 Hybrid Cost Decomposition (CUSTOM_trial01_20261018_174106.jsonl)</span>
          <span>Total: $0.01972 (-76.6%)</span>
        </div>
        Cost_Stage3(M9G) = <span class="c-blue">Turn0_ArgonBrain [ 2,800 in × $2.00/1M + 220 out × $10.00/1M = $0.00780 ]</span> + <span class="c-green">Turns1..10_FlashLiteExecutor [ 34,648 in × $0.30/1M + 609 out × $2.50/1M = $0.01192 ]</span> = <strong class="c-green">$0.01972</strong>
      </div>"""

    new_box2 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>M9G Stage 3 Hybrid Cost Breakdown (CUSTOM_trial01_20261018_174106.jsonl)</span>
          <span>Total: $0.01972 (-76.6%)</span>
        </div>
        <div><strong class="c-blue">1. Turn 0 Global Brain (Gemini 4 Argon, 1 Call):</strong> 2,800 input tokens (&times; $2.00 / 1M) + 220 output tokens (&times; $10.00 / 1M) = <strong>$0.00780</strong></div>
        <div><strong class="c-green">2. Turns 1 to 10 Step Executor (Gemini 3.5 Flash-Lite, 10 Calls):</strong> 34,648 input tokens (&times; $0.30 / 1M) + 609 output tokens (&times; $2.50 / 1M) = <strong>$0.01192</strong></div>
        <div><strong>Total Stage 3 Episode Cost:</strong> $0.00780 + $0.01192 = <strong class="c-green">$0.01972 (&minus;76.6% vs. Stage 2 Pure Argon)</strong></div>
      </div>"""

    html = html.replace(old_box1, new_box1).replace(old_box2, new_box2)
    return html


def fix_stamp_blog(html: str) -> str:
    old_box1 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Project STAMP 4-Stage Closed-Loop Execution Law</span>
          <span>Ref: M9G-TR-2026-03 (v1.0.0-stamp)</span>
        </div>
        Plan [ GeminiArgonPlanner(Goal, SpatialState, C_repair) → TaskDAG ] → Gate [ FrankaFR3DeterministicGate(TaskDAG, SpatialState) → GateVerdict ] → { PASS: DecoupledROS2Executor(q_sol) | REJECT: FeedbackContextStore.write_limit_back(HardwareFaultLog) → C_repair }
      </div>"""

    new_box1 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Project STAMP 4-Stage Closed-Loop Execution Pipeline</span>
          <span>Ref: M9G-TR-2026-03 (v1.0.0-stamp)</span>
        </div>
        <div><strong>Stage 1 (Plan):</strong> <code>GeminiArgonPlanner(Goal, SpatialState, RepairHistory)</code> synthesizes a candidate <code>TaskDAG</code>.</div>
        <div><strong>Stage 2 (Gate):</strong> <code>FrankaFR3DeterministicGate(TaskDAG, SpatialState)</code> evaluates all physical invariants in under 2 ms.</div>
        <div><strong>Stage 3 (Execute on PASS):</strong> <code>DecoupledROS2Executor</code> dispatches verified 7-DoF joint trajectories to ROS 2 / MoveIt 2.</div>
        <div><strong>Stage 4 (Write-Back on REJECT):</strong> <code>FeedbackContextStore.write_limit_back(HardwareFaultLog)</code> appends structured repair constraints for the next planning turn.</div>
      </div>"""

    old_box2 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Four-Layer Deterministic Gate Invariants (FrankaFR3DeterministicGate)</span>
          <span>Ref: M9G-TR-2026-03 • stamp/stamp_gate/__init__.py</span>
        </div>
        1. Kinematic Reach &amp; 7-DoF DLS IK: r_3D = ||p_target − p_base||₂ ∈ [0.15m, 0.85m] ∧ ||FK(DLS_IK(p_local, q_des, q_seed)) − p_local||₂ ≤ 0.015m (15.0 mm)<br/>
        2. 3D Workspace &amp; AABB Collision: z_target ≥ 0.20m ∧ ||p_xy − p_base,xy||₂ ≥ 0.12m ∧ ∀B ∈ Boxes_obs: AABB(p_target ± [0.04, 0.04, 0.05]m) ∩ B = ∅<br/>
        3. Joint &amp; Torque Envelopes: ∀j ∈ {1..7}: q_j ∈ [q_min,j, q_max,j] (URDF) ∧ |τ_j| ≤ τ_max,j ([87, 87, 87, 87, 12, 12, 12] Nm)<br/>
        4. Spatio-Temporal Mutex Locks: ∀(n_a, n_b) claiming shared_zone Z or required_tool T (arm_a ≠ arm_b): max(t_start,a, t_start,b) ≥ min(t_end,a, t_end,b)
      </div>"""

    new_box2 = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Four-Layer Deterministic Gate Invariants (FrankaFR3DeterministicGate)</span>
          <span>Ref: M9G-TR-2026-03 • stamp/stamp_gate/__init__.py</span>
        </div>
        <div><strong>1. Kinematic Reach &amp; 7-DoF DLS IK:</strong> Target 3D radial distance from the assigned arm base must sit within <code>0.15 m to 0.85 m</code>, and the 150-iteration Damped Least-Squares IK position residual must not exceed <code>15.0 mm (0.015 m)</code>.</div>
        <div><strong>2. 3D Workspace &amp; AABB Collision:</strong> Target height must stay at or above <code>0.20 m</code>, radial clearance from the base column must be at least <code>0.12 m</code>, and the gripper bounding box (<code>&plusmn;[0.04, 0.04, 0.05] m</code>) must have zero overlap with any obstacle box.</div>
        <div><strong>3. Joint Position &amp; Torque Envelopes:</strong> All 7 FR3 joint angles must stay within URDF position bounds and joint torques must remain within <code>[87, 87, 87, 87, 12, 12, 12] Nm</code>.</div>
        <div><strong>4. Spatio-Temporal Mutex Locks:</strong> Any two task nodes assigned to different arms that claim the same <code>shared_zone</code> or <code>required_tool</code> must have strictly non-overlapping <code>[t_start, t_end]</code> execution windows.</div>
      </div>"""

    html = html.replace(old_box1, new_box1).replace(old_box2, new_box2)
    html = html.replace("<code>r_3D &notin; [0.15m, 0.85m]</code>", "<code>radial distance outside [0.15 m, 0.85 m]</code>")
    html = html.replace("<code>Z &isin; [0.32m, 0.62m]</code>", "<code>Z within [0.32 m, 0.62 m]</code>")
    html = html.replace("<code>|&tau;_j|</code>", "<code>joint torque</code>")
    return html


def fix_sdl_blog(html: str) -> str:
    html = fix_corrupted_json_ld(html)
    html = html.replace(
        "outward bimanual handle tensioning ||p1 - p2|| = d_nom + 2Δ.",
        "outward bimanual handle tensioning (nominal rim span plus dual tension offsets).",
    )
    html = html.replace(
        "(<code>||p_1(t) - p_2(t)|| = d_nom + 2*Δ_tension</code>)",
        "(<code>gripper span = nominal rim width + 2 &times; tension offset</code>)",
    )
    old_box = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Bimanual Structure-of-Interest (SOI) Outward Tension Constraint</span>
          <span>Ref: SOI Bag Manipulation / Project STAMP Mode 2 &amp; 5</span>
        </div>
        || p_1(t) - p_2(t) ||_2 = d_nom + 2 * Δ_tension   (maintains open container rim &amp; prevents inward buckling during bimanual LIFT / TRANSPORT)
      </div>"""

    new_box = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Bimanual Structure-of-Interest (SOI) Outward Tension Rule</span>
          <span>Ref: SOI Bag Manipulation / Project STAMP Mode 2 &amp; 5</span>
        </div>
        <strong>Dual-Gripper Handle Distance</strong> = <code>Nominal Rim Width + (2 &times; Outward Tension Offset)</code> &mdash; keeps the flexible container rim taut and prevents inward buckling during synchronized bimanual lifting and transport.
      </div>"""
    html = html.replace(old_box, new_box)
    return html


def fix_agent_blog(html: str) -> str:
    html = fix_corrupted_json_ld(html)
    html = html.replace("$O(b^d)$", "exponential")
    # Protect <script> and <style> while converting markdown **bold** and `code` in HTML body
    parts = re.split(r"(<(?:script|style)\b[^>]*>.*?</(?:script|style)>)", html, flags=re.S | re.I)
    for idx in range(0, len(parts), 2):
        seg = parts[idx]
        # Convert **`...`** or **...** outside <code>
        seg = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", seg)
        # Convert *"..."* italics
        seg = re.sub(r'\*"([^"]+)"\*', r'<em>"\1"</em>', seg)
        seg = re.sub(r"\*why\*", r"<em>why</em>", seg)
        # Convert `...` to <code>...</code> (escaping any raw < or > inside backticks)
        def repl_code(m: re.Match) -> str:
            inner = m.group(1).replace("<", "&lt;").replace(">", "&gt;")
            return f"<code>{inner}</code>"
        seg = re.sub(r"`([^`\n]+)`", repl_code, seg)
        parts[idx] = seg
    return "".join(parts)


def fix_lazydash_blog(html: str) -> str:
    old_box = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Lazy-DaSH Formal Hypergraph &amp; Scoped Constraint Formulation</span>
          <span>Ref: Seongwon "Scott" Lee et al., UIUC Parasol Lab (arXiv:2504.05552, Sec. III–IV)</span>
        </div>
        Task Space Element:   T_i = (B_i, W_i, C_i) ∈ T,   B_i ⊆ B (Movable Bodies), W_i ⊆ W (Config Space), C_i ⊆ C (Constraints)<br/>
        Task Hypergraph:      H_T = (V_T, E_T),   v_T = ⟨T_i⟩ ∈ V_T (Robot R_k, Composite R_k+O_i, or Location-Specific Object O_i^s, O_i^g)<br/>
        Motion Hypergraph:    H_M = (V_M, E_M),   v_M = ⟨v_T, q⟩ ∈ V_M,   E_M = ⟨Tail, Head, E_T, π⟩ ∈ {E_M^comp, E_M^tran, E_M^move}<br/>
        Scoped Feedback:      C_T = C_f (Frontier Collisions) ∪ C_h (Transition History on branch Π_{v_TE^src → v_TE})   |   C_M (Motion Conflicts on Π_{v_ME^src → v_ME})
      </div>"""

    new_box = """      <div class="telemetry-formula-box">
        <div class="telemetry-formula-header">
          <span>Lazy-DaSH Four-Layer Architecture &amp; Scoped Constraint Rules</span>
          <span>Ref: Seongwon "Scott" Lee et al., UIUC Parasol Lab (arXiv:2504.05552, Sec. III–IV)</span>
        </div>
        <div><strong>1. Task Space Element:</strong> Groups each active subset of robots and movable objects together with its configuration space and active grasp or placement constraints.</div>
        <div><strong>2. Task Space Hypergraph:</strong> Connects start object poses, goal object poses, and robot-object composites via directed <code>pick</code>, <code>place</code>, and <code>handover</code> hyperarcs without pre-sampling intermediate buffers.</div>
        <div><strong>3. Lazy Motion Hypergraph:</strong> Anchors Lazy-PRM roadmaps strictly to the transition configurations used in the candidate task schedule (<code>transit</code>, <code>transfer</code>, and <code>coupled move</code> hyperarcs).</div>
        <div><strong>4. Branch-Scoped Conflict Feedback:</strong> Records frontier obstacle blocks and transition-history conflicts along the active search branch so only the blocked sub-branch is expanded or resampled.</div>
      </div>"""

    html = html.replace(old_box, new_box)

    # Ordered replacements of LaTeX and symbol strings in blog/lazy-dash/index.html
    replacements = [
        (r"$O(N_{\text{robots}}^2 \cdot N_{\text{objects}})$", "quadratic robot-by-object"),
        (r"$O(N_R^2 N_O)$", "quadratic robot-by-object"),
        (r"O(N_R² N_O)", "quadratic robot-by-object"),
        (r"($\mathcal{C}_{\mathcal{T}}, \mathcal{C}_{\mathcal{M}}$)", "(Task &amp; Motion Conflict Feedback)"),
        (r"($\mathcal{C}_{\mathcal{M}}, \mathcal{C}_{\mathcal{T}}$)", "(Motion &amp; Task Conflict Feedback)"),
        (r"($\mathcal{C}_f, \mathcal{C}_h$)", "(Frontier &amp; History Conflict Sets)"),
        (r"$\mathcal{C}_f / \mathcal{C}_h$", "frontier and history conflict"),
        (r"($\mathcal{C}_{\mathcal{T}} = \mathcal{C}_f \cup \mathcal{C}_h$ in Milliseconds)", "(Millisecond Frontier &amp; History Conflict Checks)"),
        (r"($\mathcal{C}_{\mathcal{T}} = \mathcal{C}_f \cup \mathcal{C}_h$)", "(Frontier &amp; History Conflict Gate)"),
        (r"($\mathcal{H}_{\mathcal{T}}$ &amp; Task-Extended Hypergraph $\mathcal{H}_{\texttt{TE}}$)", "(Task Space &amp; Task-Extended Hypergraphs)"),
        (r"($\mathcal{H}_{\mathcal{T}}$) &amp; Query ($\mathcal{H}_{\texttt{TE}}$)", "(Task Space &amp; Extended Query Graph)"),
        (r"$\mathcal{H}_{\mathcal{T}} = (\mathcal{V}_{\mathcal{T}}, \mathcal{E}_{\mathcal{T}})$", "the Task Space Hypergraph"),
        (r"($\mathcal{H}_{\mathcal{T}}$)", "(Task Space Hypergraph)"),
        (r"$\mathcal{H}_{\mathcal{T}}$", "the Task Space Hypergraph"),
        (r"$\mathcal{H}_{\texttt{TE}}$", "the Task-Extended Hypergraph"),
        (r"($\mathcal{H}_{\mathcal{M}}$ via Lazy-PRM)", "(Lazy-PRM Motion Hypergraph)"),
        (r"($\mathcal{H}_{\mathcal{M}}$)", "(Lazy Motion Hypergraph)"),
        (r"$\mathcal{H}_{\mathcal{M}}$", "the Lazy Motion Hypergraph"),
        (r"($O_i^s, O_i^g$)", "(start and goal poses)"),
        (r"$O_i^s, O_i^g$", "start and goal poses"),
        (r"($O_i^s$)", "(start pose)"),
        (r"($O_i^g$)", "(goal pose)"),
        (r"$O_i^{\text{buf}}$", "intermediate buffer pose"),
        (r"($R_k+O_i$)", "(robot-object composites)"),
        (r"$s_c(O, q)$", "stability constraints"),
        (r"($\mathcal{C}_f$)", "(frontier collisions)"),
        (r"($\mathcal{C}_h$)", "(history conflicts)"),
        (r"($\mathcal{C}_{\mathcal{M}}$)", "(Motion Conflict Feedback)"),
        (r"$\mathcal{C}_{\mathcal{M}}$", "motion-conflict"),
        (r"$\mathcal{C}_{\mathcal{T}} / \mathcal{C}_{\mathcal{M}}$", "task and motion conflict"),
        (r"$\mathcal{C}_{\mathcal{T}}$", "task-conflict"),
        (r"($\Pi_{v_{\texttt{TE}}^{\texttt{src}}v_{\texttt{TE}}}$)", "(along the active search branch)"),
        (r"$\Pi_{v_{\texttt{TE}}^{\texttt{src}}v_{\texttt{TE}}}$", "the active search branch"),
        (r"$E_{\mathcal{M}}^{\texttt{tran}}, E_{\mathcal{M}}^{\texttt{move}}$", "transition and motion hyperarcs"),
        (r"($E_{\mathcal{M}}^{\texttt{tran}}, E_{\mathcal{M}}^{\texttt{move}}$)", "(transition and motion hyperarcs)"),
        (r"$E_{\mathcal{M}}^{\texttt{tran}}$", "transition hyperarcs"),
        (r"$E_{\mathcal{T}}$", "task hyperarcs"),
        (r"$\mathcal{S}_{\mathcal{T}}$", "the candidate task schedule"),
        (r"$\mathcal{S}_{\mathcal{M}}$", "the candidate motion schedule"),
        (r"$\textsc{QueryMotionPlan}(\mathcal{S}_{\mathcal{T}}, \mathcal{H}_{\mathcal{T}}, \mathcal{H}_{\mathcal{M}}, \mathcal{C}_{\mathcal{M}})$", "<code>QueryMotionPlan</code>"),
        (r"$\ge 76.6\%$", "at least 76.6%"),
        (r"$\ge 90\%$", "at least 90%"),
        (r"$\ge 95\%$", "at least 95%"),
        (r"($10^2\times$ reduction)", "(100x reduction)"),
        (r"($10^2\times$ fewer collision checks)", "(100x fewer collision checks)"),
        (r"$10^2\times$", "100x"),
        (r"$10^3\times$", "1,000x"),
        (r"($4\times$ robots, $>4\times$ objects)", "(4x robots, over 4x objects)"),
        (r"$>2\times$ objects", "over 2x more objects"),
        (r"$>90\%$", "over 90%"),
        (r"$\le \$0.025$", "under $0.025"),
        (r"$\le 2\times$", "up to 2x"),
        (r"$&lt; 5.0\text{ ms}$", "under 5.0 ms"),
        (r"$&lt; 1.5\text{ s}$", "under 1.5 s"),
        (r"$10\times$", "10x"),
        (r"$\leftrightarrow$", "and"),
        (r"$\rightarrow$", "&rarr;"),
        (r"$N_{\text{robots}}$", "robot count"),
        (r"$N_{\text{objects}}$", "object count"),
        (r"configurations $q$", "configurations"),
        (r"path $\pi$", "the trajectory path"),
        (r"trajectories $\pi$", "trajectories"),
        ("Task Space Hypergraph H_T", "Task Space Hypergraph"),
        ("Lazy Motion Hypergraph H_M", "Lazy Motion Hypergraph"),
        ("Single-call H_T synthesis", "Single-call task hypergraph synthesis"),
        ("conflict detection (C_f, C_h)", "frontier and history conflict detection"),
        ("Branch-scoped C_T / C_M feedback", "Branch-scoped conflict feedback"),
        ("Write-Back (C_T, C_M)", "Write-Back"),
        ("(H_T → H_M)", "(Task-to-Motion Hypergraphs)"),
        ("(H_T)", "(Task Hypergraph)"),
        ("(H_M)", "(Motion Hypergraph)"),
        ("(C_T, C_M)", "(Scoped Conflict Feedback)"),
    ]
    for old, new in replacements:
        html = html.replace(old, new)

    # Convert any remaining markdown backticks outside <script>/<style> into <code>...</code>
    parts = re.split(r"(<(?:script|style)\b[^>]*>.*?</(?:script|style)>)", html, flags=re.S | re.I)
    for idx in range(0, len(parts), 2):
        parts[idx] = re.sub(r"`([^`\n]+)`", r"<code>\1</code>", parts[idx])
    return "".join(parts)


def fix_blog_hub(html: str) -> str:
    return html.replace("(H_T → H_M)", "(Task-to-Motion Hypergraphs)").replace("(H_T &rarr; H_M)", "(Task-to-Motion Hypergraphs)")


def _read_nonempty(path: str) -> str:
    if not os.path.exists(path) or os.path.getsize(path) == 0:
        import subprocess
        raw = subprocess.check_output(["git", "show", f"HEAD:{path}"], encoding="utf-8")
        with open(path, "w", encoding="utf-8") as f:
            f.write(raw)
        return raw
    with open(path, encoding="utf-8") as f:
        return f.read()


def sync_switcher_tab(html: str) -> str:
    if '/blog/tamp-fast-sim/' in html:
        return html
    tab_html = (
        '        <a href="/blog/tamp-fast-sim/" class="blog-post-tab">\n'
        '          <span class="blog-post-tab-kicker">M9G-TR-2026-06 • 3D TAMP Lite-Sim</span>\n'
        '          <span class="blog-post-tab-title">Browser-Native Multi-Robot &amp; Smart Factory WebGL</span>\n'
        '        </a>\n      </nav>'
    )
    return re.sub(
        r'(class="blog-post-tab[^"]*">\s*<span class="blog-post-tab-kicker">M9G-TR-2026-05[^<]*</span>\s*<span class="blog-post-tab-title">[^<]*</span>\s*</a>)\s*</nav>',
        r"\1\n" + tab_html,
        html,
        count=1,
    )


def fix_fastsim_blog(html: str) -> str:
    return html.replace("—and ", ": ").replace("—a ", ", a ").replace("—", " - ").replace("&mdash;", " - ")


def process_all() -> None:
    vla_path = "blog/VLA/index.html"
    vla_fixed = sync_switcher_tab(fix_vla_blog(_read_nonempty(vla_path)))
    with open(vla_path, "w", encoding="utf-8") as f:
        f.write(vla_fixed)

    stamp_path = "blog/stamp/index.html"
    stamp_fixed = sync_switcher_tab(fix_stamp_blog(_read_nonempty(stamp_path)))
    with open(stamp_path, "w", encoding="utf-8") as f:
        f.write(stamp_fixed)

    sdl_fixed = sync_switcher_tab(fix_sdl_blog(_read_nonempty("blog/sdl-survey/index.html")))
    with open("blog/sdl-survey/index.html", "w", encoding="utf-8") as f:
        f.write(sdl_fixed)
    with open("blog/sota-isaacsim-multi-robot-sdl-survey/index.html", "w", encoding="utf-8") as f:
        f.write(sdl_fixed)

    agent_fixed = sync_switcher_tab(fix_agent_blog(_read_nonempty("blog/m9g-agent/index.html")))
    with open("blog/m9g-agent/index.html", "w", encoding="utf-8") as f:
        f.write(agent_fixed)
    with open("blog/m9g-agent-corps/index.html", "w", encoding="utf-8") as f:
        f.write(agent_fixed)

    lazydash_path = "blog/lazy-dash/index.html"
    lazydash_fixed = sync_switcher_tab(fix_lazydash_blog(_read_nonempty(lazydash_path)))
    with open(lazydash_path, "w", encoding="utf-8") as f:
        f.write(lazydash_fixed)

    fastsim_path = "blog/tamp-fast-sim/index.html"
    if os.path.exists(fastsim_path):
        fastsim_fixed = fix_fastsim_blog(_read_nonempty(fastsim_path))
        with open(fastsim_path, "w", encoding="utf-8") as f:
            f.write(fastsim_fixed)

    hub_path = "blog/index.html"
    hub_fixed = fix_blog_hub(_read_nonempty(hub_path))
    with open(hub_path, "w", encoding="utf-8") as f:
        f.write(hub_fixed)


def verify_all() -> None:
    errors = []
    for p in sorted(glob.glob("blog/**/index.html", recursive=True)):
        txt = open(p, encoding="utf-8").read()
        if len(txt.strip()) < 1000:
            errors.append(f"{p}: File is empty or truncated ({len(txt)} bytes)")
        # 1. Verify JSON-LD parses cleanly
        for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', txt, flags=re.S):
            try:
                json.loads(m.group(1).strip())
            except Exception as e:
                errors.append(f"{p}: Invalid JSON-LD: {e}")

        # 2. Strip <script> and <style> and check for raw LaTeX, backticks, or symbol equations
        body = re.sub(r"<(script|style)\b[^>]*>.*?</\1>", "", txt, flags=re.S | re.I)
        latex_hits = re.findall(r"(\\(?:mathcal|text|texttt|textsc|frac|sum|forall|in|subseteq|cup|cap|rightarrow|leftarrow|to|times|cdot|le|ge|neq|approx|min|max|arg|mathbb|mathbf|alpha|beta|gamma|delta|tau|pi|sigma|omega|Omega|Delta|Lambda)\b|\$[^0-9\s<][^$<]{0,80}\$)", body)
        if latex_hits:
            errors.append(f"{p}: Raw LaTeX hits: {latex_hits[:5]}")
        backtick_hits = re.findall(r"`[^`\n]+`", body)
        if backtick_hits:
            errors.append(f"{p}: Raw backtick hits: {backtick_hits[:5]}")
        md_bold_hits = re.findall(r"\*\*[^*\n]+\*\*", body)
        if md_bold_hits:
            errors.append(f"{p}: Raw markdown bold hits: {md_bold_hits[:5]}")
        symbol_hits = re.findall(r"(∀|⊆|∪|∩|\|\|p_|\bH_[TM]\b|\bC_[TMfh]\b)", body)
        if symbol_hits:
            errors.append(f"{p}: Raw math symbol hits: {symbol_hits[:5]}")

    if errors:
        for e in errors:
            print("ERROR:", e)
        sys.exit(1)
    print("VERIFIED: 0 broken equations, 0 raw LaTeX/backtick tokens, 100% valid JSON-LD across all blog files.")


if __name__ == "__main__":
    process_all()
    verify_all()
