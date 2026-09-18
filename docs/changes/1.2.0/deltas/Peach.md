# Peach — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Forward Tilt**
first hit damage: 13/11/10 → 11/11/11 (unified across hitboxes)
first hit kbg: 85 → 50
first hit bkb: 35 → 50
hitbox id 1 angle: 100° → 90°
hitbox id 2 angle: 80° → 100°
second hit damage: 6 → 9
second hit kbg: 50 → 30
added mid-move speedup (1.8x between hits)
endlag sped up further (1.3x → 1.6x)

**Up Tilt**
redone animation and move to be a frying pan swing
reworked from a wide special-collision sweep into a compact 3-hitbox punch (dmg 10, angle 80°, kbg 66, bkb 60, hitlag 1)
startup restructured for faster overall pacing

**Down Tilt**
removed one hitbox (id 3D0002) — can no longer spike aerial opponents
third hitbox angle: 270° → 90°
kbg: 100 → 60 on all hitboxes
hitbox id 0 bkb: 60 → 99
hitbox id 1 bkb: 15 → 50

### Smash Attacks

**Forward Smash**
sped up startup 2x
subroutines for up/normal/down variants inlined (now only swings frying pan)
kbg: 68 → 100 (normal angle)
hitlag: 1 → 2 on all hitboxes

**Up Smash**
given gfx for much more range
main hit damage: 17 → 19
added new special offensive collision sweep (dmg 19, size 11, kbg 90, bkb 40, hitlag 2)
removed side hits (bones 2/3, dmg 8)
late hits unchanged (dmg 12/10)

**Down Smash**
multihit damage: 2 → 4
final hit damage: 5 → 2
endlag sped up (FSM 1.7x → 1.85x)

### Aerial Attacks

**Neutral Air**
endlag sped up 2x

**Forward Air**
reworked so peach now swings her frying pan
removed startup slowdown (FSM 0.75x → 1x)
damage: 16 → 18
hitlag: 1.5 → 2
kbg: 80 → 66
changed from special-offensive (rehit-rate multihit) to plain offensive collisions (added third hitbox)

**Back Air**
endlag sped up 2x
sped up hitbox duration 1.5x
all hitboxes angle: 361 (Sakurai) → 55°

**Up Air**
animation adjusted for better swing arc
startup delay: 15 → 13 frames

### Special Moves

**Side B (grounded)**
startup sped up (FSM 1.35x → 2x)

**Side B (jump / mid-move)**
FSM 1.35x → 1.6x
inert collision size: 3.5 → 4

**Side B (end / aerial end)**
FSM 1.35x → 2.5x
hit damage: 15 → 17
angle: 25° → 55°
kbg: 40 → 70
hitlag: 1 → 2
landing this move in the air now restores double jump (situation.module09_00 trigger on impact)

### Other

**Dash Attack**
given more range (added +0.85 horizontal momentum boost at startup)

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Ground to Air Momentum | buffed |
| Air Mobility | nerfed |
