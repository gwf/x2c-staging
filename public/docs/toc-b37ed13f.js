// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">The x2c Book</a></span></li><li class="chapter-item expanded "><li class="part-title">Language guide</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/from-c.html"><strong aria-hidden="true">1.</strong> From C to x2c</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/values.html"><strong aria-hidden="true">2.</strong> Values and Var</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/symbols.html"><strong aria-hidden="true">3.</strong> Symbols and Atoms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/collections.html"><strong aria-hidden="true">4.</strong> Strings, Lists, Arrays, and Maps</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/match.html"><strong aria-hidden="true">5.</strong> Pattern Matching</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/iteration.html"><strong aria-hidden="true">6.</strong> Iteration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/memory.html"><strong aria-hidden="true">7.</strong> Scopes and Lifetime</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/contexts-and-threads.html"><strong aria-hidden="true">8.</strong> Contexts and Threads</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/exceptions.html"><strong aria-hidden="true">9.</strong> Exceptions and Cleanup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/protocols.html"><strong aria-hidden="true">10.</strong> Protocols</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/system-macros.html"><strong aria-hidden="true">11.</strong> Classes and System Macros</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/macros.html"><strong aria-hidden="true">12.</strong> Compile-time Macros</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/meta-functions.html"><strong aria-hidden="true">13.</strong> Meta Functions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/packages.html"><strong aria-hidden="true">14.</strong> Packages</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/wrapping-c-libraries.html"><strong aria-hidden="true">15.</strong> Wrapping a C Library</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/scripting.html"><strong aria-hidden="true">16.</strong> Commands and Files</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/repl.html"><strong aria-hidden="true">17.</strong> Experimental REPL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/idioms.html"><strong aria-hidden="true">18.</strong> Programming Idioms</a></span></li><li class="chapter-item expanded "><li class="part-title">Language reference</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/language.html"><strong aria-hidden="true">19.</strong> Language Reference</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/cli.html"><strong aria-hidden="true">20.</strong> Compiler Options</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/installation.html"><strong aria-hidden="true">21.</strong> Install a Native Compiler</a></span></li><li class="chapter-item expanded "><li class="part-title">Libraries and Packages</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="library/index.html"><strong aria-hidden="true">22.</strong> Standard Library</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/overview.html"><strong aria-hidden="true">22.1.</strong> Overview</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/index.html"><strong aria-hidden="true">22.2.</strong> Module Reference</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/x2c-c-api.html"><strong aria-hidden="true">22.2.1.</strong> x2c C API</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/args.html"><strong aria-hidden="true">22.2.2.</strong> lib/args.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/array.html"><strong aria-hidden="true">22.2.3.</strong> lib/array.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/atom.html"><strong aria-hidden="true">22.2.4.</strong> lib/atom.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/autodiff.html"><strong aria-hidden="true">22.2.5.</strong> lib/autodiff.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/block.html"><strong aria-hidden="true">22.2.6.</strong> lib/block.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/buffer.html"><strong aria-hidden="true">22.2.7.</strong> lib/buffer.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/common.html"><strong aria-hidden="true">22.2.8.</strong> lib/common.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/context.html"><strong aria-hidden="true">22.2.9.</strong> lib/context.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/diff.html"><strong aria-hidden="true">22.2.10.</strong> lib/diff.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/digest.html"><strong aria-hidden="true">22.2.11.</strong> lib/digest.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/dispatch.html"><strong aria-hidden="true">22.2.12.</strong> lib/dispatch.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/error.html"><strong aria-hidden="true">22.2.13.</strong> lib/error.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/exception.html"><strong aria-hidden="true">22.2.14.</strong> lib/exception.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/file.html"><strong aria-hidden="true">22.2.15.</strong> lib/file.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/func.html"><strong aria-hidden="true">22.2.16.</strong> lib/func.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/iter.html"><strong aria-hidden="true">22.2.17.</strong> lib/iter.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/json.html"><strong aria-hidden="true">22.2.18.</strong> lib/json.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/lib.html"><strong aria-hidden="true">22.2.19.</strong> lib/lib.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/lisp.html"><strong aria-hidden="true">22.2.20.</strong> lib/lisp.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/list-selectors.html"><strong aria-hidden="true">22.2.21.</strong> lib/list-selectors.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/list.html"><strong aria-hidden="true">22.2.22.</strong> lib/list.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/logger.html"><strong aria-hidden="true">22.2.23.</strong> lib/logger.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/map.html"><strong aria-hidden="true">22.2.24.</strong> lib/map.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/match-recursive.html"><strong aria-hidden="true">22.2.25.</strong> lib/match-recursive.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/match.html"><strong aria-hidden="true">22.2.26.</strong> lib/match.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/meta.html"><strong aria-hidden="true">22.2.27.</strong> lib/meta.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/mutex.html"><strong aria-hidden="true">22.2.28.</strong> lib/mutex.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/path.html"><strong aria-hidden="true">22.2.29.</strong> lib/path.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/pool.html"><strong aria-hidden="true">22.2.30.</strong> lib/pool.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/process.html"><strong aria-hidden="true">22.2.31.</strong> lib/process.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/regex.html"><strong aria-hidden="true">22.2.32.</strong> lib/regex.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/scope.html"><strong aria-hidden="true">22.2.33.</strong> lib/scope.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/scripting.html"><strong aria-hidden="true">22.2.34.</strong> lib/scripting.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/split.html"><strong aria-hidden="true">22.2.35.</strong> lib/split.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/string-classify.html"><strong aria-hidden="true">22.2.36.</strong> lib/string-classify.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/string-number.html"><strong aria-hidden="true">22.2.37.</strong> lib/string-number.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/string.html"><strong aria-hidden="true">22.2.38.</strong> lib/string.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/symbol.html"><strong aria-hidden="true">22.2.39.</strong> lib/symbol.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/symbolset.html"><strong aria-hidden="true">22.2.40.</strong> lib/symbolset.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/thread.html"><strong aria-hidden="true">22.2.41.</strong> lib/thread.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/typed-array.html"><strong aria-hidden="true">22.2.42.</strong> lib/typed-array.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/typed-list.html"><strong aria-hidden="true">22.2.43.</strong> lib/typed-list.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/typed-map.html"><strong aria-hidden="true">22.2.44.</strong> lib/typed-map.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/var.html"><strong aria-hidden="true">22.2.45.</strong> lib/var.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/varconvert.html"><strong aria-hidden="true">22.2.46.</strong> lib/varconvert.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="library/modules/varops.html"><strong aria-hidden="true">22.2.47.</strong> lib/varops.x</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="library/advanced-topics.html"><strong aria-hidden="true">23.</strong> Advanced Topics</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="guide/autodiff.html"><strong aria-hidden="true">23.1.</strong> Automatic Differentiation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="guide/verification.html"><strong aria-hidden="true">23.2.</strong> Verifying Functions with C*</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="guide/torch.html"><strong aria-hidden="true">23.3.</strong> Training and Inference with torch</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="guide/regions.html"><strong aria-hidden="true">23.4.</strong> The Region Model</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">Compiler API (provisional)</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="internals/compiler-api/index.html"><strong aria-hidden="true">24.</strong> Compiler API (provisional)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/ast.html"><strong aria-hidden="true">24.1.</strong> src/ast.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/bootstrap.html"><strong aria-hidden="true">24.2.</strong> src/bootstrap.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/build.html"><strong aria-hidden="true">24.3.</strong> src/build.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/cache.html"><strong aria-hidden="true">24.4.</strong> src/cache.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/cleanup.html"><strong aria-hidden="true">24.5.</strong> src/cleanup.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/cli.html"><strong aria-hidden="true">24.6.</strong> src/cli.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/collect.html"><strong aria-hidden="true">24.7.</strong> src/collect.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/compiler.html"><strong aria-hidden="true">24.8.</strong> src/compiler.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/comptime.html"><strong aria-hidden="true">24.9.</strong> src/comptime.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/deps.html"><strong aria-hidden="true">24.10.</strong> src/deps.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/diagnostics.html"><strong aria-hidden="true">24.11.</strong> src/diagnostics.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/editor.html"><strong aria-hidden="true">24.12.</strong> src/editor.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/emit.html"><strong aria-hidden="true">24.13.</strong> src/emit.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/expressions.html"><strong aria-hidden="true">24.14.</strong> src/expressions.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/format.html"><strong aria-hidden="true">24.15.</strong> src/format.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/frontend.html"><strong aria-hidden="true">24.16.</strong> src/frontend.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/generate.html"><strong aria-hidden="true">24.17.</strong> src/generate.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/install.html"><strong aria-hidden="true">24.18.</strong> src/install.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/lambda.html"><strong aria-hidden="true">24.19.</strong> src/lambda.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/literals.html"><strong aria-hidden="true">24.20.</strong> src/literals.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/macros.html"><strong aria-hidden="true">24.21.</strong> src/macros.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/main.html"><strong aria-hidden="true">24.22.</strong> src/main.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/parse.html"><strong aria-hidden="true">24.23.</strong> src/parse.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/project.html"><strong aria-hidden="true">24.24.</strong> src/project.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/protocol.html"><strong aria-hidden="true">24.25.</strong> src/protocol.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/regions.html"><strong aria-hidden="true">24.26.</strong> src/regions.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/repl-input.html"><strong aria-hidden="true">24.27.</strong> src/repl-input.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/repl-session.html"><strong aria-hidden="true">24.28.</strong> src/repl-session.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/repl.html"><strong aria-hidden="true">24.29.</strong> src/repl.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/report.html"><strong aria-hidden="true">24.30.</strong> src/report.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/script.html"><strong aria-hidden="true">24.31.</strong> src/script.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/sourceview.html"><strong aria-hidden="true">24.32.</strong> src/sourceview.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/statements.html"><strong aria-hidden="true">24.33.</strong> src/statements.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/toolchain.html"><strong aria-hidden="true">24.34.</strong> src/toolchain.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/transform.html"><strong aria-hidden="true">24.35.</strong> src/transform.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/type.html"><strong aria-hidden="true">24.36.</strong> src/type.x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="internals/compiler-api/utils.html"><strong aria-hidden="true">24.37.</strong> src/utils.x</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">Compiler and contributor internals</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="internals/architecture.html"><strong aria-hidden="true">25.</strong> Compiler Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="internals/implementation-map.html"><strong aria-hidden="true">26.</strong> Implementation Map</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="internals/building.html"><strong aria-hidden="true">27.</strong> Building the Compiler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="internals/reference-lisp.html"><strong aria-hidden="true">28.</strong> A Recursive Lisp in x2c</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

