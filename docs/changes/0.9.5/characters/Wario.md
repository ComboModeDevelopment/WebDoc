# Wario — 0.9.5

## Changes

### Jab / Tilts

**Jab**
jab 2 iasa: 32 → 26
fixed a bug where jab 2 had no end lag, now is actually iasa frame 32
jab 1 angle: 60 → 270
jab 1 given skb: 10
bkb: 15 → 25

**Forward Tilt**
sped up 1.2x
startup sped up 1.35x
hitbox duration: 4 → 7

**Up Tilt**
startup sped up 1.3x (corrected from 0.5.0)
added iasa: 30
damage: 10 → 13
sourspot damage: 6 → 9
kbg: 74 → 56
first active frame: 12 → 11
reworked hitboxes to properly be attached to Wario's hands, allows the move to hit lower and have more range

**Down Tilt**
iasa: 34 → 26 → 22
damage: 8 → 11
angle: 75 → 90
bkb: 50 → 80
kbg: 60 → 50

### Aerial Attacks

**Neutral Air**
initial hit damage: 9 → 11
late hit damage: 4 → 8
angle: 40/361 → 55

**Forward Air**
added iasa: 28
angle: 361 → 55
sweetspot damage: 7 → 10
sweetspot kbg: 100 → 120 → 80
late hit bkb: 15 → 30

**Back Air**
damage: 10 → 15
has PM animation and unique properties
bkb: 20 → 25
kbg: 100 → 108

**Down Air**
final hit angle: 361 → 270
kbg: 180 → 90
has PM animation and unique properties
can now double jump out of dair after 26 frames

**Up Air**
angle: 75 → 90
damage: 17 → 15
kbg: 80 → 60
added iasa: 27

### Smash Attacks

**Forward Smash**
removed super armor
added momentum to give it more range
iasa: 41 → 51
fixed bug where if hitting a shield, Wario would slide

**Up Smash**
added skb to multihits: 10
endlag sped up 1.3x
fixed multihit

**Down Smash**
sped up hitboxes 1.4x, endlag 1.9x
has PM animation and unique properties

### Special Moves

**Neutral B**
minimum hold time: 20 → 1
after grabbing someone with Chomp, can cancel into attacks
sped up startup 2x
increased grab hitbox size
added hitbox that allows the move to grab opponents off missed tech

**Up B**
vertical height buffed
can now snap to edge earlier

**Down B**
charges faster
full charge damage: 40 → 30
kbg: 30 → 55
added iasa to no charge waft: 25
full charge waft hitbox size: 11 → 18

### Other

**Dash Attack**
iasa: 37 → 30
sweetspot damage: 7 → 10
sourspot damage: 5 → 7
angle: 70 → 80
late hit angle: 120 → 100 → 80

**Grab**
hitbox size: 4.5/3.5 → 6/5

**Down Throw**
end lag sped up 1.6x
angle: 130 → 110

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Run Speed | 1.35 → 1.55 |
