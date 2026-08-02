# Ganondorf — 1.1.0

## Changes

### Jab / Tilts

**Jab**
startup sped up 2x, rest of move still sped up 1.3x
new animation
adjusted hitboxes to cover more area
now reflects projectiles

**Forward Tilt**
sped up 1.2x
startup sped up 1.4x, endlag sped up 1.3x
now has down angled f tilt (P+) and up angled f tilt (which is P+ up tilt)

**Up Tilt**
new uppercut up tilt repurposing the swing tilt animation (replaces previous up tilt changes)
bkb: 30
kbg: 100
damage: 11
removed a .8x slowdown on endlag
edited the animation so the move now has more range and looks better
endlag sped up 1.2x

**Down Tilt**
sped up 1.2x
edited the animation to give the move more range
all angles made 80 vs aerial opponents, 276 vs grounded
endlag sped up 1.3x

### Aerial Attacks

**Neutral Air**
swapped hitbox id's on 0 and 2
endlag sped up 1.4x
iasa: 45 → 40
1st hit all angles made 65
2nd hit all angles made 55
adjusted animation to make 2nd hit lower
1st hit damage: 11 → 9
1st hit kbg: 100 → 75
1st hit bkb: 30 → 55

**Forward Air**
fixed the iasa so it functions properly (iasa 45)
sourspot damage: 15 → 17
sweetspot damage: 18 → 19
endlag sped up 1.4x
sweetspot hitlag increased to indicate landing it better
swapped hitbox priority, sweetspot easier to land

**Back Air**
sweetspot damage: 16 → 17
kbg: 85 → 95
sweetspot hitlag increased to indicate landing it better

**Down Air**
endlag sped up 1.3x
iasa: 45 → 40

**Up Air**
first active frame 1 frame earlier

### Smash Attacks

**Down Smash**
first hit now matches 2nd hit, move is no longer a multihit
damage: 14 → 16
2nd hit kbg: 75 → 90
restored it as a multihit that combos similar to melee

**Up Smash**
hitbox id0/1 swapped
id1 is now a stronger sweetspot
startup sped up 1.4x, rest slowed .9x
edited the animation so ganon swings his leg out in front of him (more range), reworked hitboxes

**Forward Smash**
buffed all damage

### Special Moves

**Neutral B**
sped up 1.2x

**Side B**
can now cancel the ground and air version into a grounded attack much faster after grab connects
if ganon still has his double jump during an aerial grab he can jump out of it
sped up 1.2x
landing aerial side b now restores your double jump if you used it, meaning you can always jump out of air side b when it connects
grounded side b now sped up 1.35x
after connecting you can now act out of it with anything rather than just attacks
aerial side b now launches the opponent upwards after landing with a grabbed opponent
grounded side b iasa reverted
air first active frame: 19 → 15
ground first active frame: 16 → 15
aerial side b now has a weak hitbox that allows ganon to scoop opponents off a platform on a missed tech
increased aerial miss landing lag: 20 → 40
reduced aerial grab hitbox sizes + adjusted placement
aerial version launch angle: 80 → 70
slowed aerial version startup
can now only jump out of aerial side b if you still have your double jump
aerial side b now has an alternative angle if B is held that kills on DI away

**Up B**
startup sped up 1.8x, rest sped up 1.1x
can cancel release into a double jump or another special
final hit knockback fixed and endlag sped up

**Down B**
landing lag now sped up 2x
grounded damage: 12/10 → 17 → 16
grounded kbg: 70 → 80 → 75
aerial late hit angle: 80 → 290
aerial down b restores double jump
can now double jump out of endlag sooner
buffed hitbox sizes to match move
buffed hitboxes to cover his leg fully

### Other

**Dash Attack**
sped up 1.2x
angle: 105/100 → 80
first active frame: 10 → 8

**Grab**
range buffed, size buffed

**Up Throw**
kbg: 106 → 85
endlag sped up 1.35x

**Down Throw**
angle: 65 → 75
ganon has his P+ dash and run animation

slightly buffed jump height so he can now reach plats easier

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Run Speed | 1.16 → 1.36 → 1.5 |
| Initial Dash Speed | 1.3 → 1.5 |
| Air Mobility | buffed |
| Weight | 109 → 114 |
