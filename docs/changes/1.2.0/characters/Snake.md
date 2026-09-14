# Snake — 1.1.0

## Changes

### Jab / Tilts

**Jab**
jab 1 startup slowed .85x
jab 1 endlag slowed .7x
jab 1 can now cancel into specials (like jab 2)
jab 1 sdi multiplier: 1 → 0
jab 1 sourspot angle: 361 → 80 → 361
jab 2 angle: 361 → 80 → 95 → 120 → 365
jab 3 kbg: 115 → 85
input windows for the jabs: 30 → 40
removed slowdown on jab 1 and reverted iasa

**Forward Tilt**
first hit: startup slowed .5x → .6x
first hit damage: 8 → 6 → 7
first hit sourspot angles: 361 → 270
first hit aerial opponent angle: 361 → 80
first hit hitbox size: 7/6/5 → 6/5/4
first hit hitbox id1 bkb: 50 → 10
first hit iasa: 30
first hit can now cancel into specials
made hitbox id3 same as id0
2nd hit input window: 30 → 25
2nd hit damage: 12/10/9 → 11/9/8
2nd hit hitbox sizes: 7/6.5/6/5 → 6/5.5/5/4

**Up Tilt**
initial hitbox id0 removed
initial hitbox id1 and id2 size: 5 → 3
initial hit damage: 13 → 10 → 11
late hit damage: 12 → 9
iasa: 38 → 31
buffed initial hitbox sizes

**Down Tilt**
damage: 10 → 9 → 10
kbg: 100 → 75
iasa: 35 → 28

### Aerial Attacks

**Neutral Air**
startup slowed .8x
multihit sped up 1.2x
hit 1+2 hitbox id2/3 skb: 40 → 55
damage: 6/5/4/13 → 5/4/3/10
3rd hit all angles made 90
reworked hitboxes entierly to prevent infinites
final hit kbg: 95 → 120

**Forward Air**
removed momentum shift
sped up 1.2x
hitbox id0 size: 6.5 → 4
sweetspot angle: 269 → 281
sweetspot damage: 15 → 17
sourspot size: 4 → 5
sourspot angle: 80 → 70
sourspot kbg: 100 → 95
sourspot damage: 14 → 16
sped up startup 1.4x
spike angle: 281 → 295

**Back Air**
swapped around sweetspot and sourspot

**Up Air**
iasa: 36 → 29
sped up move 1.3x, endlag 1.4x

**Down Air**
sped up 1.3x
first 3 hits all skb made 40 on hitbox id0/1
final hit hitbox id0 angle: 361 → 280
final hit hitbox id0 kbg: 110 → 80
multihit hitbox id1 angle: 80 → 365
multihit damage: 6/5 → 4
final hit damage: 12 → 9
sped up: 1.3x → 1.6x
given P+ hitbox values with some tweaks
final hit angle: 280/361 → 55

### Smash Attacks

**Forward Smash**
slowed .9x
bkb: 100 → 75
kbg: 60 → 40 → 65
move now has same hitbox vs air and ground opponents
sped up startup 1.2x
hitbox made larger
damage: 22 → 25

**Down Smash**
sped up 1.7x → 1.3x
mines are now almost impossible to see and last longer
increased hitlag

### Special Moves

**Neutral B**
Snake now pulls out a grenade and picks it up as an item while on the ground; while in the air, he pulls the grenade and drops it instantly
fixed this moves functionality

**Up B**
can now snap the ledge
can now instantly cancel Up B with attacks
removed hitbox on cypher after release

**Down B**
c4 now sticks to the opponent without falling off or transferring onto Snake
c4 will stick to the opponent for 20 seconds before falling off
enemy stick animation: 1.5 → 1.7
removed slowdown on detonate endlag
can now cancel c4 detonate into attacks before the explosion
all c4 planting variations given same treatment as planting on enemy
startup sped up 2x
damage: 17 → 15
angle: 80 → 90
kbg: 90 → 80 → 85
bkb: 40 → 45
can now act out of sticking air opponent much faster
the detection for sticking an opponent + sticking range is much larger
more hitlag on explosion
sped up detonate 1.5x

**Side B**
just buffed the shit out of this move, faster startup, missiles are now faster and stronger

### Other

**Dash Attack**
slowed down .6x → .5x
late hit angle: 110 → 75
hitbox sizes: all increased by 2
iasa: 43 → 35 → 38
removed slowdown on startup

**Up Throw**
bkb: 64 → 75 → 87
kbg: 60 → 40
kbg: 50 → 55

**Down Throw**
sped up 1.5x

**Grab**
pressing B during grab hold now plants c4 on opponents
forward+back throw can be acted out of sooner with specials

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Short Hop | 1.62 → 1.75 |
| Weight | 113 → 104 → 108 |
| Run Speed | 1.35 → 1.45 → 1.57 |
| Dash Speed | 1.1 → 1.35 |
| Air Mobility | increased |
| Ground to Air Momentum | slight buff |
| Jump Height | increased |
| Double Jump Horizontal Mobility | increased |
