# Mage Ganondorf — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Jab (Darkness Blast)**
faf: 9 → 5
startup sped up considerably (was 3x/2.5x, now 5x/3.6x)
redid darkness blast to be multihit (initial hit → sustained multihit special collision, rehit rate 3 → final special hit dmg 4, kbg 70, bkb 70)
main hit damage: 9 → 4
main hit trajectory: 361 (Sakurai) → 0° (horizontal)
main hit hitlag: 1 → 1.3
added weight-based knockback component (weight kb 10)
total move duration extended

**Up Tilt**
removed speedup on startup
sped up multihit: 1.85x → 3x
reworked from mixed offensive/special hitboxes to primarily special offensive collisions
multihit iteration hits reduced (4 collisions → 1 per loop cycle)
removed gfx to drastically reduce range

**Down Tilt**
new animation with far more range
removed 2nd hit (was a button-press hold loop; now a single strong strike)
startup slowed (was 6x/5x speedup, now 2x/1x)
hit damage: 6 → 13/11 (across coverage hitboxes at spike 270° / 100° / 80°)
hitlag: 1.2 → 0.5

### Smash Attacks

**Forward Smash (all angles)**
removed sourspot (outer hitboxes id 1/2/3 damage: 14 → 17, matching sweetspot)
hitlag: 1 → 1.8
startup sped up (FSM 1.8x → 2x)

**Smash Charge**
charging animation slightly sped up across phases

### Aerial Attacks

**Neutral Air**
reworked to be a multihit
was: 2-hit (dmg 9 → dmg 6)
now: 4 multihits at dmg 2 each (alternating Sakurai / 110°) + final hit dmg 6 (angle 55°)
removed follow-up subaction transitions
startup delay adjusted (5 → 2 frames)

**Forward Air**
angle: 60° → 40°
damage: 12 → 16
removed speedup on startup

**Up Air**
new animation and properties
was: 3 tiny multihits (dmg 3, size 6, weight-kb) + long tail with special multihit + strong hit + follow-up loops
now: 3 focused hits (dmg 8, angle 25°, size 4) then terminate
overall move much shorter and cleaner
startup delay: 5 → 7 frames

### Grab / Throws

**Down Throw**
removed multiple animation-pacing slowdowns (previously stepped through FSM 0.5x/0.6x/0.7x/0.85x/1.2x/1.3x/2.5x)
now runs at simpler timing with just a 1.4x speedup at release
total throw sped up considerably

### Special Moves

**Neutral B (Aerial Darkness Blast Shoot)**
sped up throw speed (FSM 1.4x → 2x)
recovery timing tweaked (FSM 0.6x → 0.9x, less slowdown)

**Side B (grounded + aerial)**
sped up: startup FSM 1.4 → 2
endlag FSM 0.6 → 0.9 (less slowdown)
removed several intermediate slowdown FSMs (0.6x, 0.6x, 1.7x → gone)
added 1.5x speedup on endlag after collision terminates
overall move much faster

### Other

**Run Speed**
1.71 → 1.87

**Shared aerial subroutine**
removed multiple mid-move slowdowns that applied across Nair/Fair/Uair
  - 0.35x → 1x
  - 0.6x → 1x
  - 0.5x → 1x
  - 0.2x → 1x
  - 0.6x → 1x
  - 0.55x → 1x
added 1.5x speedup at one shared point
aerials generally faster and less floaty during animation
