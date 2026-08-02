# Luigi — 1.1.0

## Changes

### Jab / Tilts

**Jab**
can now cancel jab 2 into specials
can cancel jab 2 into attacks

**Forward Tilt**
low angle iasa: 32 → 27
low angle sped up 1.5x
other angles iasa: 34 → 30
endlag sped up 1.7x
bkb: 2 → 40
can now cancel with jump

**Up Tilt**
bkb: 30 → 60
kbg: 123 → 50
sped up 1.3x

**Down Tilt**
hitbox id 0 angle: 361 → 270 → 361
iasa: 35 → 28
trip rate: .3 → 1. (move now has a 100% trip rate, should be noted that will only trip for as long as the move doesn't launch and trip cannot combo into itself, i.e. this should not cause infinites)
added set knockback: 10
endlag sped up 1.2x
endlag sped up 1.4x

### Aerial Attacks

**Neutral Air**
sped up after initial hit 1.6x
iasa: 46 → 39

**Forward Air**
damage: 10 → 12 → 15 → 16
angle: 361 → 55 → 30
slowed startup .2x
kbg: 80 → 85
hitlag: 1.4 → 1.8

**Back Air**
now has a prominent sweetspot on initial hit
sweetspot damage: 12 → 16
kbg: 100 → 110 → 100
hitlag: 1.6 → 2

**Up Air**
angle: 55 → 65 → 80
endlag sped up 1.3x
iasa: 30 → 25
kbg: 100 → 60
bkb: 0 → 20

**Down Air**
hitbox id 0 angle: 361 → 270
now a multihit
reworked multihit and now has final hit
damage on multihit: 3 → 2

### Smash Attacks

**Forward Smash**
startup sped up 1.8x

**Up Smash**
sweetspot damage: 15 → 18
sourspot damage: 12 → 15
startup sped up 1.3x
can now slide during up smash

**Down Smash**
front hit angle: 120 → 52
back hit angle: 70 → 120
endlag sped up 1.3x
iasa: 35 → 30
no longer makes Luigi slide
all angles made 361
startup sped up 1.3x
kbg: 80 → 100
now carries momentum again
now boosts luigi forward
angle: 361 → 270(grounded)/90(air)
extended hitbox duration: 2 → 4

### Special Moves

**Neutral B**
can now landing cancel
fireballs last longer: 50 → 75
hitlag: 1 → 2

**Side B**
can cancel ending into specials or jump

**Up B**
sweetspot size: 2 → 5
sweetspot active frames: 1 → 3
aerial Up B now as strong as grounded Up B

**Down B**
final hitbox active frames: 1 → 4
removed multihit on ground version
endlag sped up 1.35x
can now cancel into attacks
can now cancel the move with ground attacks after starting in the air (couldn't do this before)
aerial version multihit reworked
aerial down b angle: 365 → 361
can no longer cancel aerial down b into attacks after landing
can cancel grounded down b into attacks much earlier
can cancel down b into jump
endlag of aerial down b sped up 1.5x

### Other

**Dash Attack**
sped up 1.3x
final hit damage: 2 → 4
sdi multiplier on multihit: 1.6 → .5
multihit bkb: 1 → 5
can special cancel before the final hit
reworked multihits to function
final hit angle: 361 → 90
sped up endlag 1.5x
final hit now trips
removed speed up during move

**Down Throw**
angle: 80 → 90
bkb: 75 → 90
kbg: 30 → 20
pseudo-wavedash added (0.8.0) → removed (0.9.0)
improved aerial mobility
increased fall speed

fixed shield reflect bubble

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Run Speed | 1.34 → 1.45 → 1.57 → 1.6 |
| Initial Dash Speed | 1.28 → 1.5 |
| Crawl Speed | .7/.4 → 1.2 |
| Ground to Air Momentum | buffed |
| Weight | 97 → 98 |
