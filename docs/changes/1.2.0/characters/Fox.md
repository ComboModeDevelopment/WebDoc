# Fox — 1.2.0

## Changes

### Jab / Tilts

**Jab**
removed rapid jab
jab 2 can cancel into grab and specials
jab 3 is now low angled f tilt

**Forward Tilt**
side damage: 6 → 8
down angle: 361 → 60
side angle: 361 → 20
bkb: 10 → 60
kbg: 100 → 55
can now slide during these moves

**Up Tilt**
damage: 8 → 9
strong hit bkb: 22 → 35 → 40
weak hit bkb: 18 → 25 → 40
kbg: 110 → 90
can now slide during these moves
reworked from single-hit into multi-hit connect + launcher
delays first hit by 2 → 5 frames
old: 4 hitboxes damage 10/9/9/9, trajectories 110/84/80/80, hitlag 1
new connect wave: 3 hitboxes damage 3, trajectories 365/365/95 (autolinking), wkb 10 kbg 90, bkb 15/30/15, hitlag 0.5, DI multiplier 0.2
new launcher wave: 3 hitboxes damage 7, trajectories 80/290/80, kbg 60/90/60, bkb 70/40/70, middle hitbox hitlag 2
mid sped up 1.2x + 19-frame gap timer

**Down Tilt**
iasa: 28 → 22
id0 angle: 45 → 70
hitbox sizes: 3 → 4
given more range
New animation
reworked: 4 hitboxes → 3 hitboxes
damage: 9/9/8/7 → 8/8/8 (uniform)
trajectory: 70/70/80/90 → 80 (uniform)
tripping rate: 0.4 → 0 (removed)
kbg (this pass): 100 → 80
bkb (this pass): 25 → 60

### Aerial Attacks

**Forward Air**
has a new 2-hit fair
removed momentum shifting
first hit angle: 75 → 365
first hit skb: 10
first hit bkb: 10 → 35
between hits sped up 1.4x
2nd hit active frames: 2 → 4
endlag slowed .85x
reverted back to vanilla brawl animation with new multihit properties
now a kill move on the final hit
multihit bkb: 35 → 25

**Back Air**
damage: 15 → 17 → 16
kbg: 85 → 90 → 93
bkb: 20 → 30
sped up endlag 1.5x
startup sped up 2x

**Neutral Air**
angle: 361 → 50 → 55
damage: 9/6 → 10/8
hitbox sizes increased
sped up endlag 1.5/1.7

**Up Air**
kbg: 100 → 120 → 125
first hit sdi multiplier: 1 → .2
first hit angle: 92 → 365
between hits sped up 1.5x
2nd hit damage: 11 → 13
between hits sped up 1.5 → 2.5x
New animation
startup sped up 2x, then 1.3x follow-up speedup
multi-hit hitbox bones relocated (0x150000/0x160001/0x170002 → 0xD0000/0xE0001/0xB0002)
multi-hit inner timer: 2 → 6 frames
middle speedup: 2.5x → 2x
delays launcher wave by 10 → 22 frames

**Down Air**
hitlag multiplier: 1 → .85
bkb: 33 → 15 → 25
damage: 3 → 2
first active frame: 4 → 5
multihit angle: 285 → 365
startup slowed .8x
added another hitbox to cover more of fox's body
startup speed: 1x → 1.2x
multi-hit loop iterations: 7 → 4 (fewer hits)
multi-hit wkb added: 0 → 10 (set-knockback component)
pauses 2 → 3 frames per iteration
added launcher hitboxes at end (damage 3, trajectory 70, kbg 40, bkb 90)
endlag sped up 1.8x

### Smash Attacks

**Forward Smash**
kbg: 96 → 112
damage: 15 → 16
bkb: 10 → 15

**Up Smash**
kbg: 96 → 115 → 103
bkb: 30 → 27 → 30
damage: 17 → 18
improved hitbox placement
Animation redone
delays first hit by 5 → 8 frames
hitbox 4 size: 2 → 6 (much bigger)
delays next event by 6 → 9 frames
mid slowed to 0.5x speed, then reset to 1x

**Down Smash**
made both sides the same
damage: 14/12 → 16
bkb: 50 → 40
New animation
now starts animation from frame 15
delays first hit by 3 → 2 frames
startup slowed to 0.7x speed
2 side hitboxes removed (0xD0001, 0xD0003) - now hits front only per wave
hitlag multiplier: 1 → 2
added second wave of hitboxes (repeats after a timer)

### Special Moves

**Neutral B**
lasers last much longer
laser damage takes longer to fall off
startup sped up 1.8x
laser damage: 3 → 4

**Down B**
shine is reworked: no longer jump cancelable, now cancelable by ground actions (crouching, dashing, walking, etc.); cannot be canceled in the air
increased endlag + startup
startup: 3 → 5
reduced active frames on hitbox
angle (grounded opponents): 10 → 80 → 10 → 20
skb: 30
bkb (grounded opponents): 30 → 35
damage: 5 → 3 → 4 → 5
hitbox size: 6 → 7.5 → 10
shine is no longer invincible on startup
sdi multiplier: 1 → .6
sped up the whole move slightly, hitbox comes out frame 3
air angle: 20 → 0
air skb removed
removed set knockback
bkb: 30 → 60
kbg: 60 → 30
angle: 20 → 0
damage: 5 → 4 (both hitboxes)
trajectory: 0 → 20
hitbox 0 kbg: 30 → 110
hitbox 1 wkb: 0 → 35 (set knockback re-added)
DI multiplier: 0.6 → 1.2 (hitbox 0), 0.6 → 1 (hitbox 1)

**Up B**
startup sped up 1.7x

### Other

**Dash Attack**
damage: 7/5 → 9/8 → 11/9
bkb: 35 → 60
kbg: 90 → 60
New animation
completely reworked into multi-hit + launcher
startup sped up 2x
multi-hit phase slowed to 0.6x speed; hitboxes damage 3, trajectory 365 (autolinking angle), wkb 10, kbg 60, bkb 25
new launcher phase at 0.6x speed: hitboxes damage 7, trajectory 80, kbg 80, bkb 60
mid sped up 1.5x, endlag sped up 2x

**Down Throw**
angle: 60 → 75
kbg: 100 → 60
bkb: 85 → 80

**Up Throw**
endlag sped up 1.5x
now halts momentum

**Back Throw**
sped up 1.6x
angle: 45 → 65
fox has been scaled up slightly, its been bugging me how small he is
buffed ground to air momentum

### Character Parameters

| Parameter | Change |
|-----------|--------|
| Run Speed | 2.08 → 2.2 → 2.35 |
| Short Hop | 2.485 → 2.5 |
| Fall Speed | increased |
| Gravity | increased |
| Weight | 80 → 94 |
