# Ganondorf — 0.9.0

## Changes

### Jab / Tilts

**Jab**
startup sped up 2x, rest of move still sped up 1.3x

**Forward Tilt**
sped up 1.2x

**Up Tilt**
new uppercut up tilt repurposing the swing tilt animation (replaces previous up tilt changes)
bkb: 30
kbg: 100
damage: 11
removed a .8x slowdown on endlag

**Down Tilt**
sped up 1.2x

### Aerial Attacks

**Neutral Air**
swapped hitbox id's on 0 and 2
endlag sped up 1.4x
iasa: 45 → 40

**Forward Air**
fixed the iasa so it functions properly (iasa 45)
sourspot damage: 15 → 17
sweetspot damage: 18 → 19
endlag sped up 1.4x
sweetspot hitlag increased to indicate landing it better

**Back Air**
sweetspot damage: 16 → 17
kbg: 85 → 95
sweetspot hitlag increased to indicate landing it better

**Down Air**
endlag sped up 1.3x
iasa: 45 → 40

### Smash Attacks

**Down Smash**
first hit now matches 2nd hit, move is no longer a multihit
damage: 14 → 16
2nd hit kbg: 75 → 90

**Up Smash**
hitbox id0/1 swapped
id1 is now a stronger sweetspot
startup sped up 1.4x, rest slowed .9x

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
grounded side b iasa: 53 → 49

**Up B**
startup sped up 1.8x, rest sped up 1.1x
can cancel release into a double jump or another special

**Down B**
landing lag now sped up 2x
grounded damage: 12/10 → 17 → 16
grounded kbg: 70 → 80 → 75
aerial late hit angle: 80 → 290
aerial down b restores double jump
can now double jump out of endlag sooner
buffed hitbox sizes to match move

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

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Run Speed | 1.16 → 1.36 |
| Initial Dash Speed | 1.3 → 1.5 |
| Air Mobility | buffed |
