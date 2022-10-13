import './app.scss';

// import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div className="lia-page dark">
      {/* <center> */}
      <div className="center">
        <div className="MinimumWidthContainer">
          <div className="min-width-wrapper">
            <div className="min-width">
              <div className="lia-content">
                <div className="lia-quilt lia-quilt-community-page lia-quilt-layout-custom-landing-page-two-column lia-top-quilt">
                  <div className="lia-quilt-row lia-quilt-row-header">
                    <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-common-header">
                      <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                        <div className="lia-quilt lia-quilt-header lia-quilt-layout-custom-community-header lia-component-quilt-header">
                          <div className="lia-quilt-row lia-quilt-row-header-top">
                            <div
                              id="abk"
                              className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-top-content"
                            >
                              <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                                <div className="custom-community-header-left">
                                  <div className="lia-slide-out-nav-menu lia-component-common-widget-slide-out-nav-menu">
                                    <button
                                      li-bindable=""
                                      li-common-element-hook="navMenuTriggerElement"
                                      className="lia-slide-menu-trigger lia-slide-out-nav-menu-wrapper"
                                    >
                                      <div
                                        ng-non-bindable=""
                                        className="lia-slide-out-nav-menu-title"
                                      >
                                        Browse
                                      </div>
                                    </button>
                                    {/* <li:common-slide-menu li-bindable="" trigger-element="navMenuTriggerElement" li-direction="left" style="display:none"> */}
                                    <li
                                      li-bindable=""
                                      trigger-element="navMenuTriggerElement"
                                      li-direction="left"
                                      style={{ display: 'none' }}
                                    >
                                      <div className="lia-quilt lia-quilt-navigation-slide-out-menu lia-quilt-layout-one-column">
                                        <div className="lia-quilt-row lia-quilt-row-header">
                                          <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-common-header lia-mark-empty"></div>
                                        </div>
                                        <div className="lia-quilt-row lia-quilt-row-main">
                                          <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-main-content">
                                            <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                                              {/* <li:community-navigation className="lia-component-community-widget-navigation" li-bindable="" li-instance="0" componentId="community.widget.navigation" mode="default">
</li:community-navigation> */}
                                              <li
                                                className="lia-component-community-widget-navigation"
                                                li-bindable=""
                                                li-instance="0"
                                              ></li>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="lia-quilt-row lia-quilt-row-footer">
                                          <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-common-footer lia-mark-empty"></div>
                                        </div>
                                      </div>
                                    </li>
                                  </div>

                                  <div className="abk-header-logo">
                                    <h1>
                                      <a href="/">Neo4j</a>
                                    </h1>
                                  </div>
                                </div>

                                <div className="custom-community-header-right">
                                  <div className="custom-community-header-user-navigation">
                                    <a
                                      className="lia-link-navigation faq-link lia-component-help-action-faq"
                                      id="faqPage_cbb90deb56a24b"
                                      href="/t5/help/faqpage"
                                    >
                                      Help
                                    </a>
                                    <div
                                      className="lia-header-nav-component-widget lia-component-notificationfeed-widget-indicator"
                                      id="indicator_cbb90deb601b7d"
                                    >
                                      <a
                                        className="lia-link-navigation lia-notification-feed-page-link"
                                        aria-label="Notifications"
                                        title="Notifications"
                                        id="link_cbb90deb601b7d"
                                        href="/t5/notificationfeed/page"
                                      >
                                        Notifications
                                      </a>

                                      <div className="lia-inline-ajax-feedback">
                                        <div
                                          className="AjaxFeedback"
                                          id="ajaxFeedback_cbb90deb601b7d"
                                        ></div>
                                      </div>

                                      <div className="lia-header-nav-component-unread-count"></div>
                                    </div>
                                    <div
                                      className="lia-header-nav-component-widget lia-notes-summary lia-component-notes-widget-summary-modern"
                                      id="privateNotesSummary2_cbb90dec00b380"
                                    >
                                      <a
                                        className="lia-link-navigation private-notes-link"
                                        aria-label="Messages"
                                        title="Messages"
                                        rel="nofollow"
                                        id="link_cbb90dec00b380"
                                        href="/t5/notes/privatenotespage"
                                      >
                                        Messages
                                      </a>
                                      <div className="lia-header-nav-component-unread-count">
                                        0
                                      </div>
                                    </div>
                                    <div id="realtimenotificationsubscription_cbb90dec3aba47"></div>

                                    <ul className="UserNavigation lia-list-standard-inline lia-component-common-widget-user-navigation-modern">
                                      <li className="user-navigation-parent-dropdown">
                                        <div className="user-navigation-settings-dropdown-link">
                                          <div className="user-navigation-user-profile">
                                            <div>
                                              <a
                                                className="lia-link-navigation view-profile-link lia-component-users-action-view-user-profile"
                                                id="viewUserProfile_cbb90dec3aba47"
                                                href="/t5/user/viewprofilepage/user-id/2"
                                              >
                                                abk-of-neo4j
                                              </a>
                                            </div>
                                          </div>

                                          <div className="UserAvatar lia-user-avatar">
                                            <a
                                              className="UserAvatar lia-link-navigation"
                                              role="button"
                                              aria-expanded="false"
                                              aria-label="Show User Options menu"
                                              target="_self"
                                              id="link_1_cbb90dec3aba47"
                                              href="/t5/user/viewprofilepage/user-id/2"
                                            >
                                              <img
                                                className="lia-user-avatar-message"
                                                title="abk-of-neo4j"
                                                alt="abk-of-neo4j"
                                                id="display_cbb90dec3aba47"
                                                src="https://lh3.googleusercontent.com/a-/AOh14GiHLsMhhfaBDcaL48KXeCvbRkpuo8D_fvQBHzLgTQ=s96-c"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="user-navigation-settings-drop-down">
                                          <div className="user-navigation-settings-drop-down-inner">
                                            <ul
                                              role="list"
                                              id="userNavDropdown_cbb90dec3aba47"
                                              className="lia-list-standard"
                                            >
                                              <li role="listitem">
                                                <a
                                                  className="lia-link-navigation view-profile-link lia-component-users-action-view-user-profile-modern"
                                                  id="viewUserProfileModern_cbb90dec3aba47"
                                                  href="/t5/user/viewprofilepage/user-id/2"
                                                >
                                                  My profile
                                                </a>
                                              </li>

                                              <li role="listitem">
                                                <a
                                                  className="lia-link-navigation user-profile-link lia-component-users-action-my-profile-settings"
                                                  id="myProfileSettings_cbb90dec3aba47"
                                                  href="/t5/user/myprofilepage/tab/personal-profile"
                                                >
                                                  My settings
                                                </a>
                                              </li>

                                              <li role="listitem">
                                                <div
                                                  className="lia-header-nav-component-widget lia-component-notificationfeed-widget-indicator"
                                                  id="indicator_cbb90dec3aba47"
                                                >
                                                  <a
                                                    className="lia-link-navigation lia-notification-feed-page-link"
                                                    aria-label="Notifications"
                                                    title="Notifications"
                                                    id="link_cbb90dec3aba47"
                                                    href="/t5/notificationfeed/page"
                                                  >
                                                    Notifications
                                                  </a>

                                                  <div className="lia-inline-ajax-feedback">
                                                    <div
                                                      className="AjaxFeedback"
                                                      id="ajaxFeedback_cbb90dec3aba47"
                                                    ></div>
                                                  </div>

                                                  <div className="lia-header-nav-component-unread-count"></div>
                                                </div>
                                              </li>

                                              <li role="listitem">
                                                <div
                                                  className="lia-header-nav-component-widget lia-notes-summary lia-component-notes-widget-summary-modern"
                                                  id="privateNotesSummary2_cbb90dec3aba47"
                                                >
                                                  <a
                                                    className="lia-link-navigation private-notes-link"
                                                    aria-label="Messages"
                                                    title="Messages"
                                                    rel="nofollow"
                                                    id="link_cbb90dec3aba47_0"
                                                    href="/t5/notes/privatenotespage"
                                                  >
                                                    Messages
                                                  </a>
                                                  <div className="lia-header-nav-component-unread-count">
                                                    0
                                                  </div>
                                                </div>
                                              </li>

                                              <li role="listitem">
                                                <a
                                                  className="lia-link-navigation lia-component-users-actions-my-subscriptions"
                                                  id="userMySubscriptions_cbb90dec3aba47"
                                                  href="/t5/user/myprofilepage/tab/user-subscriptions"
                                                >
                                                  My subscriptions
                                                </a>
                                              </li>

                                              <li role="listitem">
                                                <a
                                                  className="lia-link-navigation switch-user-page-link lia-component-admin-action-switch-user"
                                                  id="switchUserPage_cbb90dec3aba47"
                                                  href=""
                                                >
                                                  Switch user
                                                </a>
                                              </li>

                                              <li role="listitem">
                                                <a
                                                  className="lia-link-navigation community-admin-link lia-component-admin-widget-new-admin-short"
                                                  id="newAdminShort_cbb90dec3aba47"
                                                  href="/t5/bizapps/bizappspage/tab/community%3Aadmin"
                                                >
                                                  Community admin
                                                </a>
                                              </li>

                                              <li role="listitem">
                                                <a
                                                  className="lia-link-navigation logout-link lia-link-ticket-post-action lia-component-users-action-logout"
                                                  data-lia-action-token="po4jDW4h2f2KlcI3p4nUd8jXmPLc_yPQ1bgOyom444k."
                                                  rel="nofollow"
                                                  id="logoutPage_cbb90dec3aba47"
                                                  href=""
                                                >
                                                  Sign out
                                                </a>
                                              </li>
                                            </ul>
                                            <div className="user-navigation-arrow"></div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lia-quilt-row lia-quilt-row-header-navigation">
                            <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-navigation-content">
                              <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                                <div className="custom-community-header-navigation-v3">
                                  {' '}
                                  <nav role="navigation" id="headerNav">
                                    {' '}
                                    <ul
                                      className="custom-sub-nav"
                                      role="menubar"
                                    >
                                      {' '}
                                      <li
                                        className="custom-nav-menu-item has-children depth1"
                                        role="none"
                                      >
                                        {' '}
                                        <div className="toggle-menu-button-wrapper">
                                          {' '}
                                          <a
                                            role="menuitem"
                                            className="top-level-link menuitem"
                                            href="/t5/product-discussions/ct-p/product_discussions"
                                          >
                                            Product Discussions
                                          </a>{' '}
                                          <button
                                            className="top-level-toggle toggle-menu-children"
                                            aria-controls="toggle-category:product_discussions"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            aria-label="Expand View: Product Discussions"
                                          >
                                            {' '}
                                            <span
                                              className="toggle-menu-icon"
                                              aria-hidden="true"
                                            ></span>
                                          </button>
                                        </div>{' '}
                                        <div className="nav-child-wrapper nav-child-wrapper-level-2">
                                          {' '}
                                          <ul
                                            id="toggle-category:product_discussions"
                                            className="custom-community-header-sub-navigation"
                                            role="menu"
                                          >
                                            {' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/neo4j-graph-platform/bd-p/graph_platform"
                                                  className="nav-category"
                                                >
                                                  Neo4j Graph Platform
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/drivers-stacks/bd-p/drivers_stacks"
                                                  className="nav-category"
                                                >
                                                  Drivers &amp; Stacks
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/integrations/bd-p/integrations"
                                                  className="nav-category"
                                                >
                                                  Integrations
                                                </a>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>{' '}
                                      <li
                                        className="custom-nav-menu-item has-children depth1"
                                        role="none"
                                      >
                                        {' '}
                                        <div className="toggle-menu-button-wrapper">
                                          {' '}
                                          <a
                                            role="menuitem"
                                            className="top-level-link menuitem"
                                            href="/t5/events-programs/ct-p/events_programs"
                                          >
                                            Events &amp; Programs
                                          </a>{' '}
                                          <button
                                            className="top-level-toggle toggle-menu-children"
                                            aria-controls="toggle-category:events_programs"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            aria-label="Expand View: Events &amp; Programs"
                                          >
                                            {' '}
                                            <span
                                              className="toggle-menu-icon"
                                              aria-hidden="true"
                                            ></span>
                                          </button>
                                        </div>{' '}
                                        <div className="nav-child-wrapper nav-child-wrapper-level-2">
                                          {' '}
                                          <ul
                                            id="toggle-category:events_programs"
                                            className="custom-community-header-sub-navigation"
                                            role="menu"
                                          >
                                            {' '}
                                            <li
                                              className="depth2 custom-nav-menu-item has-children"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/ninjas-program/ct-p/ninjas"
                                                  className="nav-category"
                                                >
                                                  Ninjas Program
                                                </a>{' '}
                                                <button
                                                  className="toggle-menu-children"
                                                  aria-controls="toggle-category:ninjas"
                                                  aria-expanded="false"
                                                  aria-haspopup="true"
                                                  aria-label="Expand View: Ninjas Program"
                                                >
                                                  {' '}
                                                  <span
                                                    className="toggle-menu-icon"
                                                    aria-hidden="true"
                                                  ></span>
                                                </button>
                                              </div>{' '}
                                              <div className="nav-child-wrapper nav-child-wrapper-level-3">
                                                {' '}
                                                <ul
                                                  id="toggle-category:ninjas"
                                                  className="custom-community-header-sub-navigation"
                                                  role="menu"
                                                >
                                                  {' '}
                                                  <li
                                                    className="depth3 custom-nav-menu-item"
                                                    role="none"
                                                  >
                                                    {' '}
                                                    <a
                                                      role="menuitem"
                                                      href="/t5/ninjas-group-hub/gh-p/Ninja_grouphub"
                                                      className="nav-category"
                                                    >
                                                      Ninjas Group Hub
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/projects-collaboration/bd-p/projects_collaboration"
                                                  className="nav-category"
                                                >
                                                  Projects &amp; Collaboration
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/events/bd-p/events"
                                                  className="nav-category"
                                                >
                                                  Events
                                                </a>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>{' '}
                                      <li
                                        className="custom-nav-menu-item has-children depth1"
                                        role="none"
                                      >
                                        {' '}
                                        <div className="toggle-menu-button-wrapper">
                                          {' '}
                                          <a
                                            role="menuitem"
                                            className="top-level-link menuitem"
                                            href="/t5/graphacademy/ct-p/graphacademy"
                                          >
                                            GraphAcademy
                                          </a>{' '}
                                          <button
                                            className="top-level-toggle toggle-menu-children"
                                            aria-controls="toggle-category:graphacademy"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            aria-label="Expand View: GraphAcademy"
                                          >
                                            {' '}
                                            <span
                                              className="toggle-menu-icon"
                                              aria-hidden="true"
                                            ></span>
                                          </button>
                                        </div>{' '}
                                        <div className="nav-child-wrapper nav-child-wrapper-level-2">
                                          {' '}
                                          <ul
                                            id="toggle-category:graphacademy"
                                            className="custom-community-header-sub-navigation"
                                            role="menu"
                                          >
                                            {' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/courses-certifications/tkb-p/courses_certification"
                                                  className="nav-category"
                                                >
                                                  Courses &amp; Certifications
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/graphacademy-discussions/bd-p/graphacademy_discussions"
                                                  className="nav-category"
                                                >
                                                  GraphAcademy Discussions
                                                </a>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>{' '}
                                      <li
                                        className="custom-nav-menu-item has-children depth1"
                                        role="none"
                                      >
                                        {' '}
                                        <div className="toggle-menu-button-wrapper">
                                          {' '}
                                          <a
                                            role="menuitem"
                                            className="top-level-link menuitem"
                                            href="/t5/community-corner/ct-p/community_corner"
                                          >
                                            Community Corner
                                          </a>{' '}
                                          <button
                                            className="top-level-toggle toggle-menu-children"
                                            aria-controls="toggle-category:community_corner"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            aria-label="Expand View: Community Corner"
                                          >
                                            {' '}
                                            <span
                                              className="toggle-menu-icon"
                                              aria-hidden="true"
                                            ></span>
                                          </button>
                                        </div>{' '}
                                        <div className="nav-child-wrapper nav-child-wrapper-level-2">
                                          {' '}
                                          <ul
                                            id="toggle-category:community_corner"
                                            className="custom-community-header-sub-navigation"
                                            role="menu"
                                          >
                                            {' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/community-news/bg-p/news"
                                                  className="nav-category"
                                                >
                                                  Community News
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/about-the-community/tkb-p/about"
                                                  className="nav-category"
                                                >
                                                  About the Community
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/introduce-yourself/bd-p/hello"
                                                  className="nav-category"
                                                >
                                                  Introduce Yourself
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/community-suggestions/idb-p/community_suggestions"
                                                  className="nav-category"
                                                >
                                                  Community Suggestions
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/general-discussions/bd-p/general_discussions"
                                                  className="nav-category"
                                                >
                                                  General Discussions
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/associate-resources-private/bd-p/associate_resources"
                                                  className="nav-category"
                                                >
                                                  Associate Resources (Private)
                                                </a>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>{' '}
                                      <li
                                        className="custom-nav-menu-item has-children depth1"
                                        role="none"
                                      >
                                        {' '}
                                        <div className="toggle-menu-button-wrapper">
                                          {' '}
                                          <a
                                            role="menuitem"
                                            className="top-level-link menuitem"
                                            href="/t5/moderation-management/ct-p/community-management"
                                          >
                                            Moderation &amp; Management
                                          </a>{' '}
                                          <button
                                            className="top-level-toggle toggle-menu-children"
                                            aria-controls="toggle-category:community-management"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            aria-label="Expand View: Moderation &amp; Management"
                                          >
                                            {' '}
                                            <span
                                              className="toggle-menu-icon"
                                              aria-hidden="true"
                                            ></span>
                                          </button>
                                        </div>{' '}
                                        <div className="nav-child-wrapper nav-child-wrapper-level-2">
                                          {' '}
                                          <ul
                                            id="toggle-category:community-management"
                                            className="custom-community-header-sub-navigation"
                                            role="menu"
                                          >
                                            {' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/moderation-management-discussion/bd-p/cm-discussion"
                                                  className="nav-category"
                                                >
                                                  Moderation &amp; Management
                                                  Discussion
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/abuse-reports/bd-p/abuse-reports"
                                                  className="nav-category"
                                                >
                                                  Abuse Reports
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/filter-notifications/bd-p/filter-notifications"
                                                  className="nav-category"
                                                >
                                                  Filter Notifications
                                                </a>
                                              </div>
                                            </li>{' '}
                                            <li
                                              className="depth2 custom-nav-menu-item"
                                              role="none"
                                            >
                                              {' '}
                                              <div className="toggle-menu-button-wrapper">
                                                {' '}
                                                <a
                                                  role="menuitem"
                                                  href="/t5/moderation-archive/bd-p/moderation-archive"
                                                  className="nav-category"
                                                >
                                                  Moderation Archive
                                                </a>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lia-quilt-row lia-quilt-row-header-hero">
                            <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-hero-content">
                              <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                                <style>
                                  #lia-body .lia-quilt-row-header-hero{' '}
                                  {/* background: url("/html/assets/HeroBanner_Blue.svg") no-repeat center / cover; */}
                                </style>

                                <div className="custom-hero-welcome">
                                  <div className="hero-content">
                                    <h2></h2>
                                    <p></p>
                                    <div
                                      id="lia-searchformV32_cbb90df2ad8d29"
                                      className="SearchForm lia-search-form-wrapper lia-mode-default lia-component-common-widget-search-form"
                                    >
                                      <div className="lia-inline-ajax-feedback">
                                        <div
                                          className="AjaxFeedback"
                                          id="ajaxfeedback_cbb90df2ad8d29"
                                        ></div>
                                      </div>

                                      <div id="searchautocompletetoggle_cbb90df2ad8d29">
                                        <div className="lia-inline-ajax-feedback">
                                          <div
                                            className="AjaxFeedback"
                                            id="ajaxfeedback_cbb90df2ad8d29_0"
                                          ></div>
                                        </div>

                                        <form
                                          encType="multipart/form-data"
                                          className="lia-form lia-form-inline SearchForm"
                                          action="https://community.neo4j.com/t5/community/page.searchformv32.form.form"
                                          method="post"
                                          id="form_cbb90df2ad8d29"
                                          name="form_cbb90df2ad8d29"
                                        >
                                          <div className="t-invisible">
                                            <input
                                              value="search/contributions/page"
                                              name="t:cp"
                                              type="hidden"
                                            ></input>
                                            <input
                                              value="krTE37_aSVRSNZ9cx84nTReKDdXTNZMu8VyLM-7RRsSjDBIR6UM-0Yii-WaD3VZ7poU5TV2eh_Bexx5iv15fq9mnoXqZ-dcBC4GQGmfEvrIpponTXcNG-SWrvt2eA-hB9C05BENw2Qev2jwzXuKAIiKetkjM4-U2uVRji7-4IHrsmZ8wPLctw_W63yTy7ZrKB_8IMN-KHC7F7H-N8ldpMUKKZsTTuEpazzRm1V1eWtxih50a489NPu9l6MllvnuTEqDqoxcX3fjMZrE2meEV5S-eqTv4DmWR5T1wUFbw_z9kWTNsbw08A-4W7hcQUT04L2UhXSHGAtcVLePL6hcKqOScF_bYAtM2S5knFpuQr_6idcg4VSNa0ETAql1Qam4BaKunKZex3o5gVwgeSHbBCl6cIHcL4gmgiVfUraKSPONhD1hgisPmFO6NRKErh-tWg5RladLgFlze8lTctcAVEMHt5tV43NpWGJhkkaaY_ELSCwu4_PT0h0uMUVKOnSccWXqc6Bejo5rD52KJFW2ZoJ8Ds7CYWK1vF3NKiMEJW20rHEaVoUox-4M7NQcpCSdIVQ46X8fTUwpLihYmDsK7KZY93q_MU_r0Ev3GwMn0ueH7ZYnfPWyVBL1hL30yFziNSsBe1MRBUgwxtuL_FKizwP5VCj6FBUASKhw7T05hwP9ZQB_jI4kXwREZ0sM59WdnDAcJVkcUAVShfBeubjyIXMy3DEZGTEtBDxgm3NMUWrD2v1WaqrnM3LAePTTYBhxGTBKAHuBJGAn04aL_m4MQkj6FZ3PxUduEHvqJ7lJpaLp9-ysXSL8XBga5xYynFZ3FkiiS_jEx4a4cVx3wILsLZrKZnrIlyD-2ir2nVxrA_wP5LJBQ-k5KRTetNkgf3Bk2gCLPfrvnk3AuITIJi_UZdJ2vNQ-xcDHVH93JmrcJsj59LmJ36faaOqbhCM5tYsv7eP18XFjZmR_vCm7sxsus5cIZdz95aS4k0DbWWrgaMriihR_mCpeQUfD5BWyOrU-E6swzym6AK7vlbq9v4FcBp_Y_VhinLkRItKTEsLrvdJUXW_q1NGOxYeclLQ_huBDTqJX-BoSo_untEDmnFMVTLHPeZW8DT7MqzJ6UMXyskZfHufRVyCsdgkDQwsNSWYsbfU-HUpHdGp-lDKT-xB0etKnlZSMerY8hodStZtImPtfw750Fza8rEICABQsFRZ_sh9e-CIlOVe6VDm0bxaJlonZzqEJoyYHp2-i4DwDH6k3zU29DP9a_53epSCcv2NoC4ryuF93Vn9r9SctwSMbr1ixRR4kCUx3iXFnzRx-qqJM."
                                              name="lia-form-context"
                                              type="hidden"
                                            ></input>
                                            <input
                                              value="CommunityPage::searchformv32.form:"
                                              name="liaFormContentKey"
                                              type="hidden"
                                            ></input>
                                            <input
                                              value="BJR3mZgsgXhChjmdyYZbPmMg/lU=:H4sIAAAAAAAAALWRzUrDQBSFr4WuiohF30C3iahdaEUogkWoGgyu5SadptEkE2du+rPpo/gE4kt04c538AHcunJhkkm1VsHE1tVwzx3O+c7M/QuU+3XYkwyF3dVtHpBwrYhcHkjdQIftq02HC7+3s62pyREYRB4Kl4ZSQI0LR8MQ7S7TCEMmSQxrms0F81xLs1AyrWHFItp07DKvvWEyisLNy3Hlef3xrQRLLaikwdw7Q58RVFvX2EPdw8DRzZgncOqDkGBVhTc/w+clbxQlNwS3mZRmZPmulHHU+KG923m9eyoBDML+IRzkxkksKDuS22xA8hZGAATLSj1S6ryuiWm5fw6neU38uGGsZmLS+wdpwlrNVma6Sl9p4VmqwQUYeV3pxipUYu17iaut/whUTU6gmdc4kkxMW87MkwIriT79BYuLKIwccPryCjPzB3Ki/xH5l4gU+R2rKjjg2gQAAA=="
                                              name="t:formdata"
                                              type="hidden"
                                            ></input>
                                          </div>

                                          <div className="lia-inline-ajax-feedback">
                                            <div
                                              className="AjaxFeedback"
                                              id="feedback_cbb90df2ad8d29"
                                            ></div>
                                          </div>

                                          <input
                                            value="XStz7xFtlTuKNFXs0OqC0JDDpL-_cOSrdUR9QucFNhI."
                                            name="lia-action-token"
                                            type="hidden"
                                          ></input>

                                          <input
                                            value="form_cbb90df2ad8d29"
                                            id="form_UIDform_cbb90df2ad8d29"
                                            name="form_UID"
                                            type="hidden"
                                          ></input>
                                          <input
                                            value=""
                                            id="form_instance_keyform_cbb90df2ad8d29"
                                            name="form_instance_key"
                                            type="hidden"
                                          ></input>

                                          <span className="lia-search-granularity-wrapper">
                                            <select
                                              title="Search Granularity"
                                              className="lia-search-form-granularity search-granularity"
                                              aria-label="Search Granularity"
                                              id="searchGranularity_cbb90df2ad8d29"
                                              name="searchGranularity"
                                            >
                                              <option
                                                title="All community"
                                                selected={false}
                                                value="wxzte24279|community"
                                              >
                                                All community
                                              </option>
                                              <option
                                                title="Knowledge base"
                                                value="tkb|tkb"
                                              >
                                                Knowledge base
                                              </option>
                                              <option
                                                title="Users"
                                                value="user|user"
                                              >
                                                Users
                                              </option>
                                              <option
                                                title="Private Messages"
                                                value="notes|notes"
                                              >
                                                Private Messages
                                              </option>
                                            </select>
                                          </span>

                                          <span className="lia-search-input-wrapper">
                                            <span className="lia-search-input-field">
                                              <span className="lia-button-wrapper lia-button-wrapper-secondary lia-button-wrapper-searchForm-action">
                                                <input
                                                  value="searchForm"
                                                  name="submitContextX"
                                                  type="hidden"
                                                ></input>
                                                <input
                                                  className="lia-button lia-button-secondary lia-button-searchForm-action"
                                                  value="Search"
                                                  id="submitContext_cbb90df2ad8d29"
                                                  name="submitContext"
                                                  type="submit"
                                                ></input>
                                              </span>

                                              <span
                                                className="lia-hidden-aria-visibile"
                                                id="autocompleteInstructionsText_cbb90df2ad8d29"
                                              ></span>
                                              <input
                                                placeholder="Search all content"
                                                aria-label="Search"
                                                title="Search"
                                                className="lia-form-type-text lia-autocomplete-input search-input lia-search-input-message"
                                                value=""
                                                id="messageSearchField_cbb90df2ad8d29_0"
                                                name="messageSearchField"
                                                type="text"
                                              ></input>
                                              <span
                                                className="lia-hidden-aria-visibile"
                                                id="autocompleteInstructionsText_cbb90df2ad8d29_0"
                                              ></span>
                                              <input
                                                placeholder="Search all content"
                                                aria-label="Search"
                                                title="Search"
                                                className="lia-form-type-text lia-autocomplete-input search-input lia-search-input-tkb-article lia-js-hidden"
                                                value=""
                                                id="messageSearchField_cbb90df2ad8d29_1"
                                                name="messageSearchField_0"
                                                type="text"
                                              ></input>

                                              <span
                                                className="lia-hidden-aria-visibile"
                                                id="autocompleteInstructionsText_cbb90df2ad8d29_1"
                                              ></span>
                                              <input
                                                placeholder="Search all content"
                                                ng-non-bindable=""
                                                title="Enter a user name or rank"
                                                className="lia-form-type-text UserSearchField lia-search-input-user search-input lia-js-hidden lia-autocomplete-input"
                                                aria-label="Enter a user name or rank"
                                                value=""
                                                id="userSearchField_cbb90df2ad8d29"
                                                name="userSearchField"
                                                type="text"
                                              ></input>

                                              <span
                                                className="lia-hidden-aria-visibile"
                                                id="autocompleteInstructionsText_cbb90df2ad8d29_2"
                                              ></span>
                                              <input
                                                title="Enter a search word"
                                                className="lia-form-type-text NoteSearchField lia-search-input-note search-input lia-js-hidden lia-autocomplete-input"
                                                aria-label="Enter a search word"
                                                value=""
                                                id="noteSearchField_cbb90df2ad8d29_0"
                                                name="noteSearchField"
                                                type="text"
                                              ></input>
                                              <input
                                                className="lia-as-search-action-id"
                                                name="as-search-action-id"
                                                type="hidden"
                                              ></input>
                                            </span>
                                          </span>

                                          <span className="lia-cancel-search">
                                            cancel
                                          </span>
                                        </form>

                                        <div className="search-autocomplete-toggle-link lia-js-hidden">
                                          <span>
                                            <a
                                              className="lia-link-navigation auto-complete-toggle-on lia-link-ticket-post-action lia-component-search-action-enable-auto-complete"
                                              data-lia-action-token="MlZbkAFcEjIHYSR46045W4CJO30GfQCZE1HhsrythVE."
                                              rel="nofollow"
                                              id="enableAutoComplete_cbb90df2ad8d29"
                                              href="https://community.neo4j.com/t5/community/page.enableautocomplete:enableautocomplete?t:cp=action/contributions/searchactions"
                                            >
                                              Turn on suggestions
                                            </a>
                                            <span className="HelpIcon">
                                              <a
                                                className="lia-link-navigation help-icon lia-tooltip-trigger"
                                                role="button"
                                                id="link_cbb90df2ad8d29"
                                                href="#"
                                              >
                                                <span
                                                  className="lia-img-icon-help lia-fa-icon lia-fa-help lia-fa"
                                                  aria-label="Help Icon"
                                                  role="img"
                                                  id="display_cbb90df2ad8d29"
                                                ></span>
                                              </a>
                                              <div
                                                role="alertdialog"
                                                className="lia-content lia-tooltip-pos-bottom-left lia-panel-tooltip-wrapper"
                                                id="link_cbb90df2ad8d29_0-tooltip-element"
                                              >
                                                <div className="lia-tooltip-arrow"></div>
                                                <div className="lia-panel-tooltip">
                                                  <div className="content">
                                                    Auto-suggest helps you
                                                    quickly narrow down your
                                                    search results by suggesting
                                                    possible matches as you
                                                    type.
                                                  </div>
                                                </div>
                                              </div>
                                            </span>
                                          </span>
                                        </div>
                                      </div>

                                      <div className="spell-check-showing-result">
                                        Showing results for{' '}
                                        <span
                                          className="lia-link-navigation show-results-for-link lia-link-disabled"
                                          id="showingResult_cbb90df2ad8d29"
                                        ></span>
                                      </div>
                                      <div>
                                        <span className="spell-check-search-instead">
                                          Search instead for 
                                          <a
                                            className="lia-link-navigation search-instead-for-link"
                                            rel="nofollow"
                                            id="searchInstead_cbb90df2ad8d29"
                                            href="#"
                                          ></a>
                                        </span>
                                      </div>
                                      <div className="spell-check-do-you-mean lia-component-search-widget-spellcheck">
                                        Did you mean: 
                                        <a
                                          className="lia-link-navigation do-you-mean-link"
                                          rel="nofollow"
                                          id="doYouMean_cbb90df2ad8d29"
                                          href="#"
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lia-quilt-row lia-quilt-row-header-bottom">
                            <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-header-bottom-content lia-mark-empty"></div>
                          </div>
                          <div className="lia-quilt-row lia-quilt-row-header-feedback">
                            <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-feedback">
                              <div className="lia-quilt-column-alley lia-quilt-column-alley-single"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lia-quilt-row lia-quilt-row-main-top">
                    <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-main-top-content lia-mark-empty"></div>
                  </div>
                  <div className="lia-quilt-row lia-quilt-row-main">
                    <div className="lia-quilt-column lia-quilt-column-18 lia-quilt-column-left lia-quilt-column-main-content">
                      <div className="lia-quilt-column-alley lia-quilt-column-alley-left">
                        <div
                          className="custom-community-activity"
                          id="custom-loader"
                        >
                          <section>
                            <header>
                              <h2>Community Activity</h2>
                              <div>
                                <label htmlFor="community-activity-sorted-by">
                                  Sorted by:
                                </label>
                                <select id="community-activity-sorted-by">
                                  <option value="recent" selected>
                                    Most recent
                                  </option>
                                  <option value="views">Most viewed</option>
                                  <option value="replies">
                                    Most commented
                                  </option>
                                  <option value="topkudos">Most liked</option>
                                </select>
                                <div className="custom-start-conversation-button">
                                  <a
                                    className="lia-button lia-button-primary"
                                    href="/t5/forums/postpage/choose-node/true/interaction-style/forum/override-styles/true"
                                  >
                                    Start a conversation
                                  </a>
                                </div>
                              </div>
                            </header>
                            <section id="custom-loader-messages">
                              <div className="errors"></div>
                              <div
                                className="message-list"
                                data-attrib-current-page="0"
                                data-attrib-message-list-type="recent"
                              >
                                <article className="custom-message-tile custom-thread-unread">
                                  <div>
                                    <h3>
                                      <a
                                        href="/t5/integrations/neo4j-server-refuses-connection-after-alot-of-sessions/td-p/56898"
                                        title="Neo4j server refuses connection after alot of sessions"
                                      >
                                        Neo4j server refuses connection after
                                        alot of sessions
                                      </a>
                                    </h3>
                                    <p>
                                      {' '}
                                      When using neo4j python integration after
                                      requesting a lot of connections (16,000 or
                                      so in half a minute)the noe4j server just
                                      refuses to accept anymore connections, is
                                      there a way to bypass this feature?Another
                                      possible solution i thought about was ...{' '}
                                    </p>{' '}
                                    <figure>
                                      {' '}
                                      <img
                                        src="https://community.neo4j.com/t5/image/serverpage/image-id/6827i04D96FF19E459DA4/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400"
                                        alt="Screenshot_35.png"
                                      />
                                    </figure>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-19-2022 1:44:07 PM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/integrations/bd-p/integrations">
                                          Integrations
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>
                                  <footer>
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/14548"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="shalevv123"
                                          src="https://lh3.googleusercontent.com/a/AATXAJzF_VzLjVGxQA9YlPHb60GQNiU_yP3DfX-4xgUg=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/14548"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="">shalevv123</span>
                                        </a>
                                      </strong>
                                      <small>&bull;</small>
                                      <em>Visitor</em>
                                    </div>
                                    <ul className="custom-tile-statistics">
                                      <li className="custom-tile-views">
                                        <b>5</b> Views
                                      </li>
                                      <li className="custom-tile-replies">
                                        <b>1</b> replies
                                      </li>
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>
                                <article className="custom-message-tile custom-thread-unread">
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/how-to-use-neo4j-admin-import-in-community-edition/td-p/56888"
                                        title="How to use neo4j-admin import in community edition?"
                                      >
                                        How to use neo4j-admin import in
                                        community edition?
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hello,i am using Neo4j&nbsp; Community
                                      Edition which runs as a standalone server
                                      in a Unix os. The server operates as a
                                      service which i can start, stop and find
                                      its status. From the documentation i
                                      learned that i can not use neo4j-admin
                                      import tool&nbsp; becau...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-19-2022 7:58:12 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/1829"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="kostas_vavouris"
                                          src="https://s.gravatar.com/avatar/a7c84fab4335ee872ef83e7dcf7f7cf0?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fko.png"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/1829"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            kostas_vavouris
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>9</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>1</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/helm-kubernetes-error-while-following-standalone-install-process/td-p/56528"
                                        title="helm kubernetes error while following standalone install process"
                                      >
                                        helm kubernetes error while following
                                        standalone install process
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hello. I'm quite new to Neo4j and I'm
                                      following this process:When the pod is
                                      starting at this step, I have the error
                                      below about user 7474I checked the
                                      parameters accessible in the helm setup
                                      (helm show values neo4j/neo4j-standalone)
                                      and none of the ...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-10-2022 5:48:57 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/14485"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="XavPil"
                                          src="https://lh3.googleusercontent.com/a-/AOh14Ghc2tM6sHr_UeKziqe8u9MHgQu183PF41W57vOb=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/14485"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            XavPil
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>99</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>6</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/computed-property-from-jwt-e-g-tid/td-p/56526"
                                        title="Computed Property from JWT e.g. tid"
                                      >
                                        Computed Property from JWT e.g. tid
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hi,I am using GraphQL library for
                                      Neo4j.How can I define a property on a
                                      type (e.g. tenantId: String!) which will
                                      take its value from the 'tid' property of
                                      the jwt auth token?I currently use a
                                      '@bind' on the $jwt.sub but ideally, the
                                      'tenantId' field...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-10-2022 4:16:50 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/14482"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="AdrianSpear"
                                          src="https://s.gravatar.com/avatar/69388a6d837fe35cffd632a3a9b6cbf6?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/14482"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            AdrianSpear
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>30</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>1</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/neo4j-disconnects-constantly/td-p/56905"
                                        title="Neo4j disconnects constantly"
                                      >
                                        Neo4j disconnects constantly
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      I'm testing Neo4j (Aura on its free
                                      version).. I'm using Flask and using
                                      py2neo to connect...The app runs alright
                                      but after some time (hours) I end up
                                      receiving this error
                                      :py2neo.errors.ServiceUnavailable: Cannot
                                      connect to any known routersI have t...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-19-2022 9:03:23 PM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/14550"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="rhobin"
                                          src="https://lh3.googleusercontent.com/a-/AOh14GjK8yZb4m4t6DQ0oy9-SlxFvKujQJLb9PF7Ftnyyw=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/14550"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="">rhobin</span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Visitor</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>2</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>1</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/best-way-to-upgrade-gds-version-for-neo4j-browser/td-p/56886"
                                        title="Best way to upgrade GDS version for Neo4j Browser"
                                      >
                                        Best way to upgrade GDS version for
                                        Neo4j Browser
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      While trying to use one of the pre-loaded
                                      datasets on Neo4j Browser, and trying to
                                      use the graph-data-science library, it
                                      complaints about not being able to use the
                                      construct() method for gds due to version
                                      issue on the server. The error looks as
                                      fol...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-19-2022 12:41:08 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/14545"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="janitanjaria"
                                          src="https://lh3.googleusercontent.com/a-/AOh14GiuZghVm67pp8qVbEsw3dk2DcBR0y00LJC8KuLGoQ=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/14545"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            janitanjaria
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>13</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>2</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-solved custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <i className="custom-thread-solved">
                                        <small>Resolved!</small>
                                      </i>{' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/optimize-getting-all-incoming-and-outgoing-edges-for-each-node/td-p/28896"
                                        title="Optimize getting all incoming and outgoing edges for each node and computing the difference in amounts"
                                      >
                                        Optimize getting all incoming and
                                        outgoing edges for each node and
                                        computing the difference in amounts
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hello, I am trying to solve the following
                                      problem: I have transaction data between
                                      Accounts (nodes) with each :SENT
                                      transaction as a directional relationship
                                      between nodes. I would like to compute the
                                      balance of each Account by taking the
                                      difference ...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        11-03-2020 2:17:53 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/692"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="tomas_vrba"
                                          src="https://community.neo4j.com/legacyfs/online/2X/2/2b5bd509724d5dd8065dd75bb8532aa1dceb3e05.png"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/692"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            tomas_vrba
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>1271</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>22</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/nested-match-query-help/td-p/56634"
                                        title="Nested match query help"
                                      >
                                        Nested match query help
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hi Neo4j community,&nbsp;I have now been
                                      trying for a while and reading up on
                                      unwind, collect, etc and try to achieve
                                      something I have no issues with using
                                      Python and running a nested for loop.
                                      However when I do this I will perform a
                                      similar query many, m...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-12-2022 7:57:42 PM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/3000"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="pska752"
                                          src="https://lh3.googleusercontent.com/a/AATXAJxZO2knfJMv7K7tZ5jkL0cM-E3XUft47EjVDNZW=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/3000"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            pska752
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>89</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>6</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/how-to-fix-not-part-of-chain/td-p/56645"
                                        title="How to fix NOT PART OF CHAIN!"
                                      >
                                        How to fix NOT PART OF CHAIN!
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hi all,I'm using Neo4j 3.5.14 community
                                      version, now i have problem with the
                                      database, some query(not all) throw
                                      exception:&nbsp;Neo4j.Driver.V1.DatabaseException:
                                      NOT PART OF CHAIN!
                                      RelationshipTraversalCursor[id=6725350,
                                      open state with: denseNode=false...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-13-2022 1:57:11 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/14502"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="thienlq"
                                          src="https://s.gravatar.com/avatar/85755178668df8d36257da2fdddc4381?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fth.png"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/14502"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            thienlq
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>38</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>2</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/how-to-find-shortest-path-limiting-the-distance-from-source/td-p/56883"
                                        title="How to find shortest path limiting the distance from source?"
                                      >
                                        How to find shortest path limiting the
                                        distance from source?
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      I started to learn Neo4j a few days
                                      ago.I'm using it to find best path and
                                      make some analyzes.The logic is a Person
                                      (id, name) can go to a Restaurant (id,
                                      name) via some Street (id, name). The
                                      connection between them have a cost. PS:
                                      All streets have...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-18-2022 9:27:50 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/14543"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="lsnd"
                                          src="https://s.gravatar.com/avatar/71801b1bf9b9654a1f0f8d2313b74407?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fle.png"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/14543"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            lsnd
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>63</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>8</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile ">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/drivers-stacks/how-can-i-calculate-shortest-path-through-neo4j-in-my-spring/td-p/56550"
                                        title="How can I calculate Shortest Path through Neo4j in my Spring Boot Example"
                                      >
                                        How can I calculate Shortest Path
                                        through Neo4j in my Spring Boot Example
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hi,&nbsp; I have a problem about
                                      calculating the shortest path through
                                      Neo4j in my Spring Boot example. After
                                      adding some cities with its route, I want
                                      to calculate their shortest path in terms
                                      of their connection and their duration.
                                      However, these two me...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-10-2022 1:41:29 PM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/drivers-stacks/bd-p/drivers_stacks">
                                          Drivers &amp; Stacks
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/292"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="sngermiyanoglu"
                                          src="https://lh3.googleusercontent.com/a/AATXAJw2nmaxX5wtZ4NNV0My1K5kSOdz_wMC9O4CVEmH=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/292"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            sngermiyanoglu
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node Clone</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>101</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>5</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/neo4j-browser-sync-got-very-slow/td-p/43383"
                                        title="Neo4j Browser Sync got very slow"
                                      >
                                        Neo4j Browser Sync got very slow
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      I'm using Chrome as the Browser. But my
                                      browser got very slow after I signed in
                                      for Neo4j Browser Sync. This is what I
                                      did: 1) I checked the box for Sign
                                      in/Register for Neo4j Browser Sync since I
                                      wanted to stored my favorite Cypher
                                      scripts. 2) Runni...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        10-22-2019 11:44:26 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/11508"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="tliu108"
                                          src="https://community.neo4j.com/legacyfs/online/2X/f/f22b70004eb751a7708664048b98a0c69b23c372.jpeg"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/11508"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            tliu108
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node Link</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>1705</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>10</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>2</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-solved custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <i className="custom-thread-solved">
                                        <small>Resolved!</small>
                                      </i>{' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/have-gds-similarity-write-to-existing-relationship/td-p/56681"
                                        title="Have GDS Similarity write to existing relationship"
                                      >
                                        Have GDS Similarity write to existing
                                        relationship
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hi,Scenario:I have 3 basic node
                                      labels:&nbsp;Document, Classification, and
                                      Word and I am running some similarity
                                      algorithms against them. Basically I am
                                      finding documents that share similar
                                      classification connections and separately
                                      I am finding documents ...{' '}
                                    </p>{' '}
                                    <figure>
                                      {' '}
                                      <img
                                        src="https://community.neo4j.com/t5/image/serverpage/image-id/6800i7EC9ADB2F458E183/image-size/medium/is-moderation-mode/true?v=v2&amp;px=400"
                                        alt="andy_hegedus_0-1655155728766.png"
                                      />
                                    </figure>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-13-2022 2:34:58 PM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/9672"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="andy_hegedus"
                                          src="https://s.gravatar.com/avatar/e92361a4514770b35457f2fbf115b13d?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fan.png"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/9672"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            andy_hegedus
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small>{' '}
                                      <em>Graph Voyager</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>50</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>3</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/neo4j-graph-platform/db-stuck-in-offline-state-can-t-get-it-to-start/td-p/56880"
                                        title="DB stuck in offline state, can&#39;t get it to start"
                                      >
                                        DB stuck in offline state, can&#39;t get
                                        it to start
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hello, I'm using Neo4j Desktop
                                      4.4.3.Created a DB&nbsp; and work with it
                                      for a while without any problem.Yesterday,
                                      I started copying that DB into a new one,
                                      using the "neo4j-admin copy"&nbsp;shell
                                      command.&nbsp;While doing the copy, I had
                                      to stop my source DB (Neo...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-18-2022 7:01:16 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/neo4j-graph-platform/bd-p/graph_platform">
                                          Neo4j Graph Platform
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/10685"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="Adiro"
                                          src="https://lh3.googleusercontent.com/a/AATXAJwZumAfOu4b5cNVlXarOmoC7yZ-ovyzlDinLDm0UA=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/10685"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            Adiro
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node Link</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>17</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>1</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>{' '}
                                <article className="custom-message-tile custom-thread-unread">
                                  {' '}
                                  <div>
                                    {' '}
                                    <h3>
                                      {' '}
                                      <a
                                        href="/t5/graphacademy-discussions/implementing-knn-with-cosine-similarity/td-p/56877"
                                        title="Implementing KNN with cosine similarity"
                                      >
                                        Implementing KNN with cosine similarity
                                      </a>
                                    </h3>{' '}
                                    <p>
                                      {' '}
                                      Hi/HelloI am trying to implement a KNN
                                      with cosine Similarity, but I found a
                                      strange issue that is the following: I
                                      checked the official documentation and I
                                      implemented some predefined codes to be
                                      familiar with KNN in neo4j, the problem
                                      was that insi...{' '}
                                    </p>
                                  </div>{' '}
                                  <aside>
                                    {' '}
                                    <div className="custom-tile-date">
                                      {' '}
                                      <time dateTime="MM-dd-yyyy hh:mm a">
                                        {' '}
                                        06-18-2022 4:03:34 AM{' '}
                                      </time>
                                    </div>{' '}
                                    |{' '}
                                    <div className="custom-tile-category">
                                      {' '}
                                      <strong>
                                        {' '}
                                        <span>Posted in </span>{' '}
                                        <a href="/t5/graphacademy-discussions/bd-p/graphacademy_discussions">
                                          GraphAcademy Discussions
                                        </a>
                                      </strong>
                                    </div>
                                  </aside>{' '}
                                  <footer>
                                    {' '}
                                    <div className="custom-tile-author-info">
                                      {' '}
                                      <a
                                        className="UserAvatar lia-link-navigation"
                                        href="/t5/user/viewprofilepage/user-id/7599"
                                        title="View profile"
                                      >
                                        {' '}
                                        <img
                                          className="lia-user-avatar-message"
                                          alt="benmahria_bilal"
                                          src="https://lh3.googleusercontent.com/a/AATXAJyInWtwe8LzbAE-So-7pQiUjJxjscCfX1JYgT7P=s96-c"
                                        />
                                      </a>{' '}
                                      <strong>
                                        {' '}
                                        <span>by </span>{' '}
                                        <a
                                          href="/t5/user/viewprofilepage/user-id/7599"
                                          rel="author"
                                          title="View profile"
                                        >
                                          {' '}
                                          <span className="login-bold">
                                            benmahria_bilal
                                          </span>
                                        </a>
                                      </strong>{' '}
                                      <small>&bull;</small> <em>Node</em>
                                    </div>{' '}
                                    <ul className="custom-tile-statistics">
                                      {' '}
                                      <li className="custom-tile-views">
                                        <b>7</b> Views
                                      </li>{' '}
                                      <li className="custom-tile-replies">
                                        <b>0</b> replies
                                      </li>{' '}
                                      <li className="custom-tile-kudos">
                                        <b>0</b> kudos
                                      </li>
                                    </ul>
                                  </footer>
                                </article>
                              </div>{' '}
                              <div className="lia-view-all">
                                {' '}
                                <a
                                  className="lia-link-navigation load-more-button "
                                  href="javascript:;"
                                  id="custom-loader-button"
                                >
                                  Load more
                                </a>
                              </div>
                            </section>
                          </section>
                        </div>
                      </div>
                    </div>
                    <div className="lia-quilt-column lia-quilt-column-06 lia-quilt-column-right lia-quilt-column-side-content">
                      <div className="lia-quilt-column-alley lia-quilt-column-alley-right">
                        <div className="lia-panel lia-panel-standard StringDisplayTaplet Chrome lia-component-common-widget-announcement">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Announcements
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div className="StringDisplayTaplet">
                                      <h2>
                                        Welcome to the Neo4j Community relaunch
                                        beta!
                                      </h2>
                                      Please{' '}
                                      <a href="https://wxzte24279.lithium.com/t5/community-suggestions/idb-p/community_suggestions">
                                        Click Here
                                      </a>{' '}
                                      to provide us with your feedback.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>

                        <div className="lia-panel lia-panel-standard StringDisplayTaplet Chrome lia-component-common-widget-announcement">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Next Steps
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div className="StringDisplayTaplet">
                                      <ol>
                                        <li>
                                          <a href="/t5/introduce-yourself/bd-p/hello">
                                            Introduce yourself
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/t5/introduce-yourself/bd-p/hello">
                                            Welcome someone
                                          </a>
                                        </li>
                                        <li>
                                          <a href="t5/forums/postpage/category-id/product_discussions/choose-node/true">
                                            Ask a question
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/t5/forums/unansweredtopicspage">
                                            Answer a question
                                          </a>
                                        </li>
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>

                        <div className="lia-panel lia-panel-standard StringDisplayTaplet Chrome lia-component-common-widget-announcement">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Neo4j Resources
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div className="StringDisplayTaplet">
                                      <ul>
                                        <li>
                                          <a href="https://neo4j.com/docs/">
                                            Documentation
                                          </a>
                                        </li>
                                        <li>
                                          <a href="https://neo4j.com/developer/get-started/">
                                            Guides
                                          </a>
                                        </li>
                                        <li>
                                          <a href="https://neo4j.com/developer-blog/">
                                            Blog
                                          </a>
                                        </li>
                                        <li>
                                          <a href="https://discord.gg">
                                            Discord (for live chat)
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>

                        <div className="lia-panel lia-panel-standard AcceptedSolutionsLeaderboardTaplet Chrome lia-component-solutions-widget-accepted-solutions-leaderboard-taplet">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Top Solution Authors
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div className="UserList lia-component-users-widget-user-list">
                                      <span id="user-listuserList"></span>
                                      <div className="t-data-grid" id="grid">
                                        <table
                                          role="presentation"
                                          className="lia-list-slim"
                                        >
                                          <thead
                                            className="lia-table-head"
                                            id="columns"
                                          >
                                            <tr>
                                              <th
                                                scope="col"
                                                className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text t-first"
                                              >
                                                <span
                                                  className="lia-view-filter lia-link-disabled"
                                                  id="link_11"
                                                >
                                                  User
                                                </span>
                                              </th>
                                              <th
                                                scope="col"
                                                className="acceptedSolutionsCountColumn lia-data-cell-tertiary lia-data-cell-integer t-last"
                                              >
                                                Count
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="lia-list-row lia-row-odd t-first">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-9010 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_12"
                                                      href="/t5/user/viewprofilepage/user-id/9010"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="glilienfield"
                                                          alt="glilienfield"
                                                          id="imagedisplay"
                                                          src="https://s.gravatar.com/avatar/7685fd7a2f144c2dc8a9cb36ebc65254?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgl.png"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Ninja">
                                                            <img
                                                              className="lia-user-rank-icon lia-user-rank-icon-left"
                                                              title="Ninja"
                                                              alt="Ninja"
                                                              id="display"
                                                              src="https://community.neo4j.com/html/@84157B2047FA4E88E73B28E3C09D9B1B/rank_icons/Ninja.svg"
                                                            />

                                                            <span className="login-bold">
                                                              glilienfield
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="acceptedSolutionsCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of accepted solutions: 14"
                                              >
                                                14
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-even">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-8653 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_13"
                                                      href="/t5/user/viewprofilepage/user-id/8653"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="bennu_neo"
                                                          alt="bennu_neo"
                                                          id="imagedisplay_0"
                                                          src="https://lh3.googleusercontent.com/a-/AOh14GiIch6Rc0qymz8iF1H7B0_vMo0BA79U2gnwV9_y=s96-c"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Neo4j">
                                                            <img
                                                              className="lia-user-rank-icon lia-user-rank-icon-left"
                                                              title="Neo4j"
                                                              alt="Neo4j"
                                                              id="display_0"
                                                              src="https://community.neo4j.com/html/@89AAD781A561FA9D96A4D4D41E83E66B/rank_icons/Neo4j.svg"
                                                            />

                                                            <span className="login-bold">
                                                              bennu_neo
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="acceptedSolutionsCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of accepted solutions: 5"
                                              >
                                                5
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-odd">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-290 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_14"
                                                      href="/t5/user/viewprofilepage/user-id/290"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="cuneyttyler"
                                                          alt="cuneyttyler"
                                                          id="imagedisplay_1"
                                                          src="https://lh3.googleusercontent.com/a-/AOh14Ggszv8_prOtCAcd6d-rABoK-CaZNQ5Y9moUCda4=s96-c"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Node-Clone">
                                                            <span className="login-bold">
                                                              cuneyttyler
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="acceptedSolutionsCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of accepted solutions: 4"
                                              >
                                                4
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-even">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-3843 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_15"
                                                      href="/t5/user/viewprofilepage/user-id/3843"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="Cobra"
                                                          alt="Cobra"
                                                          id="imagedisplay_2"
                                                          src="https://lh3.googleusercontent.com/a/AATXAJwYNKxx18OM34eldBygIlaRGClKZWlyzSkDe-PN=s96-c"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Ninja">
                                                            <img
                                                              className="lia-user-rank-icon lia-user-rank-icon-left"
                                                              title="Ninja"
                                                              alt="Ninja"
                                                              id="display_1"
                                                              src="https://community.neo4j.com/html/@84157B2047FA4E88E73B28E3C09D9B1B/rank_icons/Ninja.svg"
                                                            />

                                                            <span className="login-bold">
                                                              Cobra
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="acceptedSolutionsCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of accepted solutions: 4"
                                              >
                                                4
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-odd t-last">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-6491 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_16"
                                                      href="/t5/user/viewprofilepage/user-id/6491"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="giuseppe_villan"
                                                          alt="giuseppe_villan"
                                                          id="imagedisplay_3"
                                                          src="https://community.neo4j.com/legacyfs/online/2X/4/48a9c4775c8ccd7790e6403689b99acd1926bf81.png"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Graph-Fellow">
                                                            <span className="login-bold">
                                                              giuseppe_villan
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="acceptedSolutionsCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of accepted solutions: 3"
                                              >
                                                3
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>

                                    <div className="lia-view-all">
                                      <a
                                        className="lia-link-navigation"
                                        id="link_17"
                                        href="/t5/solutions/acceptedsolutionsleaderboardpage/node-display-id/community%3Awxzte24279/timerange/one_month"
                                      >
                                        View all
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>

                        <div className="lia-panel lia-panel-standard KudoedAuthorsLeaderboardTaplet Chrome lia-component-kudos-widget-authors-leaderboard">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Top Kudoed Authors
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div className="UserList lia-component-users-widget-user-list">
                                      <span id="user-listuserList_0"></span>
                                      <div className="t-data-grid" id="grid_0">
                                        <table
                                          role="presentation"
                                          className="lia-list-slim"
                                        >
                                          <thead
                                            className="lia-table-head"
                                            id="columns_0"
                                          >
                                            <tr>
                                              <th
                                                scope="col"
                                                className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text t-first"
                                              >
                                                <span
                                                  className="lia-view-filter lia-link-disabled"
                                                  id="link_18"
                                                >
                                                  User
                                                </span>
                                              </th>
                                              <th
                                                scope="col"
                                                className="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer t-last"
                                              >
                                                Count
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="lia-list-row lia-row-odd t-first">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-9010 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_19"
                                                      href="/t5/user/viewprofilepage/user-id/9010"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="glilienfield"
                                                          alt="glilienfield"
                                                          id="imagedisplay_4"
                                                          src="https://s.gravatar.com/avatar/7685fd7a2f144c2dc8a9cb36ebc65254?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fgl.png"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Ninja">
                                                            <img
                                                              className="lia-user-rank-icon lia-user-rank-icon-left"
                                                              title="Ninja"
                                                              alt="Ninja"
                                                              id="display_2"
                                                              src="https://community.neo4j.com/html/@84157B2047FA4E88E73B28E3C09D9B1B/rank_icons/Ninja.svg"
                                                            />

                                                            <span className="login-bold">
                                                              glilienfield
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of kudos: 31"
                                              >
                                                31
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-even">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-8653 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_20"
                                                      href="/t5/user/viewprofilepage/user-id/8653"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="bennu_neo"
                                                          alt="bennu_neo"
                                                          id="imagedisplay_5"
                                                          src="https://lh3.googleusercontent.com/a-/AOh14GiIch6Rc0qymz8iF1H7B0_vMo0BA79U2gnwV9_y=s96-c"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Neo4j">
                                                            <img
                                                              className="lia-user-rank-icon lia-user-rank-icon-left"
                                                              title="Neo4j"
                                                              alt="Neo4j"
                                                              id="display_3"
                                                              src="https://community.neo4j.com/html/@89AAD781A561FA9D96A4D4D41E83E66B/rank_icons/Neo4j.svg"
                                                            />

                                                            <span className="login-bold">
                                                              bennu_neo
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of kudos: 13"
                                              >
                                                13
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-odd">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-3843 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_21"
                                                      href="/t5/user/viewprofilepage/user-id/3843"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="Cobra"
                                                          alt="Cobra"
                                                          id="imagedisplay_6"
                                                          src="https://lh3.googleusercontent.com/a/AATXAJwYNKxx18OM34eldBygIlaRGClKZWlyzSkDe-PN=s96-c"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Ninja">
                                                            <img
                                                              className="lia-user-rank-icon lia-user-rank-icon-left"
                                                              title="Ninja"
                                                              alt="Ninja"
                                                              id="display_4"
                                                              src="https://community.neo4j.com/html/@84157B2047FA4E88E73B28E3C09D9B1B/rank_icons/Ninja.svg"
                                                            />

                                                            <span className="login-bold">
                                                              Cobra
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of kudos: 11"
                                              >
                                                11
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-even">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-276 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_22"
                                                      href="/t5/user/viewprofilepage/user-id/276"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="elias_eychouh"
                                                          alt="elias_eychouh"
                                                          id="imagedisplay_7"
                                                          src="https://community.neo4j.com/t5/image/serverpage/avatar-name/death/avatar-theme/candy/avatar-collection/monsters/avatar-display-size/message/version/2?xdesc=1.0"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Node-Link">
                                                            <span className="login-bold">
                                                              elias_eychouh
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of kudos: 6"
                                              >
                                                6
                                              </td>
                                            </tr>
                                            <tr className="lia-list-row lia-row-odd t-last">
                                              <td className="userAvatarNameColumn lia-data-cell-primary lia-data-cell-text">
                                                <div className="UserProfileSummary lia-user-item lia-js-data-userId-2273 lia-user-info-group">
                                                  <div className="lia-message-author-avatar-username">
                                                    <a
                                                      className="UserAvatarName lia-link-navigation"
                                                      id="link_23"
                                                      href="/t5/user/viewprofilepage/user-id/2273"
                                                    >
                                                      <div className="UserAvatar lia-user-avatar lia-component-common-widget-user-avatar">
                                                        <img
                                                          className="lia-user-avatar-message"
                                                          title="ainsausti"
                                                          alt="ainsausti"
                                                          id="imagedisplay_8"
                                                          src="https://s.gravatar.com/avatar/7d1558de5b05382740c01df06907007a?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fai.png"
                                                        />
                                                      </div>

                                                      <div className="lia-user-attributes">
                                                        <div className="lia-user-name">
                                                          <span className="UserName lia-user-name lia-user-rank-Node-Clone">
                                                            <span className="login-bold">
                                                              ainsausti
                                                            </span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>

                                                  <div className="lia-user-attributes"></div>
                                                </div>
                                              </td>
                                              <td
                                                className="kudosCountColumn lia-data-cell-tertiary lia-data-cell-integer"
                                                aria-label="Number of kudos: 6"
                                              >
                                                6
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>

                                    <div className="lia-view-all">
                                      <a
                                        className="lia-link-navigation view-all-link"
                                        id="link_24"
                                        href="/t5/forums/kudosleaderboardpage/timerange/one_month/page/1/tab/authors"
                                      >
                                        View all
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>

                        <div className="lia-panel lia-panel-standard UsersOnlineAvatarsTaplet Chrome lia-component-users-widget-users-avatars-online">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Users online (3,071)
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div
                                      id="usersOnlineAvatarsTaplet"
                                      className="UsersOnlineAvatarsTaplet lia-users-online-avatars"
                                    >
                                      <ul
                                        role="list"
                                        id="list"
                                        className="lia-list-tile"
                                      >
                                        <li>
                                          <div className="UserAvatar lia-user-avatar">
                                            <a
                                              className="UserAvatar lia-link-navigation"
                                              target="_self"
                                              id="link_25"
                                              href="/t5/user/viewprofilepage/user-id/2"
                                            >
                                              <img
                                                className="lia-user-avatar-message"
                                                title="abk-of-neo4j"
                                                alt="abk-of-neo4j"
                                                id="display_5"
                                                src="https://lh3.googleusercontent.com/a-/AOh14GiHLsMhhfaBDcaL48KXeCvbRkpuo8D_fvQBHzLgTQ=s96-c"
                                              />
                                            </a>
                                          </div>
                                        </li>

                                        <li>
                                          <div className="UserAvatar lia-user-avatar">
                                            <a
                                              className="UserAvatar lia-link-navigation"
                                              target="_self"
                                              id="link_26"
                                              href="/t5/user/viewprofilepage/user-id/14391"
                                            >
                                              <img
                                                className="lia-user-avatar-message"
                                                title="AxelHagglund"
                                                alt="AxelHagglund"
                                                id="display_6"
                                                src="https://s.gravatar.com/avatar/2db327a42bd025efadf8243ea4859382?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fax.png"
                                              />
                                            </a>
                                          </div>
                                        </li>

                                        <li>
                                          <div className="UserAvatar lia-user-avatar">
                                            <a
                                              className="UserAvatar lia-link-navigation"
                                              target="_self"
                                              id="link_27"
                                              href="/t5/user/viewprofilepage/user-id/1862"
                                            >
                                              <img
                                                className="lia-user-avatar-message"
                                                title="gerrit_meier"
                                                alt="gerrit_meier"
                                                id="display_7"
                                                src="https://s.gravatar.com/avatar/377af86ff62a58e030ac147fed63b152?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fge.png"
                                              />
                                            </a>
                                          </div>
                                        </li>

                                        <li>
                                          <div className="UserAvatar lia-user-avatar">
                                            <a
                                              className="UserAvatar lia-link-navigation"
                                              target="_self"
                                              id="link_28"
                                              href="/t5/user/viewprofilepage/user-id/14526"
                                            >
                                              <img
                                                className="lia-user-avatar-message"
                                                title="jpedrocarvalho"
                                                alt="jpedrocarvalho"
                                                id="display_8"
                                                src="https://s.gravatar.com/avatar/9cabe41ca00c536a4ccb70b2acacfa87?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjp.png"
                                              />
                                            </a>
                                          </div>
                                        </li>

                                        <li>
                                          <div className="UserAvatar lia-user-avatar">
                                            <a
                                              className="UserAvatar lia-link-navigation"
                                              target="_self"
                                              id="link_29"
                                              href="/t5/user/viewprofilepage/user-id/1880"
                                            >
                                              <img
                                                className="lia-user-avatar-message"
                                                title="michael_hunger"
                                                alt="michael_hunger"
                                                id="display_9"
                                                src="https://lh3.googleusercontent.com/a-/AOh14GgW-oljt73WEvcsrondk43op2aaeohMxalvUrmkwQ=s96-c"
                                              />
                                            </a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>

                        <div className="lia-panel lia-panel-standard ActionLinksTaplet Chrome lia-component-community-widget-admin-links">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Community dashboard
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div
                                      id="communityAdminLinksTaplet"
                                      className="ActionLinksTaplet lia-nav-list"
                                    >
                                      <ul
                                        role="list"
                                        id="list_0"
                                        className="lia-list-standard"
                                      >
                                        <li>
                                          <a
                                            className="lia-link-navigation community-admin-link lia-component-admin-widget-admin"
                                            id="communityAdmin"
                                            href="/t5/bizapps/bizappspage/tab/community%3Aadmin"
                                          >
                                            Community Admin
                                          </a>
                                        </li>

                                        <li>
                                          <a
                                            className="lia-link-navigation cic-v2 lia-link-ticket-post-action lia-component-admin-widget-cic-v2"
                                            data-lia-action-token="4zEUri__G7vjbUFzYvAXAcg3WDFLBMa_Z0Hif8Crsww."
                                            rel="nofollow"
                                            id="cicv2"
                                            href="https://community.neo4j.com/t5/community/page.cicv2?t:cp=admin/contributions/actions"
                                          >
                                            Community Analytics
                                          </a>
                                        </li>

                                        <li>
                                          <a
                                            className="lia-link-navigation moderation-manager-link lia-component-spam-searchpage"
                                            id="spamManager"
                                            href="/t5/spam/searchpage"
                                          >
                                            Spam Quarantine
                                          </a>
                                        </li>

                                        <li>
                                          <a
                                            className="lia-link-navigation admin-faq-link lia-component-help-action-admin-faq"
                                            id="adminFaqPage"
                                            href="/t5/help/adminfaqpage"
                                          >
                                            Admin Help
                                          </a>
                                        </li>

                                        <li>
                                          <a
                                            className="lia-link-navigation plugin-editor-link lia-component-studio-action-publish"
                                            id="publish"
                                            href="/t5/bizapps/page/tab/community%3Apublish"
                                          >
                                            Publishing
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>

                        <div className="lia-panel lia-panel-standard ImageModerationTaplet Chrome lia-component-images-widget-moderation">
                          <div className="lia-decoration-border">
                            <div className="lia-decoration-border-top">
                              <div></div>
                            </div>
                            <div className="lia-decoration-border-content">
                              <div>
                                <div className="lia-panel-heading-bar-wrapper">
                                  <div className="lia-panel-heading-bar">
                                    <span
                                      aria-level={3}
                                      role="heading"
                                      className="lia-panel-heading-bar-title"
                                    >
                                      Image Moderation
                                    </span>
                                  </div>
                                </div>
                                <div className="lia-panel-content-wrapper">
                                  <div className="lia-panel-content">
                                    <div
                                      id="imageModerationTaplet"
                                      className="ImageModerationTaplet"
                                    >
                                      <div className="lia-text">
                                        0 flagged images and 84 unmoderated
                                        images in entire community
                                      </div>

                                      <div className="lia-view-all">
                                        <a
                                          className="lia-link-navigation image-console-link"
                                          id="link_30"
                                          href="/t5/media/imageconsolepage"
                                        >
                                          Image Console
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="lia-decoration-border-bottom">
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lia-quilt-row lia-quilt-row-main-bottom">
                    <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-main-bottom-content">
                      <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                        <div className="custom-latest-blog-articles">
                          <section>
                            <h2>Latest from our Blog</h2>
                            <div>
                              <article className="custom-blog-article-tile">
                                <h3>
                                  <a href="/t5/community-news/graphconnect-2022-don-t-miss-the-devzone/ba-p/56314">
                                    GraphConnect 2022: Don’t Miss the DevZone!
                                  </a>
                                </h3>
                                <p>
                                  Being at a conference is intense. It's a lot
                                  to take in. After more than two years of
                                  pandemic, we are all a bit out of social
                                  practice. Don't worry about it, you are
                                  amongst friends. The DevZone is w...
                                </p>
                                <a
                                  href="/t5/community-news/graphconnect-2022-don-t-miss-the-devzone/ba-p/56314"
                                  title="View article"
                                >
                                  <img
                                    src="https://community.neo4j.com/t5/image/serverpage/image-id/6745i6C43B48490E5D7A6/image-size/large?v=v2&amp;px=999"
                                    alt=""
                                  />
                                </a>
                                <footer>
                                  <div className="post-time">
                                    <time>06-04-2022</time>
                                  </div>
                                  <span>
                                    <b>0</b> Comments
                                  </span>
                                </footer>
                              </article>

                              <article className="custom-blog-article-tile">
                                <h3>
                                  <a href="/t5/community-news/this-week-in-neo4j-healthcare-energy-distribution-ai-cloud-java/ba-p/56281">
                                    This Week in Neo4j: Healthcare, Energy
                                    Distribution, AI, Cloud, Java &amp; Quarkus,
                                    Graph for Beginners,
                                  </a>
                                </h3>
                                <p>
                                  We are very proud to announce the 2022 Neo4j
                                  Connected Data Fellowship in partnership with
                                  the&nbsp;International Consortium of
                                  Investigative Journalists (ICIJ). The
                                  fellowship, first initiated in 2017, is...
                                </p>
                                <a
                                  href="/t5/community-news/this-week-in-neo4j-healthcare-energy-distribution-ai-cloud-java/ba-p/56281"
                                  title="View article"
                                >
                                  <img
                                    src="https://community.neo4j.com/t5/image/serverpage/image-id/6733iF42753AF959FDD89/image-size/large?v=v2&amp;px=999"
                                    alt=""
                                  />
                                </a>
                                <footer>
                                  <div className="post-time">
                                    <time>06-03-2022</time>
                                  </div>
                                  <span>
                                    <b>0</b> Comments
                                  </span>
                                </footer>
                              </article>

                              <article className="custom-blog-article-tile">
                                <h3>
                                  <a href="/t5/community-news/this-week-in-neo4j-graph-composition-cypher-tips-dataset/ba-p/56279">
                                    This Week in Neo4j: Graph Composition,
                                    Cypher Tips, Dataset Analysis, Kafka
                                    Messages, Running Backup
                                  </a>
                                </h3>
                                <p>
                                  GraphConnect, the highly-anticipated gathering
                                  of graph technology experts and enthusiasts,
                                  is coming to Austin, Texas! It’s the best
                                  place to learn about connected data and
                                  relationships in graphs. F...
                                </p>
                                <a
                                  href="/t5/community-news/this-week-in-neo4j-graph-composition-cypher-tips-dataset/ba-p/56279"
                                  title="View article"
                                >
                                  <img
                                    src="https://community.neo4j.com/t5/image/serverpage/image-id/6734i5827983F5923BCD5/image-size/large?v=v2&amp;px=999"
                                    alt=""
                                  />
                                </a>
                                <footer>
                                  <div className="post-time">
                                    <time>06-03-2022</time>
                                  </div>
                                  <span>
                                    <b>0</b> Comments
                                  </span>
                                </footer>
                              </article>

                              <article className="custom-blog-article-tile">
                                <h3>
                                  <a href="/t5/community-news/this-week-in-neo4j-graphs4good-graphql-game-of-life-information/ba-p/56278">
                                    This Week in Neo4j: Graphs4Good, GraphQL,
                                    Game of Life, Information Extraction, Cypher
                                    Map Projectio
                                  </a>
                                </h3>
                                <p>
                                  GraphConnect is right around the corner! We
                                  are so excited to get together with the
                                  community for this long-awaited onsite event
                                  in Austin, Texas, from June 6 – 8, 2022. You
                                  can learn all about it – s...
                                </p>
                                <a
                                  href="/t5/community-news/this-week-in-neo4j-graphs4good-graphql-game-of-life-information/ba-p/56278"
                                  title="View article"
                                >
                                  <img
                                    src="https://community.neo4j.com/t5/image/serverpage/image-id/6732i87B6AFF0E101871D/image-size/large?v=v2&amp;px=999"
                                    alt=""
                                  />
                                </a>
                                <footer>
                                  <div className="post-time">
                                    <time>06-03-2022</time>
                                  </div>
                                  <span>
                                    <b>0</b> Comments
                                  </span>
                                </footer>
                              </article>
                            </div>
                            <div className="lia-view-all">
                              <a
                                className="view-all-link"
                                href="/t5/community-news/bg-p/news"
                              >
                                View all
                              </a>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lia-quilt-row lia-quilt-row-footer">
                    <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-common-footer">
                      <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                        <div className="lia-quilt lia-quilt-footer lia-quilt-layout-custom-community-footer lia-component-quilt-footer">
                          <div className="lia-quilt-row lia-quilt-row-footer-top">
                            <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-footer-top-content">
                              <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                                <footer data-c="footer navigation">
                                  <div
                                    id="footer-v2"
                                    className="bg-whitesmoke py-16 text-sm"
                                  >
                                    <div className="grid-container flex flex-col gap-y-8">
                                      <div className="grid-x grid-padding-y grid-margin-y">
                                        {/* <!-- Products column --> */}
                                        <div className="cell small-12 medium-3 flex flex-col gap-y-3">
                                          <div className="uppercase font-bold">
                                            Products
                                          </div>
                                          <ul className="list-none m-0">
                                            <li>
                                              <a
                                                data-l="Platform Overview"
                                                className="leading-6"
                                                href="https://neo4j.com/product/"
                                                data-ol-has-click-handler=""
                                              >
                                                Platform Overview
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Neo4j Graph Database"
                                                className="leading-6"
                                                href="https://neo4j.com/product/neo4j-graph-database/"
                                                data-ol-has-click-handler=""
                                              >
                                                Neo4j Graph Database
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Neo4j AuraDB"
                                                className="leading-6"
                                                href="https://neo4j.com/cloud/aura/"
                                                data-ol-has-click-handler=""
                                              >
                                                Neo4j AuraDB
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Neo4j Graph Data Science"
                                                className="leading-6"
                                                href="https://neo4j.com/product/graph-data-science/"
                                                data-ol-has-click-handler=""
                                              >
                                                Neo4j Graph Data Science
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Neo4j Bloom"
                                                className="leading-6"
                                                href="https://neo4j.com/product/bloom/"
                                                data-ol-has-click-handler=""
                                              >
                                                Neo4j Bloom
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Neo4j Developer Tools"
                                                className="leading-6"
                                                href="https://neo4j.com/product/developer-tools/"
                                                data-ol-has-click-handler=""
                                              >
                                                Neo4j Developer Tools
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Neo4j GraphQL Library"
                                                className="leading-6"
                                                href="https://neo4j.com/product/graphql-library/"
                                                data-ol-has-click-handler=""
                                              >
                                                Neo4j GraphQL Library
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Cypher Query Language"
                                                className="leading-6"
                                                href="https://neo4j.com/product/cypher-graph-query-language/"
                                                data-ol-has-click-handler=""
                                              >
                                                Cypher Query Language
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Pricing"
                                                className="leading-6"
                                                href="https://neo4j.com/pricing/"
                                                data-ol-has-click-handler=""
                                              >
                                                Pricing
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        {/* <!-- Learn column --> */}
                                        <div className="cell small-12 medium-2 flex flex-col gap-y-3">
                                          <div className="uppercase font-bold">
                                            Learn
                                          </div>
                                          <ul className="list-none m-0">
                                            <li>
                                              <a
                                                data-l="Resources"
                                                className="leading-6"
                                                href="https://neo4j.com/resources/"
                                                data-ol-has-click-handler=""
                                              >
                                                Resources
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Events"
                                                className="leading-6"
                                                href="https://neo4j.com/events/"
                                                data-ol-has-click-handler=""
                                              >
                                                Events
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        {/* <!-- Solutions column --> */}
                                        <div className="cell small-12 medium-2 flex flex-col gap-y-3">
                                          <div className="uppercase font-bold">
                                            Solutions
                                          </div>
                                          <ul className="list-none m-0">
                                            <li>
                                              <a
                                                data-l="Use Cases"
                                                className="leading-6"
                                                href="https://neo4j.com/use-cases/"
                                                data-ol-has-click-handler=""
                                              >
                                                Use Cases
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Case Studies"
                                                className="leading-6"
                                                href="https://neo4j.com/case-studies/"
                                                data-ol-has-click-handler=""
                                              >
                                                Case Studies
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Customers"
                                                className="leading-6"
                                                href="https://neo4j.com/customers/"
                                                data-ol-has-click-handler=""
                                              >
                                                Customers
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Partners"
                                                className="leading-6"
                                                href="https://neo4j.com/partners/"
                                                data-ol-has-click-handler=""
                                              >
                                                Partners
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Professional Services"
                                                className="leading-6"
                                                href="https://neo4j.com/professional-services/"
                                                data-ol-has-click-handler=""
                                              >
                                                Professional Services
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        {/* <!-- About column --> */}
                                        <div className="cell small-12 medium-2 flex flex-col gap-y-3">
                                          <div className="uppercase font-bold">
                                            About
                                          </div>
                                          <ul className="list-none m-0">
                                            <li>
                                              <a
                                                data-l="Company"
                                                className="leading-6"
                                                href="https://neo4j.com/company/"
                                                data-ol-has-click-handler=""
                                              >
                                                Company
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Newsroom"
                                                className="leading-6"
                                                href="https://neo4j.com/news/"
                                                data-ol-has-click-handler=""
                                              >
                                                Newsroom
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Awards and Honors"
                                                className="leading-6"
                                                href="https://neo4j.com/awards/"
                                                data-ol-has-click-handler=""
                                              >
                                                Awards and Honors
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Careers"
                                                className="leading-6"
                                                href="https://neo4j.com/careers/"
                                                data-ol-has-click-handler=""
                                              >
                                                Careers
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Leadership"
                                                className="leading-6"
                                                href="https://neo4j.com/leadership/"
                                                data-ol-has-click-handler=""
                                              >
                                                Leadership
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-l="Support"
                                                className="leading-6"
                                                href="https://support.neo4j.com/?_ga=2.72918803.1607265624.1649450763-1148030502.1649450763"
                                                target="_blank"
                                                data-ol-has-click-handler=""
                                              >
                                                Support
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        {/* <!-- Contact us column --> */}
                                        <div className="cell small-12 medium-3 flex flex-col gap-y-3">
                                          <div className="uppercase font-bold">
                                            <a
                                              data-l="Contact Us"
                                              href="https://neo4j.com/contact-us/?ref=footer"
                                              data-ol-has-click-handler=""
                                            >
                                              Contact Us →
                                            </a>
                                          </div>
                                          <div>
                                            <ul className="list-none m-0">
                                              <li className="leading-6">
                                                US:{' '}
                                                <a
                                                  data-l="US phone"
                                                  href="tel:1-855-636-4532"
                                                  data-ol-has-click-handler=""
                                                >
                                                  1-855-636-4532
                                                </a>
                                              </li>
                                              <li className="leading-6">
                                                Sweden:{' '}
                                                <a
                                                  data-l="+46 171 480 113 phone"
                                                  href="tel:+46 171 480 113"
                                                  data-ol-has-click-handler=""
                                                >
                                                  +46 171 480 113
                                                </a>
                                              </li>
                                              <li className="leading-6">
                                                UK:{' '}
                                                <a
                                                  data-l="UK phone"
                                                  href="tel:+44 20 3868 3223"
                                                  data-ol-has-click-handler=""
                                                >
                                                  +44 20 3868 3223
                                                </a>
                                              </li>
                                              <li className="leading-6">
                                                France:{' '}
                                                <a
                                                  data-l="France phone"
                                                  href="tel:+33 (0) 1 73 23 56 07"
                                                  data-ol-has-click-handler=""
                                                >
                                                  +33 (0) 1 73 23 56 07
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                          <div id="social-icons">
                                            <a
                                              data-l="linkedin icon"
                                              href="https://www.linkedin.com/company/neo4j"
                                              title="Neo4j on LinkedIn"
                                              target="_blank"
                                              rel="noopener"
                                              data-ol-has-click-handler=""
                                            >
                                              <div className="bg-charcoal rounded-full p-2 mr-1 inline-flex justify-center">
                                                <span className="n-icon n-icon-linkedin n-icon-white"></span>
                                              </div>
                                            </a>

                                            <a
                                              data-l="twitter icon"
                                              href="https://twitter.com/neo4j"
                                              title="Neo4j on Twitter"
                                              target="_blank"
                                              rel="noopener"
                                              data-ol-has-click-handler=""
                                            >
                                              <div className="bg-charcoal rounded-full p-2 mr-1 inline-flex justify-center">
                                                <span className="n-icon n-icon-twitter n-icon-white"></span>
                                              </div>
                                            </a>

                                            <a
                                              data-l="youtube icon"
                                              href="https://youtube.com/neo4j"
                                              title="Neo4j on YouTube"
                                              target="_blank"
                                              rel="noopener"
                                              data-ol-has-click-handler=""
                                            >
                                              <div className="bg-charcoal rounded-full p-2 mr-1 inline-flex justify-center">
                                                <span className="n-icon n-icon-youtube n-icon-white"></span>
                                              </div>
                                            </a>

                                            <a
                                              data-l="facebook icon"
                                              href="https://www.facebook.com/neo4j.graph.database"
                                              title="Neo4j on Facebook"
                                              target="_blank"
                                              rel="noopener"
                                              data-ol-has-click-handler=""
                                            >
                                              <div className="bg-charcoal rounded-full p-2 mr-1 inline-flex justify-center">
                                                <span className="n-icon n-icon-facebook n-icon-white"></span>
                                              </div>
                                            </a>

                                            <a
                                              data-l="community icon"
                                              href="https://community.neo4j.com/?_ga=2.211082773.103657357.1649778623-483656077.1649778623"
                                              title="Neo4j on Community Forum"
                                              target="_blank"
                                              rel="noopener"
                                              data-ol-has-click-handler=""
                                            >
                                              <div className="bg-charcoal rounded-full p-2 inline-flex justify-center">
                                                <span className="n-icon n-icon-conversation-text n-icon-white"></span>
                                              </div>
                                            </a>

                                            <a
                                              data-l="github icon"
                                              href="https://github.com/neo4j"
                                              title="Neo4j on Github"
                                              target="_blank"
                                              rel="noopener"
                                              data-ol-has-click-handler=""
                                            >
                                              <div className="bg-charcoal rounded-full p-2 inline-flex justify-center">
                                                <span className="n-icon n-icon-github n-icon-white"></span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="grid-x grid-padding-y">
                                        <div className="cell small-12 medium-3">
                                          <div>
                                            <span id="footer-copyright-year">
                                              &copy; 2022
                                            </span>{' '}
                                            Neo4j, Inc.
                                          </div>
                                          <div>
                                            <a
                                              data-l="Terms"
                                              href="https://neo4j.com/terms/"
                                              data-ol-has-click-handler=""
                                            >
                                              Terms
                                            </a>
                                            |
                                            <a
                                              data-l="Privacy"
                                              href="https://neo4j.com/privacy-policy/"
                                              data-ol-has-click-handler=""
                                            >
                                              Privacy
                                            </a>
                                            |
                                            <a
                                              data-l="Sitemap"
                                              href="https://neo4j.com/sitemap/"
                                              data-ol-has-click-handler=""
                                            >
                                              Sitemap
                                            </a>
                                          </div>
                                        </div>
                                        <div className="cell small-12 medium-9">
                                          Neo4j&reg;, Neo Technology&reg;,
                                          Cypher&reg;, Neo4j&reg; Bloom&trade;
                                          and Neo4j&reg; AuraDB&trade; are
                                          registered trademarks of Neo4j, Inc.
                                          All other marks are owned by their
                                          respective companies.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </footer>
                              </div>
                            </div>
                          </div>
                          <div className="lia-quilt-row lia-quilt-row-footer-main">
                            <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-footer-main-content lia-mark-empty"></div>
                          </div>
                          <div className="lia-quilt-row lia-quilt-row-footer-bottom">
                            <div className="lia-quilt-column lia-quilt-column-24 lia-quilt-column-single lia-quilt-column-footer-bottom-content">
                              <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
                                {/* <li:common-scroll-to className="lia-component-common-widget-scroll-to" li-bindable="" li-instance="0" componentId="common.widget.scroll-to" mode="default"> */}
                                <li
                                  className="lia-component-common-widget-scroll-to"
                                  li-bindable=""
                                  li-instance="0"
                                >
                                  {' '}
                                </li>

                                <div className="LithiumLogo lia-component-common-widget-lithium-logo">
                                  <a
                                    className="lia-link-navigation lia-powered-by-khoros-logo"
                                    title="Social CRM &amp; Community Solutions Powered by Khoros"
                                    target="_blank"
                                    rel="noopener"
                                    id="link_31"
                                    href="https://khoros.com/powered-by-khoros"
                                  >
                                    <img
                                      className="lia-img-powered-by-khoros lia-fa-powered lia-fa-by lia-fa-khoros"
                                      title="Social CRM &amp; Community Solutions Powered by Khoros"
                                      alt="Powered by Khoros"
                                      aria-label="Social CRM &amp; Community Solutions Powered by Khoros"
                                      id="display_10"
                                      src="https://community.neo4j.com/skins/images/6A1D18664BE0C1BB806E6B3D20CEDC6A/responsive_peak/images/powered_by_khoros.svg"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </center> */}
      </div>
    </div>
  );
}

export default App;