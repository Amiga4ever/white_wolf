





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-e04a23d39bf81b7db3c635177756ef51bc171feb440be9e174933c6eb56382da.css" integrity="sha256-4Eoj05v4G32zxjUXd1bvUbwXH+tEC+nhdJM8brVjgto=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-df2cdfc6957e3fbd42155d8b95bb109f6d4e35768227a2401b9b6ea5bfb88e83.css" integrity="sha256-3yzfxpV+P71CFV2LlbsQn21ONXaCJ6JAG5tupb+4joM=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-0985c539aa8585eaf2bfff13b4cbb98befa6556d244e6cd5cf4ce0a57700d11e.css" integrity="sha256-CYXFOaqFheryv/8TtMu5i++mVW0kTmzVz0zgpXcA0R4=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>webfontloader/webfontloader.js at master · typekit/webfontloader · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/32504?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="typekit/webfontloader" property="og:title" /><meta content="https://github.com/typekit/webfontloader" property="og:url" /><meta content="webfontloader - Web Font Loader gives you added control when using linked fonts via @font-face." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="D07A:260F8:70D0718:A11EA11:595D0E75" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="D07A:260F8:70D0718:A11EA11:595D0E75" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YzdhYTMwOTBmMGJlNGZmODgxNGUzZjI0MjZiZDc4ZWRjMDljMzJhMjYxZTA3YWZlOGY4NjAwZmQzMTIxYjNlYXx7InJlbW90ZV9hZGRyZXNzIjoiODYuOC4xODUuMTQ5IiwicmVxdWVzdF9pZCI6IkQwN0E6MjYwRjg6NzBEMDcxODpBMTFFQTExOjU5NUQwRTc1IiwidGltZXN0YW1wIjoxNDk5MjcwNzczLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="2acfc83a81dc9307740250cb9124cab6bbb7fcef">

  <meta http-equiv="x-pjax-version" content="5f2a50b25f18037ccf3b270fcbd1ae10">
  

      <link href="https://github.com/typekit/webfontloader/commits/master.atom" rel="alternate" title="Recent Commits to webfontloader:master" type="application/atom+xml">

  <meta name="description" content="webfontloader - Web Font Loader gives you added control when using linked fonts via @font-face.">
  <meta name="go-import" content="github.com/typekit/webfontloader git https://github.com/typekit/webfontloader.git">

  <meta content="32504" name="octolytics-dimension-user_id" /><meta content="typekit" name="octolytics-dimension-user_login" /><meta content="620636" name="octolytics-dimension-repository_id" /><meta content="typekit/webfontloader" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="620636" name="octolytics-dimension-repository_network_root_id" /><meta content="typekit/webfontloader" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/typekit/webfontloader/blob/master/webfontloader.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="site-nav-container">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/code-review /features/project-management /features/integrations /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /stars /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
          Explore
