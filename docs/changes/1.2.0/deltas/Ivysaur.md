# Ivysaur — 1.2.0

## Changes since 1.1.0

### Jab / Tilts

**Forward Tilt**
5 multi-hit hitboxes trajectory: 361 (Sakurai) → 80 (upward)
5 multi-hit hitboxes wkb added: 0 → 10
added conditional follow-up: on hit-connect, transitions into new AttackS3S2 subaction

**Forward Tilt Follow-up (NEW)**
new subaction added
2 hitboxes (damage 6, trajectory 70, kbg 40, bkb 100)
plays over ~24 frames total with a 3-frame gap between hits

**Down Tilt**
first wave (4 hitboxes) damage: 4 → 6
first wave hitbox sizes: 4 → 5.5
first wave DI multiplier: 1 → 0 (much harder to DI)
hitbox 5 (0x340003) X offset: 1 → -3 (moved behind)
second wave hitbox sizes: 4/5/5/4 → 7/6/6/5.5 (much bigger)

### Aerial Attacks

**Forward Air**
sync timer: 6 → 7 frames

### Other

**Dash Attack**
added forward momentum kick at start (+0.6 horizontal velocity)
mid async timer: 19 → 24 frames (more delay between hits)
