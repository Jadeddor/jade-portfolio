# jade dorsainvil — portfolio

Personal portfolio and blog built with React. Live at [jadedorsainvil.vercel.app](https://jadedorsainvil.vercel.app)

---

## built with

- React + React Router
- Pure CSS (no component libraries)
- Deployed on Vercel
- Contact form via Formspree
- Blog on [Substack](https://substack.com/@jadedor)

---

## pages

| Page | What it is |
|------|-----------|
| `/` | Home — hero, personality strip, disciplines |
| `/about` | Story, experience, education, skills |
| `/projects` | Selected work with filter by category |
| `/blog` | Writing — links to Substack |
| `/contact` | Contact form → hits my inbox |

---

## running locally

```bash
npm install
npm start
```
Opens at `http://localhost:3000`

---

## how to update the site

**Making a change:**
1. Edit the file in VSCode
2. Save — browser updates live at `localhost:3000`
3. When happy, push to GitHub:

```bash
git add .
git commit -m "what you changed"
git push
```
Vercel auto-deploys within ~60 seconds. No extra steps.

---

## adding a new project

Open `src/pages/Projects.js` and add an object to the `PROJECTS` array at the top:

```js
{
  id: 5,
  n: '05',
  icon: '🔧',
  title: 'Your Project Name',
  sub: 'One line description',
  desc: 'Longer description of what it does.',
  tech: ['React', 'Python'],
  tags: ['Full-Stack'],
  github: 'https://github.com/Jadeddor/your-repo',
  live: 'https://your-live-url.com',
  status: 'Live',
}
```

---

## swapping a photo

1. Add your image to `src/assets/`
2. Import it at the top of the file:
```js
import myPhoto from '../assets/my-photo.jpg'
```
3. Use it: `src={myPhoto}`

---

## contact form

Powered by Formspree — submissions go straight to `jadedor04@gmail.com`.
Free plan = 50 submissions/month.

---

*designed & built by jade dorsainvil · 2026*