</a>            <a href="/marketplace" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
              Marketplace
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/typekit/webfontloader/search" class="js-site-search-form" data-scoped-search-url="/typekit/webfontloader/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/typekit/webfontloader/blob/master/webfontloader.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Ftypekit%2Fwebfontloader%2Fblob%2Fmaster%2Fwebfontloader.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      



  


    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Ftypekit%2Fwebfontloader"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/typekit/webfontloader/watchers"
     aria-label="279 users are watching this repository">
    279
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ftypekit%2Fwebfontloader"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/typekit/webfontloader/stargazers"
      aria-label="5777 users starred this repository">
      5,777
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ftypekit%2Fwebfontloader"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/typekit/webfontloader/network" class="social-count"
       aria-label="499 users forked this repository">
      499
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/typekit" class="url fn" rel="author">typekit</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/typekit/webfontloader" data-pjax="#js-repo-pjax-container">webfontloader</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/typekit/webfontloader" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /typekit/webfontloader" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/typekit/webfontloader/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /typekit/webfontloader/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">42</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/typekit/webfontloader/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /typekit/webfontloader/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/typekit/webfontloader/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /typekit/webfontloader/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/typekit/webfontloader/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/typekit/webfontloader/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/typekit/webfontloader/blob/117e48d521d6408f78cbfe4d23923cc828fdf576/webfontloader.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:f86bb71f0080f03428aff3a16eaf7270 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/typekit/webfontloader/blob/bs-fix-typekit-config/webfontloader.js"
               data-name="bs-fix-typekit-config"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bs-fix-typekit-config
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/typekit/webfontloader/blob/bs-protect-against-important/webfontloader.js"
               data-name="bs-protect-against-important"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bs-protect-against-important
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/typekit/webfontloader/blob/master/webfontloader.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.28/webfontloader.js"
              data-name="v1.6.28"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.28">
                v1.6.28
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.27/webfontloader.js"
              data-name="v1.6.27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.27">
                v1.6.27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.26/webfontloader.js"
              data-name="v1.6.26"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.26">
                v1.6.26
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.25/webfontloader.js"
              data-name="v1.6.25"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.25">
                v1.6.25
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.24/webfontloader.js"
              data-name="v1.6.24"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.24">
                v1.6.24
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.23/webfontloader.js"
              data-name="v1.6.23"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.23">
                v1.6.23
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.22/webfontloader.js"
              data-name="v1.6.22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.22">
                v1.6.22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.21/webfontloader.js"
              data-name="v1.6.21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.21">
                v1.6.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.20/webfontloader.js"
              data-name="v1.6.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.20">
                v1.6.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.19/webfontloader.js"
              data-name="v1.6.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.19">
                v1.6.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.18/webfontloader.js"
              data-name="v1.6.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.18">
                v1.6.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.17/webfontloader.js"
              data-name="v1.6.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.17">
                v1.6.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.16/webfontloader.js"
              data-name="v1.6.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.16">
                v1.6.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.15/webfontloader.js"
              data-name="v1.6.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.15">
                v1.6.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.14/webfontloader.js"
              data-name="v1.6.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.14">
                v1.6.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.13/webfontloader.js"
              data-name="v1.6.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.13">
                v1.6.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.12/webfontloader.js"
              data-name="v1.6.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.12">
                v1.6.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.11/webfontloader.js"
              data-name="v1.6.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.11">
                v1.6.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.10/webfontloader.js"
              data-name="v1.6.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.10">
                v1.6.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.9/webfontloader.js"
              data-name="v1.6.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.9">
                v1.6.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.8/webfontloader.js"
              data-name="v1.6.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8">
                v1.6.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.7/webfontloader.js"
              data-name="v1.6.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7">
                v1.6.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.6/webfontloader.js"
              data-name="v1.6.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6">
                v1.6.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.5/webfontloader.js"
              data-name="v1.6.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.5">
                v1.6.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.4/webfontloader.js"
              data-name="v1.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.4">
                v1.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.3/webfontloader.js"
              data-name="v1.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.3">
                v1.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.2/webfontloader.js"
              data-name="v1.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.2">
                v1.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.1/webfontloader.js"
              data-name="v1.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.1">
                v1.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.6.0/webfontloader.js"
              data-name="v1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0">
                v1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.21/webfontloader.js"
              data-name="v1.5.21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.21">
                v1.5.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.20/webfontloader.js"
              data-name="v1.5.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.20">
                v1.5.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.19/webfontloader.js"
              data-name="v1.5.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.19">
                v1.5.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.18/webfontloader.js"
              data-name="v1.5.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.18">
                v1.5.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.17/webfontloader.js"
              data-name="v1.5.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.17">
                v1.5.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.16/webfontloader.js"
              data-name="v1.5.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.16">
                v1.5.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.15/webfontloader.js"
              data-name="v1.5.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.15">
                v1.5.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.14/webfontloader.js"
              data-name="v1.5.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.14">
                v1.5.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.13/webfontloader.js"
              data-name="v1.5.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.13">
                v1.5.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.12/webfontloader.js"
              data-name="v1.5.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.12">
                v1.5.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.11/webfontloader.js"
              data-name="v1.5.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.11">
                v1.5.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.10/webfontloader.js"
              data-name="v1.5.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.10">
                v1.5.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.9/webfontloader.js"
              data-name="v1.5.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.9">
                v1.5.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.8/webfontloader.js"
              data-name="v1.5.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.8">
                v1.5.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.7/webfontloader.js"
              data-name="v1.5.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.7">
                v1.5.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.6/webfontloader.js"
              data-name="v1.5.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.6">
                v1.5.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.5/webfontloader.js"
              data-name="v1.5.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.5">
                v1.5.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.4/webfontloader.js"
              data-name="v1.5.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.4">
                v1.5.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.3/webfontloader.js"
              data-name="v1.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.3">
                v1.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.2/webfontloader.js"
              data-name="v1.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.2">
                v1.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.1/webfontloader.js"
              data-name="v1.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.1">
                v1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.5.0/webfontloader.js"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.12/webfontloader.js"
              data-name="v1.4.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.12">
                v1.4.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.11/webfontloader.js"
              data-name="v1.4.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.11">
                v1.4.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.10/webfontloader.js"
              data-name="v1.4.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.10">
                v1.4.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.9/webfontloader.js"
              data-name="v1.4.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.9">
                v1.4.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.8/webfontloader.js"
              data-name="v1.4.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.8">
                v1.4.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.7/webfontloader.js"
              data-name="v1.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.7">
                v1.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.6/webfontloader.js"
              data-name="v1.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.6">
                v1.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.5/webfontloader.js"
              data-name="v1.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.5">
                v1.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.4/webfontloader.js"
              data-name="v1.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.4">
                v1.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.3/webfontloader.js"
              data-name="v1.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.3">
                v1.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.2/webfontloader.js"
              data-name="v1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.2">
                v1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.1/webfontloader.js"
              data-name="v1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1">
                v1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.4.0/webfontloader.js"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.3.2/webfontloader.js"
              data-name="v1.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.2">
                v1.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.3.1/webfontloader.js"
              data-name="v1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1">
                v1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.3.0/webfontloader.js"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.2.1/webfontloader.js"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.2.0/webfontloader.js"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.1.2/webfontloader.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.1.1/webfontloader.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.1.0/webfontloader.js"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.31/webfontloader.js"
              data-name="v1.0.31"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.31">
                v1.0.31
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.30/webfontloader.js"
              data-name="v1.0.30"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.30">
                v1.0.30
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.29/webfontloader.js"
              data-name="v1.0.29"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.29">
                v1.0.29
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.28/webfontloader.js"
              data-name="v1.0.28"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.28">
                v1.0.28
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.27/webfontloader.js"
              data-name="v1.0.27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.27">
                v1.0.27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.26/webfontloader.js"
              data-name="v1.0.26"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.26">
                v1.0.26
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.25/webfontloader.js"
              data-name="v1.0.25"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.25">
                v1.0.25
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.24/webfontloader.js"
              data-name="v1.0.24"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.24">
                v1.0.24
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.23/webfontloader.js"
              data-name="v1.0.23"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.23">
                v1.0.23
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.22/webfontloader.js"
              data-name="v1.0.22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.22">
                v1.0.22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.21/webfontloader.js"
              data-name="v1.0.21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.21">
                v1.0.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.20/webfontloader.js"
              data-name="v1.0.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.20">
                v1.0.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.19/webfontloader.js"
              data-name="v1.0.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.19">
                v1.0.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.18/webfontloader.js"
              data-name="v1.0.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.18">
                v1.0.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.17/webfontloader.js"
              data-name="v1.0.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.17">
                v1.0.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.16/webfontloader.js"
              data-name="v1.0.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.16">
                v1.0.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.15/webfontloader.js"
              data-name="v1.0.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.15">
                v1.0.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.14/webfontloader.js"
              data-name="v1.0.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.14">
                v1.0.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.13/webfontloader.js"
              data-name="v1.0.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.13">
                v1.0.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.12/webfontloader.js"
              data-name="v1.0.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.12">
                v1.0.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.11/webfontloader.js"
              data-name="v1.0.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.11">
                v1.0.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.10/webfontloader.js"
              data-name="v1.0.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.10">
                v1.0.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.9/webfontloader.js"
              data-name="v1.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.9">
                v1.0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.8/webfontloader.js"
              data-name="v1.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.8">
                v1.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.7/webfontloader.js"
              data-name="v1.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.7">
                v1.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.6/webfontloader.js"
              data-name="v1.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.6">
                v1.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.5/webfontloader.js"
              data-name="v1.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.5">
                v1.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/typekit/webfontloader/tree/v1.0.4/webfontloader.js"
              data-name="v1.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.4">
                v1.0.4
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/typekit/webfontloader/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/typekit/webfontloader"><span>webfontloader</span></a></span></span><span class="separator">/</span><strong class="final-path">webfontloader.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/typekit/webfontloader/commit/8b7639394dc3e03b380be96ab1cf5fdd856bf5b4" data-pjax>
          8b76393
        </a>
        <relative-time datetime="2017-05-27T16:28:19Z">May 27, 2017</relative-time>
      </span>
      <div>
        <img alt="@bramstein" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/114871?v=3&amp;s=40" width="20" />
        <a href="/bramstein" class="user-mention" rel="contributor">bramstein</a>
          <a href="/typekit/webfontloader/commit/8b7639394dc3e03b380be96ab1cf5fdd856bf5b4" class="message" data-pjax="true" title="Release 1.6.28">Release 1.6.28</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="bramstein" href="/typekit/webfontloader/commits/master/webfontloader.js?author=bramstein"><img alt="@bramstein" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/114871?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="p4121" href="/typekit/webfontloader/commits/master/webfontloader.js?author=p4121"><img alt="@p4121" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/28717593?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@bramstein" height="24" src="https://avatars1.githubusercontent.com/u/114871?v=3&amp;s=48" width="24" />
            <a href="/bramstein">bramstein</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@p4121" height="24" src="https://avatars2.githubusercontent.com/u/28717593?v=3&amp;s=48" width="24" />
            <a href="/p4121">p4121</a>
          </li>
      </ul>
    </div>
  </div>

  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/typekit/webfontloader/raw/master/webfontloader.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/typekit/webfontloader/blame/master/webfontloader.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/typekit/webfontloader/commits/master/webfontloader.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      18 lines (17 sloc)
      <span class="file-info-divider"></span>
    12.2 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2&lt;arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&amp;&amp;-1!=Function.prototype.bind.toString().indexOf(&quot;native code&quot;)?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&amp;&amp;(&quot;style&quot;==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&amp;&amp;b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&amp;&amp;a.parentNode.removeChild(a)}</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">w</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){b<span class="pl-k">=</span>b<span class="pl-k">||</span>[];c<span class="pl-k">=</span>c<span class="pl-k">||</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">className</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>),e<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>;e<span class="pl-k">+=</span><span class="pl-c1">1</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,g<span class="pl-k">=</span><span class="pl-c1">0</span>;g<span class="pl-k">&lt;</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;g<span class="pl-k">+=</span><span class="pl-c1">1</span>)<span class="pl-k">if</span>(b[e]<span class="pl-k">===</span>d[g]){f<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>}f<span class="pl-k">||</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>(b[e])}b<span class="pl-k">=</span>[];<span class="pl-k">for</span>(e<span class="pl-k">=</span><span class="pl-c1">0</span>;e<span class="pl-k">&lt;</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;e<span class="pl-k">+=</span><span class="pl-c1">1</span>){f<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">for</span>(g<span class="pl-k">=</span><span class="pl-c1">0</span>;g<span class="pl-k">&lt;</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;g<span class="pl-k">+=</span><span class="pl-c1">1</span>)<span class="pl-k">if</span>(d[e]<span class="pl-k">===</span>c[g]){f<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>}f<span class="pl-k">||</span><span class="pl-smi">b</span>.<span class="pl-c1">push</span>(d[e])}<span class="pl-smi">a</span>.<span class="pl-c1">className</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">|</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d&lt;e;d++)if(c[d]==b)return!0;return!1}</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">ea</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">o</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hostname</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hostname</span>}function z(a,b,c){function d(){m&amp;&amp;e&amp;&amp;f&amp;&amp;(m(g),m=null)}b=t(a,&quot;link&quot;,{rel:&quot;stylesheet&quot;,href:b,media:&quot;all&quot;});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error(&quot;Stylesheet failed to load&quot;);d()}):setTimeout(function(){e=!0;d()},0);u(a,&quot;head&quot;,b)}</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">function A(a,b,c,d){var e=a.c.getElementsByTagName(&quot;head&quot;)[0];if(e){var f=t(a,&quot;script&quot;,{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&amp;&amp;&quot;loaded&quot;!=this.readyState&amp;&amp;&quot;complete&quot;!=this.readyState||(g=!0,c&amp;&amp;c(null),f.onload=f.onreadystatechange=null,&quot;HEAD&quot;==f.parentNode.tagName&amp;&amp;e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&amp;&amp;c(Error(&quot;Script load timeout&quot;)))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&amp;&amp;a.c&amp;&amp;(a.c(),a.c=null)};function F(a){this.a=a||&quot;-&quot;}F.prototype.c=function(a){for(var b=[],c=0;c&lt;arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,&quot;&quot;).toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a=&quot;n&quot;;var c=(b||&quot;n4&quot;).match(/^([nio])([1-9])$/i);c&amp;&amp;(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+&quot; &quot;+(a.f+&quot;00&quot;)+&quot; 300px &quot;+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c&lt;a.length;c++){var d=a[c].replace(/[&#39;&quot;]/g,&quot;&quot;);-1!=d.indexOf(&quot; &quot;)||/^\d/.test(d)?b.push(&quot;&#39;&quot;+d+&quot;&#39;&quot;):b.push(d)}return b.join(&quot;,&quot;)}function J(a){return a.a+a.f}function H(a){var b=&quot;normal&quot;;&quot;o&quot;===a.a?b=&quot;oblique&quot;:&quot;i&quot;===a.a&amp;&amp;(b=&quot;italic&quot;);return b}</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">function ga(a){var b=4,c=&quot;n&quot;,d=null;a&amp;&amp;((d=a.match(/(normal|oblique|italic)/i))&amp;&amp;d[1]&amp;&amp;(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&amp;&amp;d[1]&amp;&amp;(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&amp;&amp;(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F(&quot;-&quot;);this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&amp;&amp;w(a.f,[a.a.c(&quot;wf&quot;,&quot;loading&quot;)]);K(a,&quot;loading&quot;)}function L(a){if(a.g){var b=y(a.f,a.a.c(&quot;wf&quot;,&quot;active&quot;)),c=[],d=[a.a.c(&quot;wf&quot;,&quot;loading&quot;)];b||c.push(a.a.c(&quot;wf&quot;,&quot;inactive&quot;));w(a.f,c,d)}K(a,&quot;inactive&quot;)}function K(a,b,c){if(a.j&amp;&amp;a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&amp;&amp;d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,&quot;span&quot;,{&quot;aria-hidden&quot;:&quot;true&quot;},this.f)}function N(a){u(a.c,&quot;body&quot;,a.a)}function O(a){return&quot;display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:&quot;+I(a.c)+&quot;;&quot;+(&quot;font-style:&quot;+H(a)+&quot;;font-weight:&quot;+(a.f+&quot;00&quot;)+&quot;;&quot;)};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c&gt;=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1&lt;=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&amp;&amp;(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||&quot;BESbswy&quot;;this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+&quot;,serif&quot;,J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+&quot;,sans-serif&quot;,J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G(&quot;serif&quot;,J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G(&quot;sans-serif&quot;,J(this.a));a=</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-en">O</span>(a);<span class="pl-c1">this</span>.<span class="pl-smi">m</span>.<span class="pl-smi">a</span>.<span class="pl-c1">style</span>.<span class="pl-smi">cssText</span><span class="pl-k">=</span>a;<span class="pl-en">N</span>(<span class="pl-c1">this</span>.<span class="pl-smi">g</span>);<span class="pl-en">N</span>(<span class="pl-c1">this</span>.<span class="pl-smi">h</span>);<span class="pl-en">N</span>(<span class="pl-c1">this</span>.<span class="pl-smi">j</span>);<span class="pl-en">N</span>(<span class="pl-c1">this</span>.<span class="pl-smi">m</span>)}<span class="pl-k">var</span> <span class="pl-c1">R</span><span class="pl-k">=</span>{<span class="pl-c1">D</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>serif<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">C</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>sans-serif<span class="pl-pds">&quot;</span></span>},<span class="pl-c1">S</span><span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">function</span> <span class="pl-en">T</span>(){<span class="pl-k">if</span>(<span class="pl-c1">null</span><span class="pl-k">===</span><span class="pl-c1">S</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>AppleWebKit<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span>)(?:<span class="pl-cce">\.</span>(<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span>))<span class="pl-pds">/</span></span>.<span class="pl-c1">exec</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>);<span class="pl-c1">S</span><span class="pl-k">=</span><span class="pl-k">!!</span>a<span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">536</span><span class="pl-k">&gt;</span><span class="pl-c1">parseInt</span>(a[<span class="pl-c1">1</span>],<span class="pl-c1">10</span>)<span class="pl-k">||</span><span class="pl-c1">536</span><span class="pl-k">===</span><span class="pl-c1">parseInt</span>(a[<span class="pl-c1">1</span>],<span class="pl-c1">10</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">11</span><span class="pl-k">&gt;=</span><span class="pl-c1">parseInt</span>(a[<span class="pl-c1">2</span>],<span class="pl-c1">10</span>))}<span class="pl-k">return</span> <span class="pl-c1">S</span>}<span class="pl-c1">Q</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">start</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">f</span>.<span class="pl-smi">serif</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">j</span>.<span class="pl-smi">a</span>.<span class="pl-smi">offsetWidth</span>;<span class="pl-c1">this</span>.<span class="pl-smi">f</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>sans-serif<span class="pl-pds">&quot;</span></span>]<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">m</span>.<span class="pl-smi">a</span>.<span class="pl-smi">offsetWidth</span>;<span class="pl-c1">this</span>.<span class="pl-c1">A</span><span class="pl-k">=</span><span class="pl-en">q</span>();<span class="pl-en">U</span>(<span class="pl-c1">this</span>)};</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">la</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> d <span class="pl-k">in</span> <span class="pl-c1">R</span>)<span class="pl-k">if</span>(<span class="pl-c1">R</span>.<span class="pl-en">hasOwnProperty</span>(d)<span class="pl-k">&amp;&amp;</span>b<span class="pl-k">===</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>[<span class="pl-c1">R</span>[d]]<span class="pl-k">&amp;&amp;</span>c<span class="pl-k">===</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>[<span class="pl-c1">R</span>[d]])<span class="pl-k">return</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">return</span><span class="pl-k">!</span><span class="pl-c1">1</span>}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&amp;&amp;c===a.f[&quot;sans-serif&quot;])||(d=T()&amp;&amp;la(a,b,c));d?q()-a.A&gt;=a.w?T()&amp;&amp;la(a,b,c)&amp;&amp;(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&amp;&amp;w(b.f,[b.a.c(&quot;wf&quot;,a.c,J(a).toString(),&quot;active&quot;)],[b.a.c(&quot;wf&quot;,a.c,J(a).toString(),&quot;loading&quot;),b.a.c(&quot;wf&quot;,a.c,J(a).toString(),&quot;inactive&quot;)]);K(b,&quot;fontactive&quot;,a);this.m=!0;na(this)};</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">W</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">h</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">a</span>;<span class="pl-k">if</span>(<span class="pl-smi">b</span>.<span class="pl-smi">g</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-en">y</span>(<span class="pl-smi">b</span>.<span class="pl-smi">f</span>,<span class="pl-smi">b</span>.<span class="pl-smi">a</span>.<span class="pl-en">c</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>wf<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">a</span>.<span class="pl-smi">c</span>,<span class="pl-en">J</span>(a).<span class="pl-c1">toString</span>(),<span class="pl-s"><span class="pl-pds">&quot;</span>active<span class="pl-pds">&quot;</span></span>)),d<span class="pl-k">=</span>[],e<span class="pl-k">=</span>[<span class="pl-smi">b</span>.<span class="pl-smi">a</span>.<span class="pl-en">c</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>wf<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">a</span>.<span class="pl-smi">c</span>,<span class="pl-en">J</span>(a).<span class="pl-c1">toString</span>(),<span class="pl-s"><span class="pl-pds">&quot;</span>loading<span class="pl-pds">&quot;</span></span>)];c<span class="pl-k">||</span><span class="pl-smi">d</span>.<span class="pl-c1">push</span>(<span class="pl-smi">b</span>.<span class="pl-smi">a</span>.<span class="pl-en">c</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>wf<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">a</span>.<span class="pl-smi">c</span>,<span class="pl-en">J</span>(a).<span class="pl-c1">toString</span>(),<span class="pl-s"><span class="pl-pds">&quot;</span>inactive<span class="pl-pds">&quot;</span></span>));<span class="pl-en">w</span>(<span class="pl-smi">b</span>.<span class="pl-smi">f</span>,d,e)}<span class="pl-en">K</span>(b,<span class="pl-s"><span class="pl-pds">&quot;</span>fontinactive<span class="pl-pds">&quot;</span></span>,a);<span class="pl-en">na</span>(<span class="pl-c1">this</span>)};<span class="pl-k">function</span> <span class="pl-en">na</span>(<span class="pl-smi">a</span>){<span class="pl-c1">0</span><span class="pl-k">==</span><span class="pl-k">--</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-smi">j</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">a</span>.<span class="pl-smi">m</span><span class="pl-k">?</span>(a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">a</span>,<span class="pl-smi">a</span>.<span class="pl-smi">g</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">w</span>(<span class="pl-smi">a</span>.<span class="pl-smi">f</span>,[<span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-en">c</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>wf<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>active<span class="pl-pds">&quot;</span></span>)],[<span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-en">c</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>wf<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>loading<span class="pl-pds">&quot;</span></span>),<span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-en">c</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>wf<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>inactive<span class="pl-pds">&quot;</span></span>)]),<span class="pl-en">K</span>(a,<span class="pl-s"><span class="pl-pds">&quot;</span>active<span class="pl-pds">&quot;</span></span>))<span class="pl-k">:</span><span class="pl-en">L</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>))};<span class="pl-k">function</span> <span class="pl-en">oa</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-smi">j</span><span class="pl-k">=</span>a;<span class="pl-c1">this</span>.<span class="pl-smi">a</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ja</span>;<span class="pl-c1">this</span>.<span class="pl-smi">h</span><span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-c1">this</span>.<span class="pl-smi">f</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">g</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>}<span class="pl-smi">oa</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">load</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-smi">c</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ca</span>(<span class="pl-c1">this</span>.<span class="pl-smi">j</span>,<span class="pl-smi">a</span>.<span class="pl-smi">context</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">j</span>);<span class="pl-c1">this</span>.<span class="pl-smi">g</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span><span class="pl-k">!==</span><span class="pl-smi">a</span>.<span class="pl-smi">events</span>;<span class="pl-c1">this</span>.<span class="pl-smi">f</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span><span class="pl-k">!==</span><span class="pl-smi">a</span>.<span class="pl-c1">classes</span>;<span class="pl-en">pa</span>(<span class="pl-c1">this</span>,<span class="pl-k">new</span> <span class="pl-en">ha</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>,a),a)};</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">qa</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">e</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-c1">0</span><span class="pl-k">==</span><span class="pl-k">--</span><span class="pl-smi">a</span>.<span class="pl-smi">h</span>;(<span class="pl-smi">a</span>.<span class="pl-smi">f</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">g</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span>e<span class="pl-k">||</span><span class="pl-c1">null</span>,m<span class="pl-k">=</span>d<span class="pl-k">||</span><span class="pl-c1">null</span><span class="pl-k">||</span>{};<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">===</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>f)<span class="pl-en">L</span>(<span class="pl-smi">b</span>.<span class="pl-smi">a</span>);<span class="pl-k">else</span>{<span class="pl-smi">b</span>.<span class="pl-smi">f</span><span class="pl-k">+=</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;f<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">b</span>.<span class="pl-smi">j</span><span class="pl-k">=</span>f);<span class="pl-k">var</span> h,l<span class="pl-k">=</span>[];<span class="pl-k">for</span>(h<span class="pl-k">=</span><span class="pl-c1">0</span>;h<span class="pl-k">&lt;</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;h<span class="pl-k">++</span>){<span class="pl-k">var</span> k<span class="pl-k">=</span>c[h],n<span class="pl-k">=</span>m[<span class="pl-smi">k</span>.<span class="pl-smi">c</span>],r<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">a</span>,x<span class="pl-k">=</span>k;<span class="pl-smi">r</span>.<span class="pl-smi">g</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">w</span>(<span class="pl-smi">r</span>.<span class="pl-smi">f</span>,[<span class="pl-smi">r</span>.<span class="pl-smi">a</span>.<span class="pl-en">c</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>wf<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">x</span>.<span class="pl-smi">c</span>,<span class="pl-en">J</span>(x).<span class="pl-c1">toString</span>(),<span class="pl-s"><span class="pl-pds">&quot;</span>loading<span class="pl-pds">&quot;</span></span>)]);<span class="pl-en">K</span>(r,<span class="pl-s"><span class="pl-pds">&quot;</span>fontloading<span class="pl-pds">&quot;</span></span>,x);r<span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">if</span>(<span class="pl-c1">null</span><span class="pl-k">===</span><span class="pl-c1">X</span>)<span class="pl-k">if</span>(<span class="pl-c1">window</span>.<span class="pl-smi">FontFace</span>){<span class="pl-k">var</span> x<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>Gecko<span class="pl-c1">.</span><span class="pl-k">*</span>Firefox<span class="pl-cce">\/</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>.<span class="pl-c1">exec</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>),xa<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>OS X<span class="pl-c1">.</span><span class="pl-k">*</span>Version<span class="pl-cce">\/</span>10<span class="pl-cce">\.</span><span class="pl-c1">.</span><span class="pl-k">*</span>Safari<span class="pl-pds">/</span></span>.<span class="pl-c1">exec</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">userAgent</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-sr"><span class="pl-pds">/</span>Apple<span class="pl-pds">/</span></span>.<span class="pl-c1">exec</span>(<span class="pl-c1">window</span>.<span class="pl-smi">navigator</span>.<span class="pl-c1">vendor</span>);</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">X</span><span class="pl-k">=</span>x<span class="pl-k">?</span><span class="pl-c1">42</span><span class="pl-k">&lt;</span><span class="pl-c1">parseInt</span>(x[<span class="pl-c1">1</span>],<span class="pl-c1">10</span>)<span class="pl-k">:</span>xa<span class="pl-k">?</span><span class="pl-k">!</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>}<span class="pl-k">else</span> <span class="pl-c1">X</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-c1">X</span><span class="pl-k">?</span>r<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">P</span>(<span class="pl-en">p</span>(<span class="pl-smi">b</span>.<span class="pl-smi">g</span>,b),<span class="pl-en">p</span>(<span class="pl-smi">b</span>.<span class="pl-smi">h</span>,b),<span class="pl-smi">b</span>.<span class="pl-smi">c</span>,k,<span class="pl-smi">b</span>.<span class="pl-smi">s</span>,n)<span class="pl-k">:</span>r<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Q</span>(<span class="pl-en">p</span>(<span class="pl-smi">b</span>.<span class="pl-smi">g</span>,b),<span class="pl-en">p</span>(<span class="pl-smi">b</span>.<span class="pl-smi">h</span>,b),<span class="pl-smi">b</span>.<span class="pl-smi">c</span>,k,<span class="pl-smi">b</span>.<span class="pl-smi">s</span>,a,n);<span class="pl-smi">l</span>.<span class="pl-c1">push</span>(r)}<span class="pl-k">for</span>(h<span class="pl-k">=</span><span class="pl-c1">0</span>;h<span class="pl-k">&lt;</span><span class="pl-smi">l</span>.<span class="pl-c1">length</span>;h<span class="pl-k">++</span>)l[h].<span class="pl-c1">start</span>()}},<span class="pl-c1">0</span>)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b&lt;c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ra</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">load</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">function</span> <span class="pl-en">b</span>(){<span class="pl-k">if</span>(f[<span class="pl-s"><span class="pl-pds">&quot;</span>__mti_fntLst<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d]){<span class="pl-k">var</span> c<span class="pl-k">=</span>f[<span class="pl-s"><span class="pl-pds">&quot;</span>__mti_fntLst<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d](),e<span class="pl-k">=</span>[],h;<span class="pl-k">if</span>(c)<span class="pl-k">for</span>(<span class="pl-k">var</span> l<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">&lt;</span><span class="pl-smi">c</span>.<span class="pl-c1">length</span>;l<span class="pl-k">++</span>){<span class="pl-k">var</span> k<span class="pl-k">=</span>c[l].<span class="pl-smi">fontfamily</span>;<span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">!=</span>c[l].<span class="pl-smi">fontStyle</span><span class="pl-k">&amp;&amp;</span><span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">!=</span>c[l].<span class="pl-c1">fontWeight</span><span class="pl-k">?</span>(h<span class="pl-k">=</span>c[l].<span class="pl-smi">fontStyle</span><span class="pl-k">+</span>c[l].<span class="pl-c1">fontWeight</span>,<span class="pl-smi">e</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">G</span>(k,h)))<span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">G</span>(k))}<span class="pl-en">a</span>(e)}<span class="pl-k">else</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){<span class="pl-en">b</span>()},<span class="pl-c1">50</span>)}<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">this</span>,d<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">projectId</span>,e<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-c1">version</span>;<span class="pl-k">if</span>(d){<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">c</span>.<span class="pl-smi">o</span>;<span class="pl-en">A</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>,(<span class="pl-smi">c</span>.<span class="pl-smi">a</span>.<span class="pl-smi">api</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://fast.fonts.net/jsapi<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>.js<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(e<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>?v=<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),<span class="pl-k">function</span>(<span class="pl-smi">e</span>){e<span class="pl-k">?</span><span class="pl-en">a</span>([])<span class="pl-k">:</span>(f[<span class="pl-s"><span class="pl-pds">&quot;</span>__MonotypeConfiguration__<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">d]<span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">a</span>},<span class="pl-en">b</span>())}).<span class="pl-c1">id</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>__MonotypeAPIScript__<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d}<span class="pl-k">else</span> <span class="pl-en">a</span>([])};<span class="pl-k">function</span> <span class="pl-en">sa</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-c1">this</span>.<span class="pl-smi">c</span><span class="pl-k">=</span>a;<span class="pl-c1">this</span>.<span class="pl-smi">a</span><span class="pl-k">=</span>b}<span class="pl-smi">sa</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">load</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b,c,d<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">a</span>.<span class="pl-smi">urls</span><span class="pl-k">||</span>[],e<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">a</span>.<span class="pl-smi">families</span><span class="pl-k">||</span>[],f<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">a</span>.<span class="pl-smi">testStrings</span><span class="pl-k">||</span>{},g<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">B</span>;b<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>;b<span class="pl-k">&lt;</span>c;b<span class="pl-k">++</span>)<span class="pl-en">z</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>,d[b],<span class="pl-en">C</span>(g));<span class="pl-k">var</span> m<span class="pl-k">=</span>[];b<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">length</span>;b<span class="pl-k">&lt;</span>c;b<span class="pl-k">++</span>)<span class="pl-k">if</span>(d<span class="pl-k">=</span>e[b].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>),d[<span class="pl-c1">1</span>])<span class="pl-k">for</span>(<span class="pl-k">var</span> h<span class="pl-k">=</span>d[<span class="pl-c1">1</span>].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>),l<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">&lt;</span><span class="pl-smi">h</span>.<span class="pl-c1">length</span>;l<span class="pl-k">+=</span><span class="pl-c1">1</span>)<span class="pl-smi">m</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">G</span>(d[<span class="pl-c1">0</span>],h[l]));<span class="pl-k">else</span> <span class="pl-smi">m</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">G</span>(d[<span class="pl-c1">0</span>]));<span class="pl-en">E</span>(g,<span class="pl-k">function</span>(){<span class="pl-en">a</span>(m,f)})};<span class="pl-k">function</span> <span class="pl-en">ta</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){a<span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">c</span><span class="pl-k">=</span>a<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">c</span><span class="pl-k">=</span>ua;<span class="pl-c1">this</span>.<span class="pl-smi">a</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">f</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">g</span><span class="pl-k">=</span>b<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>}<span class="pl-k">var</span> ua<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://fonts.googleapis.com/css<span class="pl-pds">&quot;</span></span>;<span class="pl-k">function</span> <span class="pl-en">va</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">length</span>,d<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span>c;d<span class="pl-k">++</span>){<span class="pl-k">var</span> e<span class="pl-k">=</span>b[d].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>);<span class="pl-c1">3</span><span class="pl-k">==</span><span class="pl-smi">e</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-c1">push</span>(<span class="pl-smi">e</span>.<span class="pl-c1">pop</span>());<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-smi">e</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span>e[<span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span>(f<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-c1">push</span>(<span class="pl-smi">e</span>.<span class="pl-c1">join</span>(f))}}</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">wa</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span><span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-c1">length</span>)<span class="pl-k">throw</span> <span class="pl-c1">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>No fonts to load!<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>kit=<span class="pl-pds">&quot;</span></span>))<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">c</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">a</span>.<span class="pl-c1">length</span>,c<span class="pl-k">=</span>[],d<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span>b;d<span class="pl-k">++</span>)<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(<span class="pl-smi">a</span>.<span class="pl-smi">a</span>[d].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span> <span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>+<span class="pl-pds">&quot;</span></span>));b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">c</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>?family=<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">c</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%7C<span class="pl-pds">&quot;</span></span>);<span class="pl-c1">0</span><span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>&amp;subset=<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>));<span class="pl-c1">0</span><span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-smi">g</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>&amp;text=<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-c1">encodeURIComponent</span>(<span class="pl-smi">a</span>.<span class="pl-smi">g</span>));<span class="pl-k">return</span> b};<span class="pl-k">function</span> <span class="pl-en">ya</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-smi">f</span><span class="pl-k">=</span>a;<span class="pl-c1">this</span>.<span class="pl-smi">a</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">c</span><span class="pl-k">=</span>{}}</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> za<span class="pl-k">=</span>{latin<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>BESbswy<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>latin-ext<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u00e7\u00f6\u00fc\u011f\u015f</span><span class="pl-pds">&quot;</span></span>,cyrillic<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u0439\u044f\u0416</span><span class="pl-pds">&quot;</span></span>,greek<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u03b1\u03b2\u03a3</span><span class="pl-pds">&quot;</span></span>,khmer<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u1780\u1781\u1782</span><span class="pl-pds">&quot;</span></span>,Hanuman<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u1780\u1781\u1782</span><span class="pl-pds">&quot;</span></span>},Aa<span class="pl-k">=</span>{thin<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>1<span class="pl-pds">&quot;</span></span>,extralight<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>extra-light<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span>,ultralight<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>ultra-light<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>2<span class="pl-pds">&quot;</span></span>,light<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>3<span class="pl-pds">&quot;</span></span>,regular<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span>,book<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span>,medium<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>5<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>semi-bold<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>6<span class="pl-pds">&quot;</span></span>,semibold<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>6<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>demi-bold<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>6<span class="pl-pds">&quot;</span></span>,demibold<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>6<span class="pl-pds">&quot;</span></span>,bold<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>7<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>extra-bold<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>8<span class="pl-pds">&quot;</span></span>,extrabold<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>8<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>ultra-bold<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>8<span class="pl-pds">&quot;</span></span>,ultrabold<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>8<span class="pl-pds">&quot;</span></span>,black<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>9<span class="pl-pds">&quot;</span></span>,heavy<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>9<span class="pl-pds">&quot;</span></span>,l<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>3<span class="pl-pds">&quot;</span></span>,r<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span>,b<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>7<span class="pl-pds">&quot;</span></span>},Ba<span class="pl-k">=</span>{i<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>,italic<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>,n<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>n<span class="pl-pds">&quot;</span></span>,normal<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>n<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">Ca<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(thin<span class="pl-k">|</span>(?:(?:extra<span class="pl-k">|</span>ultra)-<span class="pl-k">?</span>)<span class="pl-k">?</span>light<span class="pl-k">|</span>regular<span class="pl-k">|</span>book<span class="pl-k">|</span>medium<span class="pl-k">|</span>(?:(?:semi<span class="pl-k">|</span>demi<span class="pl-k">|</span>extra<span class="pl-k">|</span>ultra)-<span class="pl-k">?</span>)<span class="pl-k">?</span>bold<span class="pl-k">|</span>black<span class="pl-k">|</span>heavy<span class="pl-k">|</span>l<span class="pl-k">|</span>r<span class="pl-k">|</span>b<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-c1">1-9</span>]</span>00)<span class="pl-k">?</span>(n<span class="pl-k">|</span>i<span class="pl-k">|</span>normal<span class="pl-k">|</span>italic)<span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Da</span>(<span class="pl-smi">a</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>.<span class="pl-c1">length</span>,c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span>b;c<span class="pl-k">++</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">f</span>[c].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>),e<span class="pl-k">=</span>d[<span class="pl-c1">0</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>),f<span class="pl-k">=</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>n4<span class="pl-pds">&quot;</span></span>];<span class="pl-k">if</span>(<span class="pl-c1">2</span><span class="pl-k">&lt;=</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span>){<span class="pl-k">var</span> g;<span class="pl-k">var</span> m<span class="pl-k">=</span>d[<span class="pl-c1">1</span>];g<span class="pl-k">=</span>[];<span class="pl-k">if</span>(m)<span class="pl-k">for</span>(<span class="pl-k">var</span> m<span class="pl-k">=</span><span class="pl-smi">m</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>),h<span class="pl-k">=</span><span class="pl-smi">m</span>.<span class="pl-c1">length</span>,l<span class="pl-k">=</span><span class="pl-c1">0</span>;l<span class="pl-k">&lt;</span>h;l<span class="pl-k">++</span>){<span class="pl-k">var</span> k;k<span class="pl-k">=</span>m[l];<span class="pl-k">if</span>(<span class="pl-smi">k</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>)){<span class="pl-k">var</span> n<span class="pl-k">=</span><span class="pl-smi">Ca</span>.<span class="pl-c1">exec</span>(<span class="pl-smi">k</span>.<span class="pl-c1">toLowerCase</span>());<span class="pl-k">if</span>(<span class="pl-c1">null</span><span class="pl-k">==</span>n)k<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">else</span>{k<span class="pl-k">=</span>n[<span class="pl-c1">2</span>];k<span class="pl-k">=</span><span class="pl-c1">null</span><span class="pl-k">==</span>k<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>k<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>n<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>Ba[k];n<span class="pl-k">=</span>n[<span class="pl-c1">1</span>];<span class="pl-k">if</span>(<span class="pl-c1">null</span><span class="pl-k">==</span>n<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>n)n<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span>;<span class="pl-k">else</span> <span class="pl-k">var</span> r<span class="pl-k">=</span>Aa[n],n<span class="pl-k">=</span>r<span class="pl-k">?</span>r<span class="pl-k">:</span><span class="pl-c1">isNaN</span>(n)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>4<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-smi">n</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>,<span class="pl-c1">1</span>);k<span class="pl-k">=</span>[k,n].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)}}<span class="pl-k">else</span> k<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;k<span class="pl-k">&amp;&amp;</span><span class="pl-smi">g</span>.<span class="pl-c1">push</span>(k)}<span class="pl-c1">0</span><span class="pl-k">&lt;</span><span class="pl-smi">g</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(f<span class="pl-k">=</span>g);<span class="pl-c1">3</span><span class="pl-k">==</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>d[<span class="pl-c1">2</span>],g<span class="pl-k">=</span>[],d<span class="pl-k">=</span>d<span class="pl-k">?</span><span class="pl-smi">d</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">g,0&lt;d.length&amp;&amp;(d=za[d[0]])&amp;&amp;(a.c[e]=d))}a.c[e]||(d=za[e])&amp;&amp;(a.c[e]=d);for(d=0;d&lt;f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||&quot;https://use.typekit.net&quot;)+&quot;/&quot;+b+&quot;.js&quot;,function(b){if(b)a([]);else if(c.Typekit&amp;&amp;c.Typekit.config&amp;&amp;c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f&lt;b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h&lt;m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g&lt;m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga(&quot;font-weight:&quot;+h.weight+&quot;;font-style:&quot;+h.style)))}a(d.a)},A(this.c,(this.f.api||&quot;https://f.fontdeck.com/s/css/js/&quot;)+ea(this.c)+&quot;/&quot;+b+&quot;.js&quot;,function(b){b&amp;&amp;a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};&quot;function&quot;===typeof define&amp;&amp;define.amd?define(function(){return Z}):&quot;undefined&quot;!==typeof module&amp;&amp;module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&amp;&amp;Y.load(window.WebFontConfig));}());</td>
      </tr>
</table>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.14432s from github-fe-bbb28be.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-nL0D6lZGHoSriVa/d5mpd9bMih+YTHG17LLt/bo9dz8=" src="https://assets-cdn.github.com/assets/frameworks-9cbd03ea56461e84ab8956bf7799a977d6cc8a1f984c71b5ecb2edfdba3d773f.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha256-5bE5hc97EWb5UQAF2IW8lYdk57QZrKWCUAXNnvqx9Zo=" src="https://assets-cdn.github.com/assets/github-e5b13985cf7b1166f9510005d885bc958764e7b419aca5825005cd9efab1f59a.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

