# Pit — 1.2.0

## Changes since 1.1.0

### Special Moves

**Side B (Angel Ring)**
grounded startup sped up 1.5x (added FSM 1.5x at start of SpecialSStart)
aerial startup sped up 1.5x (same FSM added to SpecialAirSStart)
hold speed sped up further (FSM 1.8x → 2.5x, then 1.3x → 2x mid-move)
goto target relocated (both grounded and aerial variants now point to the reworked Angel Ring implementation)

**Up B (Wings of Icarus)**
heavy armor removed from all phases — SpecialHiStart (was tolerance 17), SpecialHiFly (was tolerance 10), SpecialHiFlyTurn (was tolerance 10), and SpecialAirHiStart (was tolerance 10) all no longer grant super heavy armor
armor slots replaced with internal state flag (`work.bitSet(LA-Bit[70])`) — Pit is now fully vulnerable during Wings of Icarus

### Other

Internal state tracking cleanup: `LA-Bit[70]` cleared at the start of most idle/movement/damage/getup subactions.
