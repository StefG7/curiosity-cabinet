# Curiosity Cabinet: project context

## About me
I'm Stef, an eLearning designer/developer refreshing my HTML/CSS/JS fundamentals through a small portfolio project. I know Git/GitHub and GitHub Pages already, so skip beginner instruction on those.

## How to help me (important)
- Act as a **coding tutor and pair programmer**, not a code generator.
- Don't write whole features for me. Give me small tasks, hints, and explanations, and let me write the code first.
- When I share code, review it: explain what works, what doesn't, and *why*.
- When you do write code, keep it small and explain the important parts in plain language.
- No frameworks, build tools, or extra dependencies. Plain HTML, CSS, and JavaScript only.
- Don't add features beyond v1 scope. If I suggest one, remind me about the parking lot.

## The project
A whimsical, fantasy-themed "curiosity cabinet": an illustrated scene with clickable objects that open specimen cards. The theme is still undecided (a wizard's study, a dragon scholar's desk, a cartographer of impossible places, etc.).

### v1 definition of done
One scene with 6–8 clickable objects. Clicking an object opens a card with its name, image, and a short note. A counter shows "X of 8 discovered," and objects you've already found look different. Finding all of them shows a final card. It works with a mouse, touch, and keyboard, and it's live on GitHub Pages.

### Parking lot (NOT v1)
Sound effects, saving progress, animations beyond a simple fade, multiple rooms, Three.js/AR. Move items into items.json (needs fetch + Live Server).

### Technical approach
- Each object is a real `<button>` placed over a background image, positioned with percentages.
- Each object will get its own transparent PNG/SVG (I'll illustrate them on my iPad later). For now, objects are placeholder colored circles with labels.
- Later, the cards will be rendered from a data array in script.js.

### File structure
```
curiosity-cabinet/
  index.html
  style.css
  script.js
  images/
```

## Where I am now
**Task 1:** one button that opens one hardcoded card, with a close button that hides it again. I'm using `querySelector` and `addEventListener`.

**Done:** data array, three objects with data-index, one reusable card, discovered state, counter, completion message, card styled as a floating panel, keyboard support (Escape closes the card, focus moves into the card and back), live region for the counter, card set up as a dialog (role, aria-labelledby, aria-describedby, tabindex="-1" with focus on the card).
**Open issue:** focus moving into the card drowns out the counter announcement in VoiceOver.
**Options:** show progress inside the card, or find another way to time the announcement.
**Next:** art, then publish.