# Snake (P+) — 1.2.0

## Changes since 1.1.0

### Special Moves

**Up B (Cypher) — fuel refill bug fix**
The Cypher fuel counter (`LA-Float[52]`) previously only reset in one obscure state, so after using Up B in the air Snake's fuel never refilled. It now resets whenever Snake is idle (Wait1), rolls up from a knockdown (PassiveStandF/B, PassiveWall), grabs a ledge (CliffCatch), or escapes a grab (CaptureCut). Cypher recovery now works as intended between uses.
