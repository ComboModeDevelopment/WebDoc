# Dr. Mario — 1.2.0

## Changes

### Jab / Tilts

**Jab**
jab 1 hitbox id 2 angle: 361 → 80
endlag slowed 0.8x
jab 3 angle: 361 → 55
jab 3 bkb: 30 → 60
jab 3 kbg: 95 → 70
jab 3 sped up endlag
removed slow down between jabs
jab 1/2 angle: 361 → 365
can cancel jab2 into attacks

**Up Tilt**
angle: 70 → 76
damage: 9 → 12
reworked animation to give it more range
added 1 new spike hitbox (damage 12, trajectory 270, bkb 70, size 5.5)
hitbox id order reshuffled

**Down Tilt**
damage: 10 → 12
range buffed
adjusted animation for more range
angle: 110 → 100
added 2 new spike hitboxes (damage 12, trajectory 265, bkb 70)
hitbox id order reshuffled

### Aerial Attacks

**Neutral Air**
initial hit active frames: 1 → 3
late hit kbg: 110 → 100
initial hit angle: 361 → 55
early hit active frames: 2 → 3
weak hit now trips and has set knockback
angle: 55 → 0
2 hitboxes hitlag multiplier: 1.4 → 2

**Forward Air**
removed slowdown
no longer has a sourspot
bkb: 50 → 45
damage: 19 → 18
kbg: 100 → 95
angle: 57 → 40

**Up Air**
bkb: 9 → 25
kbg: 100 → 85
range buffed
endlag sped up 1.3x
faf: 4 → 3
active frames:+3
endlag sped up: 1.35 → 1.45
added 2 new mid-hitboxes (damage 11, trajectory 25, kbg 50, bkb 25, sizes 4.5/5.5)
timing restructured: old async 11 split into async 5 (before new hitboxes) + async 13 (after)

**Down Air**
startup sped up 0.9x → 1.2x
bkb: 60 → 75
kbg: 50 → 80
adjusted animation for more range

### Smash Attacks

**Forward Smash**
improved hitbox sizes

**Forward Smash Charge Start**
removed 0.7x startup frame speed modifier

**Forward Smash (up angle)**
all 3 hitboxes kbg: 97 → 110
all 3 hitboxes hitlag multiplier: 1 → 2

**Forward Smash (down angle)**
all 3 hitboxes kbg: 97 → 110
all 3 hitboxes hitlag multiplier: 1 → 2

**Up Smash**
improved hitbox coverage

**Down Smash Charge Start**
added 0.5x startup frame speed modifier

### Special Moves

**Neutral B**
sped up
removed slowdown

**Up B**
can no longer hit the sourspot after the sweetspot
can now perform an up b cancel by holding shield on the ground
now holding b cancels move on ground
now spikes vs grounded opponents for combos

**Side B**
can cancel into attacks
all 6 multi-hit hitboxes damage: 8/8/7 → 11 (uniform)

**Down B**
gives better lift in air
endlag sped up 1.5x → 1.2x
kbg: 125 → 100
slowed endlag
added 2.5x endlag frame speed modifier (faster endlag)
added 2 lingering windbox-style hitboxes (damage 2, trajectory 80, size 5) during endlag

### Other

now a part of Combo Mode; has Melee Doctor Mario and Ultimate Doctor Mario elements
has Ultimate stomp, killing Up B, and tornado Down B
slower than Mario in the air and on the ground, but has much greater kill power and high damage
has the Melee Mario wall jump out of Up B

**Dash Attack**
sweetspot bkb: 70 → 80
sweetspot kbg: 50 → 35
sweetspot damage: 11 → 13
sourspot bkb: 45 → 65
sourspot damage: 9 → 10
sped up after 1st hit 1.3x
added 2 new first-hit hitboxes: damage 13, trajectory 270 (spike), bkb 130

**Up Throw**
given ult animations

**Back Throw**
slowed .7x
damage: 15 → 17

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Run Speed | 1.45 → 1.59 → 1.55 → 1.65 |
| Initial Dash Speed | 1.5 → 1.7 |
| Traction | 0.06 → 0.07 |
| Air Mobility | buffed |
| Dash Speed | 1.7 → 1.4 → 1.6 |
| Weight | 102 → 98 |
