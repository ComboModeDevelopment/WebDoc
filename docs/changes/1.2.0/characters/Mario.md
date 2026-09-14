# Mario — 1.1.0

## Changes

### Jab / Tilts

**Up Tilt**
damage: 7 → 9 → 10
kbg: 130 → 90
bkb: 28 → 35

**Down Tilt**
iasa: 35 → 26 → 22
damage: 5/7 → 8 → 9
bkb: 20 → 35

**Jab**
jab 1+2 angles: 361 → 365
can cancel jab 2 into attacks

### Aerial Attacks

**Forward Air**
all angles are now 270, keeps sourspot damage and knockback
iasa: 60 → 46
sweetspot damage: 13 → 16
bkb: 20 → 50
kbg: 80 → 60
angle: 270 → 295 → 270 (late hit)
first active frame: 16 → 15
first 2 frames of startup are now a horizontal kill move as opposed to a spike
initial hit bkb: 30 → 38
initial hit kbg: 100 → 105
initial hit damage: 15 → 16
startup sped up 1.4x

**Neutral Air**
initial hit damage: 10 → 12 → 14 → 12 → 13
late hit damage: 5 → 7
kbg: 100 → 110 → 95 → 101
sweetspot bkb: 20 → 35

**Up Air**
angle: 45 → 55 → 50 → 55
iasa: 30 → 24
faf: 4 → 3

**Back Air**
initial hit kbg: 95 → 115 → 117
sweetspot damage: 12 → 15
iasa: 34 → 29
bkb: 10 → 17

**Down Air**
multihit hitbox id 1 size: 7 → 5
multihit hitbox id 1 angle: 94 → 270
now has P+ dair animation and new dair properties
angle vs grounded opponents: 270 → 280 → 365
angle vs aerial opponents: 80
final hit angle: 80
fixed a bug where the final hit lingered the entire duration of the endlag
removed slow down on startup, only on endlag

### Smash Attacks

**Forward Smash**
all angles made the same
swapped hitbox id 0/2
sweetspot kbg: 90 → 100 → 105
sweetspot bkb: 25 → 30
startup sped up 2x

**Down Smash**
kbg: 73 → 105 → 90
damage: 15 → 16
bkb: 40 → 42
back hit now matches front hit

**Up Smash**
damage: 14 → 16
kbg: 90 → 100
added iasa: 29
bkb: 32 → 45
startup sped up 1.4x

### Special Moves

**Side B**
buffed as recovery tool
sped up 1.2x

**Up B**
can now cancel the grounded version with movement
initial hit skb: 130 → 90
added bkb: 20
damage: 5 → 7
can now wall jump out of up b
hitbox segment slowed so it lasts a bit longer
first hit damage: 7 → 6
no longer invincibile on startup
reworked so now holding b during grounded up b makes the move cancel into his heavy landing

**Down B**
charges much faster and pushed Mario much further
added iasa in the air: 21
can now use this move to recover

**Neutral B**
sped up 1.2x
fireballs last longer
damage: 5 → 7

### Other

**Dash Attack**
made the hitboxes on both sourspots larger (sourspot late hit dash attack was previously unhittable)
sweetspot angle: 110 → 100
late hit sweetspot angle: 120 → 110
damage: 9/7 → 11/9
given more range

new dash attack, up air, fair, d smash animations

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Dash Speed | 1.5 → 1.6 |
| Run Speed | 1.6 → 1.73 |
