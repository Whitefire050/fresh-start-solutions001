<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the research website in public/student-site as standalone HTML, CSS and browser JavaScript; the platform index is only a preview iframe, so the Apache delivery has no framework or server-runtime dependency.
- Package only the standalone website and its local assets for Apache; exclude platform source, dependencies and generated output.
