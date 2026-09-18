# Peach — 1.2.0

## Changes

### Jab / Tilts

**Jab**
damage: 3 → 5
angle: 74 → 80
bkb: 0 → 30
iasa: 20 → 18

**Up Tilt**
angle: 60 → 90
sped up 1.2x
redone animation and move to be a frying pan swing
reworked from a wide special-collision sweep into a compact 3-hitbox punch (dmg 10, angle 80°, kbg 66, bkb 60, hitlag 1)
startup restructured for faster overall pacing

**Forward Tilt**
endlag sped up 1.2x, then 1.3x → 1.6x
first hit damage: 13/11/10 → 11/11/11 (unified)
first hit kbg: 85 → 50
first hit bkb: 35 → 50
hitbox id 1 angle: 100° → 90°
hitbox id 2 angle: 80° → 100°
second hit damage: 6 → 9
second hit kbg: 50 → 30
added mid-move speedup (1.8x between hits)

**Down Tilt**
sped up 1.2x, given more end lag to compensate
hitbox id 1/0 size: 5.1 → 5.8
removed one hitbox (id 3D0002) — can no longer spike aerial opponents
third hitbox angle: 270° → 90°
kbg: 100 → 60 on all hitboxes
hitbox id 0 bkb: 60 → 99
hitbox id 1 bkb: 15 → 50

### Aerial Attacks

**Neutral Air**
late hit angle: 361 → 55
endlag sped up 1.2x, then 1.5x → 2x
angle: 361 → 55

**Forward Air**
kbg: 68 → 78 → 80 → 66
bkb: 60 → 65 → 60
sped up 1.5x
damage: 15 → 16 → 18
angle: 361 → 40
given better swing arc
reworked so peach now swings her frying pan
removed startup slowdown (FSM 0.75x → 1x)
hitlag: 1.5 → 2
changed from special-offensive (rehit-rate multihit) to plain offensive (added third hitbox)
startup delay: 15 → 13 frames

**Back Air**
endlag sped up 1.2x → 2x
sped up hitbox duration 1.5x
all hitboxes angle: 361 → 55

**Up Air**
hitbox id 2 angle: 361 → 90
bkb: 0 → 35
kbg: 100 → 80
end lag sped up 1.4x
animation adjusted for better swing arc

### Smash Attacks

**Up Smash**
damage on hitbox id 0: 15 → 17 → 19
id 1/0 kbg: 100 → 110
kbg: 110 → 90
given gfx for much more range
added new special offensive collision sweep (dmg 19, size 11, kbg 90, bkb 40, hitlag 2)
removed side hits (bones 2/3, dmg 8)

**Forward Smash**
sped up startup 2x
subroutines for up/normal/down variants inlined (now only swings frying pan)
kbg: 68 → 100 (normal angle)
hitlag: 1 → 2 on all hitboxes

**Down Smash**
added a final hit that launches at 73 degrees
final hit angle: 73 → 10
added skb to final hit: 10
multihits now have set kb: 10
multihit sdi multiplier: 1 → .4
multihit angle: 145 → 365
endlag sped up 1.25x, then 1.6x → 1.85x
multihit damage: 5 → 2 → 4
final hit damage: 5 → 2
reworked multihit to link better

### Special Moves

**Down B**
sped up turnip pull 1.2x
sped up 1.4x
can now pluck turnips in the air

**Side B**
sped up 1.35x
grounded startup sped up further (FSM 1.35x → 2x)
mid-move FSM 1.35x → 1.6x, inert collision size 3.5 → 4
end/aerial-end FSM 1.35x → 2.5x
end hit damage: 15 → 17
end hit angle: 25° → 55°
end hit kbg: 40 → 70
end hit hitlag: 1 → 2
landing this move in the air now restores double jump

**Up B**
can now grab edge from the back

### Other

**Dash Attack**
no longer a multihit
sped up between hits 2x
move sped up 1.2x after 1st hit
endlag sped up 1.3x
first hit angle: 361 → 365 → 75
first hit damage: 11 → 8
added skb to first hit: 10
1st hit kbg: 50 → 80
2nd hit angle: 65 → 361 → 80
2nd hit damage: 4 → 7
2nd hit kbg: 125 → 90
sped up between hits + endlag more
reworked first hit to connect better
given more range (added +0.85 horizontal momentum boost at startup)

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Air Mobility | buffed → nerfed |
| Ground to Air Momentum | buffed |
| Double Jump | buffed |
| Weight | 90 → 94 |
