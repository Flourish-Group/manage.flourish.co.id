import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const publicPath = process.env.ASSET_URL || '/assets/';

app.use(publicPath, express.static('assets'));

export const renderDashboardIndexPage = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <!--begin::Head-->
            <head><base href="/">
                <title>Metronic - the world's #1 selling Bootstrap Admin Theme Ecosystem for HTML, Vue, React, Angular &amp; Laravel by Keenthemes</title>
                <meta charset="utf-8" />
                <meta name="description" content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free." />
                <meta name="keywords" content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular &amp; Laravel Admin Dashboard Theme" />
                <meta property="og:url" content="https://keenthemes.com/metronic" />
                <meta property="og:site_name" content="Keenthemes | Metronic" />
                <link rel="canonical" href="https://preview.keenthemes.com/metronic8" />
                <link rel="shortcut icon" href="${publicPath}media/logos/favicon.ico" />
                <!--begin::Fonts-->
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
                <!--end::Fonts-->
                <!--begin::Page Vendor Stylesheets(used by this page)-->
                <link href="${publicPath}plugins/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css" />
                <link href="${publicPath}plugins/custom/vis-timeline/vis-timeline.bundle.css" rel="stylesheet" type="text/css" />
                <!--end::Page Vendor Stylesheets-->
                <!--begin::Global Stylesheets Bundle(used by all pages)-->
                <link href="${publicPath}plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
                <link href="${publicPath}css/style.bundle.css" rel="stylesheet" type="text/css" />
                <!--end::Global Stylesheets Bundle-->
            </head>
            <!--end::Head-->
            <!--begin::Body-->
            <body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled aside-enabled aside-fixed" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
                <!--begin::Main-->
                <!--begin::Root-->
                <div class="d-flex flex-column flex-root">
                    <!--begin::Page-->
                    <div class="page d-flex flex-row flex-column-fluid">
                        <!--begin::Aside-->
                        <div id="kt_aside" class="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
                            <!--begin::Brand-->
                            <div class="aside-logo flex-column-auto" id="kt_aside_logo">
                                <!--begin::Logo-->
                                <a href="#">
                                    <img alt="Logo" src="${publicPath}media/logos/logo-1-dark.svg" class="h-25px logo" />
                                </a>
                                <!--end::Logo-->
                                <!--begin::Aside toggler-->
                                <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
                                    <span class="svg-icon svg-icon-1 rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor" />
                                            <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                </div>
                                <!--end::Aside toggler-->
                            </div>
                            <!--end::Brand-->
                            <!--begin::Aside menu-->
                            <div class="aside-menu flex-column-fluid">
                                <!--begin::Aside Menu-->
                                <div class="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                                    <!--begin::Menu-->
                                    <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">
                                        <div data-kt-menu-trigger="click" class="menu-item here show menu-accordion">
											<a class="menu-link" href="#">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                            <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                            <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                            <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Dashboards</span>
                                            </a>
                                            
                                        </div>
                                        <div class="menu-item">
                                            <div class="menu-content pt-8 pb-2">
                                                <span class="menu-section text-muted text-uppercase fs-8 ls-1">Master Pages</span>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z" fill="currentColor" />
                                                            <path d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Pages</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion menu-active-bg">
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <a class="menu-link" href="#">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Homepages</span>
                                                    </a>
                                                </div>
												<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <a class="menu-link" href="#">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Expertise</span>
                                                    </a>
                                                </div>
												<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <a class="menu-link" href="#">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">About</span>
                                                    </a>
                                                </div>
												<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <a class="menu-link" href="#">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Work</span>
                                                    </a>
                                                </div>
												<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <a class="menu-link" href="#">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Journal</span>
                                                    </a>
                                                </div>
												<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <a class="menu-link" href="#">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Contact</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="menu-item">
                                            <div class="menu-content pt-8 pb-2">
                                                <span class="menu-section text-muted text-uppercase fs-8 ls-1">Master Data</span>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen002.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor" />
                                                            <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Projects</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/list.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">My Projects</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/project.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">View Project</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/targets.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Targets</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/budget.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Budget</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/users.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Users</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/files.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Files</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/activity.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Activity</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/projects/settings.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm001.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z" fill="currentColor" />
                                                            <path d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">eCommerce</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Catalog</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/products.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Products</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/categories.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Categories</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-product.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Add Product</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Edit Product</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/add-category.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Add Category</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/catalog/edit-category.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Edit Category</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Sales</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/sales/listing.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Orders Listing</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/sales/details.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Order Details</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/sales/add-order.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Add Order</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/sales/edit-order.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Edit Order</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Customers</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/customers/listing.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Customer Listing</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/customers/details.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Customer Details</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Reports</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/reports/view.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Products Viewed</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/reports/sales.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Sales</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/reports/returns.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Returns</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/reports/customer-orders.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Customer Orders</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/ecommerce/reports/shipping.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Shipping</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/ecommerce/settings.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/graphs/gra006.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Support Center</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/support-center/overview.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Overview</span>
                                                    </a>
                                                </div>
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Tickets</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/support-center/tickets/list.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Tickets List</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/support-center/tickets/view.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">View Ticket</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Tutorials</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/support-center/tutorials/list.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Tutorials List</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/support-center/tutorials/post.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Tutorial Post</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/support-center/faq.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">FAQ</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/support-center/licenses.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Licenses</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/support-center/contact.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Contact Us</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen051.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                                            <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">User Management</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Users</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/user-management/users/list.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Users List</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/user-management/users/view.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">View User</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Roles</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/user-management/roles/list.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Roles List</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/user-management/roles/view.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">View Role</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/user-management/permissions.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Permissions</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/electronics/elc002.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z" fill="currentColor" />
                                                            <path d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Contacts</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/contacts/getting-started.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Getting Started</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/contacts/add-contact.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Add Contact</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/contacts/edit-contact.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Edit Contact</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/contacts/view-contact.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">View Contact</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Subscriptions</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/subscriptions/getting-started.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Getting Started</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/subscriptions/list.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Subscription List</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/subscriptions/add.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Add Subscription</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/subscriptions/view.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">View Subscription</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                                                            <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Customers</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/customers/getting-started.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Getting Started</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/customers/list.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Customer Listing</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/customers/view.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Customer Details</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/files/fil025.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor" />
                                                            <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor" />
                                                            <path d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">File Manager</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/file-manager/folders.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Folders</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/file-manager/files.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Files</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/file-manager/blank.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Blank Directory</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/file-manager/settings.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Settings</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/finance/fin002.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Invoice Manager</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                                    <span class="menu-link">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">View Invoices</span>
                                                        <span class="menu-arrow"></span>
                                                    </span>
                                                    <div class="menu-sub menu-sub-accordion menu-active-bg">
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-1.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Invoice 1</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-2.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Invoice 2</span>
                                                            </a>
                                                        </div>
                                                        <div class="menu-item">
                                                            <a class="menu-link" href="../../demo1/dist/apps/invoices/view/invoice-3.html">
                                                                <span class="menu-bullet">
                                                                    <span class="bullet bullet-dot"></span>
                                                                </span>
                                                                <span class="menu-title">Invoice 3</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/invoices/create.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Create Invoice</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/communication/com011.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                                                            <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Inbox</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/inbox/listing.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Messages</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/inbox/compose.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Compose</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/inbox/reply.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">View &amp; Reply</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                                                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Chat</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/chat/private.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Private Chat</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/chat/group.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Group Chat</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/apps/chat/drawer.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Drawer Chat</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menu-item">
                                            <a class="menu-link" href="../../demo1/dist/apps/calendar.html">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                                            <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                                                            <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Calendar</span>
                                            </a>
                                        </div>
                                        <div class="menu-item">
                                            <div class="menu-content pt-8 pb-0">
                                                <span class="menu-section text-muted text-uppercase fs-8 ls-1">Layout</span>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/abstract/abs042.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Toolbars</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion menu-active-bg">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/toolbars/toolbar-1.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Toolbar 1</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/toolbars/toolbar-2.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Toolbar 2</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/toolbars/toolbar-3.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Toolbar 3</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/toolbars/toolbar-4.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Toolbar 4</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/toolbars/toolbar-5.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Toolbar 5</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/toolbars/no-toolbar.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">No Toolbar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                            <span class="menu-link">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen009.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M21 22H14C13.4 22 13 21.6 13 21V3C13 2.4 13.4 2 14 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                                            <path d="M10 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H10C10.6 2 11 2.4 11 3V21C11 21.6 10.6 22 10 22Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Aside</span>
                                                <span class="menu-arrow"></span>
                                            </span>
                                            <div class="menu-sub menu-sub-accordion menu-active-bg">
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/aside/light.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Light Skin</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/aside/font-icons.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Font Icons</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/aside/minimized.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Minimized</span>
                                                    </a>
                                                </div>
                                                <div class="menu-item">
                                                    <a class="menu-link" href="../../demo1/dist/layouts/aside/only-header.html">
                                                        <span class="menu-bullet">
                                                            <span class="bullet bullet-dot"></span>
                                                        </span>
                                                        <span class="menu-title">Only Header</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="menu-item">
                                            <a class="menu-link" href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/general/gen019.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Layout Builder</span>
                                            </a>
                                        </div>
                                        <div class="menu-item">
                                            <div class="menu-content">
                                                <div class="separator mx-1 my-4"></div>
                                            </div>
                                        </div>
                                        <div class="menu-item">
                                            <a class="menu-link" href="../../demo1/dist/documentation/getting-started/changelog.html">
                                                <span class="menu-icon">
                                                    <!--begin::Svg Icon | path: icons/duotune/coding/cod003.svg-->
                                                    <span class="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </span>
                                                <span class="menu-title">Changelog v8.0.38</span>
                                            </a>
                                        </div>
                                    </div>
                                    <!--end::Menu-->
                                </div>
                                <!--end::Aside Menu-->
                            </div>
                            <!--end::Aside menu-->
                            <!--begin::Footer-->
                            <div class="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
                                <a href="../../demo1/dist/documentation/getting-started.html" class="btn btn-custom btn-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">
                                    <span class="btn-label">Docs &amp; Components</span>
                                    <!--begin::Svg Icon | path: icons/duotune/general/gen005.svg-->
                                    <span class="svg-icon btn-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor" />
                                            <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor" />
                                            <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor" />
                                            <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor" />
                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                </a>
                            </div>
                            <!--end::Footer-->
                        </div>
                        <!--end::Aside-->
                        <!--begin::Wrapper-->
                        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                            <!--begin::Header-->
                            <div id="kt_header" style="" class="header align-items-stretch">
                                <!--begin::Container-->
                                <div class="container-fluid d-flex align-items-stretch justify-content-between">
                                    <!--begin::Aside mobile toggle-->
                                    <div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show aside menu">
                                        <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                                            <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
                                            <span class="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            <!--end::Svg Icon-->
                                        </div>
                                    </div>
                                    <!--end::Aside mobile toggle-->
                                    <!--begin::Mobile logo-->
                                    <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                                        <a href="../../demo1/dist/index.html" class="d-lg-none">
                                            <img alt="Logo" src="${publicPath}media/logos/logo-2.svg" class="h-30px" />
                                        </a>
                                    </div>
                                    <!--end::Mobile logo-->
                                    <!--begin::Wrapper-->
                                    <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                                        <!--begin::Navbar-->
                                        <div class="d-flex align-items-stretch" id="kt_header_nav">
                                            
                                        </div>
                                        <!--end::Navbar-->
                                        <!--begin::Toolbar wrapper-->
                                        <div class="d-flex align-items-stretch flex-shrink-0">
                                            <!--begin::Search-->
                                            <div class="d-flex align-items-stretch ms-1 ms-lg-3">
                                                <!--begin::Search-->
                                                <div id="kt_header_search" class="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                                                    
                                                    <!--begin::Menu-->
                                                    <div data-kt-search-element="content" class="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
                                                        <!--begin::Wrapper-->
                                                        <div data-kt-search-element="wrapper">
                                                            <!--begin::Form-->
                                                            <form data-kt-search-element="form" class="w-100 position-relative mb-3" autocomplete="off">
                                                                <!--begin::Icon-->
                                                                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                                                <span class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                                <!--end::Icon-->
                                                                <!--begin::Input-->
                                                                <input type="text" class="search-input form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
                                                                <!--end::Input-->
                                                                <!--begin::Spinner-->
                                                                <span class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                                                                    <span class="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                                                                </span>
                                                                <!--end::Spinner-->
                                                                <!--begin::Reset-->
                                                                <span class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
                                                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                                                    <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    <!--end::Svg Icon-->
                                                                </span>
                                                                <!--end::Reset-->
                                                                <!--begin::Toolbar-->
                                                                <div class="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                                                                    <!--begin::Preferences toggle-->
                                                                    <div data-kt-search-element="preferences-show" class="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
                                                                        <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                                                        <span class="svg-icon svg-icon-1">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor" />
                                                                                <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        <!--end::Svg Icon-->
                                                                    </div>
                                                                    <!--end::Preferences toggle-->
                                                                    <!--begin::Advanced search toggle-->
                                                                    <div data-kt-search-element="advanced-options-form-show" class="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
                                                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                                                                        <span class="svg-icon svg-icon-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        <!--end::Svg Icon-->
                                                                    </div>
                                                                    <!--end::Advanced search toggle-->
                                                                </div>
                                                                <!--end::Toolbar-->
                                                            </form>
                                                            <!--end::Form-->
                                                            <!--begin::Separator-->
                                                            <div class="separator border-gray-200 mb-6"></div>
                                                            <!--end::Separator-->
                                                            <!--begin::Recently viewed-->
                                                            <div data-kt-search-element="results" class="d-none">
                                                                <!--begin::Items-->
                                                                <div class="scroll-y mh-200px mh-lg-350px">
                                                                    <!--begin::Category title-->
                                                                    <h3 class="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
                                                                    <!--end::Category title-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <img src="${publicPath}media/avatars/300-6.jpg" alt="" />
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Karina Clark</span>
                                                                            <span class="fs-7 fw-bold text-muted">Marketing Manager</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <img src="${publicPath}media/avatars/300-2.jpg" alt="" />
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Olivia Bold</span>
                                                                            <span class="fs-7 fw-bold text-muted">Software Engineer</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <img src="${publicPath}media/avatars/300-9.jpg" alt="" />
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Ana Clark</span>
                                                                            <span class="fs-7 fw-bold text-muted">UI/UX Designer</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <img src="${publicPath}media/avatars/300-14.jpg" alt="" />
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Nick Pitola</span>
                                                                            <span class="fs-7 fw-bold text-muted">Art Director</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <img src="${publicPath}media/avatars/300-11.jpg" alt="" />
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Edward Kulnic</span>
                                                                            <span class="fs-7 fw-bold text-muted">System Administrator</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Category title-->
                                                                    <h3 class="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                                                                    <!--end::Category title-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <img class="w-20px h-20px" src="${publicPath}media/svg/brand-logos/volicity-9.svg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Company Rbranding</span>
                                                                            <span class="fs-7 fw-bold text-muted">UI Design</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <img class="w-20px h-20px" src="${publicPath}media/svg/brand-logos/tvit.svg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Company Re-branding</span>
                                                                            <span class="fs-7 fw-bold text-muted">Web Development</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <img class="w-20px h-20px" src="${publicPath}media/svg/misc/infography.svg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Business Analytics App</span>
                                                                            <span class="fs-7 fw-bold text-muted">Administration</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <img class="w-20px h-20px" src="${publicPath}media/svg/brand-logos/leaf.svg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">EcoLeaf App Launch</span>
                                                                            <span class="fs-7 fw-bold text-muted">Marketing</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <img class="w-20px h-20px" src="${publicPath}media/svg/brand-logos/tower.svg" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column justify-content-start fw-bold">
                                                                            <span class="fs-6 fw-bold">Tower Group Website</span>
                                                                            <span class="fs-7 fw-bold text-muted">Google Adwords</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Category title-->
                                                                    <h3 class="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                                                                    <!--end::Category title-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/general/gen005.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor" />
                                                                                        <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor" />
                                                                                        <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor" />
                                                                                        <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor" />
                                                                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <span class="fs-6 fw-bold">Si-Fi Project by AU Themes</span>
                                                                            <span class="fs-7 fw-bold text-muted">#45670</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                                                                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                                                                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                                                                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <span class="fs-6 fw-bold">Shopix Mobile App Planning</span>
                                                                            <span class="fs-7 fw-bold text-muted">#45690</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/communication/com012.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                                                                                        <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                                                                                        <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <span class="fs-6 fw-bold">Finance Monitoring SAAS Discussion</span>
                                                                            <span class="fs-7 fw-bold text-muted">#21090</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/communication/com006.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="currentColor" />
                                                                                        <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <span class="fs-6 fw-bold">Dashboard Analitics Launch</span>
                                                                            <span class="fs-7 fw-bold text-muted">#34560</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </a>
                                                                    <!--end::Item-->
                                                                </div>
                                                                <!--end::Items-->
                                                            </div>
                                                            <!--end::Recently viewed-->
                                                            <!--begin::Recently viewed-->
                                                            <div class="mb-5" data-kt-search-element="main">
                                                                <!--begin::Heading-->
                                                                <div class="d-flex flex-stack fw-bold mb-4">
                                                                    <!--begin::Label-->
                                                                    <span class="text-muted fs-6 me-2">Recently Searched:</span>
                                                                    <!--end::Label-->
                                                                </div>
                                                                <!--end::Heading-->
                                                                <!--begin::Items-->
                                                                <div class="scroll-y mh-200px mh-lg-325px">
                                                                    <!--begin::Item-->
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/electronics/elc004.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M15 17H9V20H15V17Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">BoomApp by Keenthemes</a>
                                                                            <span class="fs-7 text-muted fw-bold">#45789</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </div>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/graphs/gra001.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path opacity="0.3" d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z" fill="currentColor" />
                                                                                        <path d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">"Kept API Project Meeting</a>
                                                                            <span class="fs-7 text-muted fw-bold">#84050</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </div>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/graphs/gra006.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">"KPI Monitoring App Launch</a>
                                                                            <span class="fs-7 text-muted fw-bold">#84250</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </div>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/graphs/gra002.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="currentColor" />
                                                                                        <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Project Reference FAQ</a>
                                                                            <span class="fs-7 text-muted fw-bold">#67945</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </div>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/communication/com010.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">"FitPro App Development</a>
                                                                            <span class="fs-7 text-muted fw-bold">#84250</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </div>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/finance/fin001.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Shopix Mobile App</a>
                                                                            <span class="fs-7 text-muted fw-bold">#45690</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </div>
                                                                    <!--end::Item-->
                                                                    <!--begin::Item-->
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        <!--begin::Symbol-->
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">
                                                                                <!--begin::Svg Icon | path: icons/duotune/graphs/gra002.svg-->
                                                                                <span class="svg-icon svg-icon-2 svg-icon-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                        <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="currentColor" />
                                                                                        <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                <!--end::Svg Icon-->
                                                                            </span>
                                                                        </div>
                                                                        <!--end::Symbol-->
                                                                        <!--begin::Title-->
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">"Landing UI Design" Launch</a>
                                                                            <span class="fs-7 text-muted fw-bold">#24005</span>
                                                                        </div>
                                                                        <!--end::Title-->
                                                                    </div>
                                                                    <!--end::Item-->
                                                                </div>
                                                                <!--end::Items-->
                                                            </div>
                                                            <!--end::Recently viewed-->
                                                            <!--begin::Empty-->
                                                            <div data-kt-search-element="empty" class="text-center d-none">
                                                                <!--begin::Icon-->
                                                                <div class="pt-10 pb-10">
                                                                    <!--begin::Svg Icon | path: icons/duotune/files/fil024.svg-->
                                                                    <span class="svg-icon svg-icon-4x opacity-50">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                            <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor" />
                                                                            <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor" />
                                                                            <rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="currentColor" />
                                                                            <path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    <!--end::Svg Icon-->
                                                                </div>
                                                                <!--end::Icon-->
                                                                <!--begin::Message-->
                                                                <div class="pb-15 fw-bold">
                                                                    <h3 class="text-gray-600 fs-5 mb-2">No result found</h3>
                                                                    <div class="text-muted fs-7">Please try again with a different query</div>
                                                                </div>
                                                                <!--end::Message-->
                                                            </div>
                                                            <!--end::Empty-->
                                                        </div>
                                                        <!--end::Wrapper-->
                                                        <!--begin::Preferences-->
                                                        <form data-kt-search-element="advanced-options-form" class="pt-1 d-none">
                                                            <!--begin::Heading-->
                                                            <h3 class="fw-bold text-dark mb-7">Advanced Search</h3>
                                                            <!--end::Heading-->
                                                            <!--begin::Input group-->
                                                            <div class="mb-5">
                                                                <input type="text" class="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="mb-5">
                                                                <!--begin::Radio group-->
                                                                <div class="nav-group nav-group-fluid">
                                                                    <!--begin::Option-->
                                                                    <label>
                                                                        <input type="radio" class="btn-check" name="type" value="has" checked="checked" />
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <!--begin::Option-->
                                                                    <label>
                                                                        <input type="radio" class="btn-check" name="type" value="users" />
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <!--begin::Option-->
                                                                    <label>
                                                                        <input type="radio" class="btn-check" name="type" value="orders" />
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <!--begin::Option-->
                                                                    <label>
                                                                        <input type="radio" class="btn-check" name="type" value="projects" />
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                                <!--end::Radio group-->
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="mb-5">
                                                                <input type="text" name="assignedto" class="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="mb-5">
                                                                <input type="text" name="collaborators" class="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="mb-5">
                                                                <!--begin::Radio group-->
                                                                <div class="nav-group nav-group-fluid">
                                                                    <!--begin::Option-->
                                                                    <label>
                                                                        <input type="radio" class="btn-check" name="attachment" value="has" checked="checked" />
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                    <!--begin::Option-->
                                                                    <label>
                                                                        <input type="radio" class="btn-check" name="attachment" value="any" />
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                                                                    </label>
                                                                    <!--end::Option-->
                                                                </div>
                                                                <!--end::Radio group-->
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="mb-5">
                                                                <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" class="form-select form-select-sm form-select-solid">
                                                                    <option value="next">Within the next</option>
                                                                    <option value="last">Within the last</option>
                                                                    <option value="between">Between</option>
                                                                    <option value="on">On</option>
                                                                </select>
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="row mb-8">
                                                                <!--begin::Col-->
                                                                <div class="col-6">
                                                                    <input type="number" name="date_number" class="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
                                                                </div>
                                                                <!--end::Col-->
                                                                <!--begin::Col-->
                                                                <div class="col-6">
                                                                    <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" class="form-select form-select-sm form-select-solid">
                                                                        <option value="days">Days</option>
                                                                        <option value="weeks">Weeks</option>
                                                                        <option value="months">Months</option>
                                                                        <option value="years">Years</option>
                                                                    </select>
                                                                </div>
                                                                <!--end::Col-->
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Actions-->
                                                            <div class="d-flex justify-content-end">
                                                                <button type="reset" class="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
                                                                <a href="../../demo1/dist/pages/search/horizontal.html" class="btn btn-sm fw-bolder btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                                                            </div>
                                                            <!--end::Actions-->
                                                        </form>
                                                        <!--end::Preferences-->
                                                        <!--begin::Preferences-->
                                                        <form data-kt-search-element="preferences" class="pt-1 d-none">
                                                            <!--begin::Heading-->
                                                            <h3 class="fw-bold text-dark mb-7">Search Preferences</h3>
                                                            <!--end::Heading-->
                                                            <!--begin::Input group-->
                                                            <div class="pb-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Projects</span>
                                                                    <input class="form-check-input" type="checkbox" value="1" checked="checked" />
                                                                </label>
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Targets</span>
                                                                    <input class="form-check-input" type="checkbox" value="1" checked="checked" />
                                                                </label>
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Affiliate Programs</span>
                                                                    <input class="form-check-input" type="checkbox" value="1" />
                                                                </label>
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Referrals</span>
                                                                    <input class="form-check-input" type="checkbox" value="1" checked="checked" />
                                                                </label>
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Input group-->
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Users</span>
                                                                    <input class="form-check-input" type="checkbox" value="1" />
                                                                </label>
                                                            </div>
                                                            <!--end::Input group-->
                                                            <!--begin::Actions-->
                                                            <div class="d-flex justify-content-end pt-7">
                                                                <button type="reset" class="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                                                                <button type="submit" class="btn btn-sm fw-bolder btn-primary">Save Changes</button>
                                                            </div>
                                                            <!--end::Actions-->
                                                        </form>
                                                        <!--end::Preferences-->
                                                    </div>
                                                    <!--end::Menu-->
                                                </div>
                                                <!--end::Search-->
                                            </div>
                                            <!--end::Search-->
                                            
                                            <!--begin::User menu-->
                                            <div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                                                <!--begin::Menu wrapper-->
                                                <div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                                    <img src="${publicPath}media/avatars/300-1.jpg" alt="user" />
                                                </div>
                                                <!--begin::User account menu-->
                                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                                                    <!--begin::Menu item-->
                                                    <div class="menu-item px-3">
                                                        <div class="menu-content d-flex align-items-center px-3">
                                                            <!--begin::Avatar-->
                                                            <div class="symbol symbol-50px me-5">
                                                                <img alt="Logo" src="${publicPath}media/avatars/300-1.jpg" />
                                                            </div>
                                                            <!--end::Avatar-->
                                                            <!--begin::Username-->
                                                            <div class="d-flex flex-column">
                                                                <div class="fw-bolder d-flex align-items-center fs-5">Max Smith
                                                                <span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                                                                <a href="#" class="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                                                            </div>
                                                            <!--end::Username-->
                                                        </div>
                                                    </div>
                                                    <!--end::Menu item-->
                                                    <!--begin::Menu separator-->
                                                    <div class="separator my-2"></div>
                                                    <!--end::Menu separator-->
                                                    <!--begin::Menu item-->
                                                    <div class="menu-item px-5">
                                                        <a href="../../demo1/dist/account/overview.html" class="menu-link px-5">My Profile</a>
                                                    </div>
                                                    <!--end::Menu item-->
													
                                                    <!--begin::Menu item-->
                                                    <div class="menu-item px-5">
                                                        <a href="#" class="menu-link px-5">Sign Out</a>
                                                    </div>
                                                    <!--end::Menu item-->
                                                    <!--begin::Menu separator-->
                                                    <div class="separator my-2"></div>
                                                    <!--end::Menu separator-->
                                                </div>
                                                <!--end::User account menu-->
                                                <!--end::Menu wrapper-->
                                            </div>
                                            <!--end::User menu-->
                                            <!--begin::Header menu toggle-->
                                            <div class="d-flex align-items-center d-lg-none ms-2 me-n3" title="Show header menu">
                                                <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                                                    <!--begin::Svg Icon | path: icons/duotune/text/txt001.svg-->
                                                    <span class="svg-icon svg-icon-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="currentColor" />
                                                            <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                </div>
                                            </div>
                                            <!--end::Header menu toggle-->
                                        </div>
                                        <!--end::Toolbar wrapper-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Container-->
                            </div>
                            <!--end::Header-->
                            <!--begin::Content-->
                            <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                                <!--begin::Toolbar-->
                                <div class="toolbar bg-transparent pt-6 mb-5" id="kt_toolbar">
                                    <!--begin::Container-->
                                    <div id="kt_toolbar_container" class="container-xxl d-flex flex-stack">
                                        <!--begin::Page title-->
                                        <div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex flex-column align-items-start me-3 mb-5 mb-lg-0">
                                            <!--begin::Title-->
                                            <h1 class="d-flex text-dark fw-bolder fs-3 flex-column mb-0">Projects Dashboard
                                            <!--begin::Description-->
                                            <span class="text-muted fs-7 fw-bold mt-2">You have 7
                                            <span class="text-primary fw-bolder">Active Projects</span></span>
                                            <!--end::Description--></h1>
                                            <!--end::Title-->
                                        </div>
                                        <!--end::Page title-->
                                        
                                    </div>
                                    <!--end::Container-->
                                </div>
                                <!--end::Toolbar-->
                                <!--begin::Post-->
                                <div class="post d-flex flex-column-fluid" id="kt_post">
                                    <!--begin::Container-->
                                    <div id="kt_content_container" class="container-xxl">
                                        <!--begin::Row-->
                                        <div class="row g-5 g-xl-10 mb-xl-10">
                                            <!--begin::Col-->
                                            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                                                <!--begin::Card widget 16-->
                                                <div class="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-center h-md-50 mb-5 mb-xl-10" style="background-color: #080655;background-image:url('assets/media/svg/shapes/wave-bg-dark.svg')">
                                                    <!--begin::Header-->
                                                    <div class="card-header pt-5">
                                                        <!--begin::Title-->
                                                        <div class="card-title d-flex flex-column">
                                                            <!--begin::Amount-->
                                                            <span class="fs-2hx fw-bolder text-white me-2 lh-1 ls-n2">69</span>
                                                            <!--end::Amount-->
                                                            <!--begin::Subtitle-->
                                                            <span class="text-white opacity-50 pt-1 fw-bold fs-6">Active Projects</span>
                                                            <!--end::Subtitle-->
                                                        </div>
                                                        <!--end::Title-->
                                                    </div>
                                                    <!--end::Header-->
                                                    <!--begin::Card body-->
                                                    <div class="card-body d-flex align-items-end pt-0">
                                                        <!--begin::Progress-->
                                                        <div class="d-flex align-items-center flex-column mt-3 w-100">
                                                            <div class="d-flex justify-content-between fw-bolder fs-6 text-white opacity-50 w-100 mt-auto mb-2">
                                                                <span>43 Pending</span>
                                                                <span>72%</span>
                                                            </div>
                                                            <div class="h-8px mx-3 w-100 bg-light-danger rounded">
                                                                <div class="bg-danger rounded h-8px" role="progressbar" style="width: 72%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <!--end::Progress-->
                                                    </div>
                                                    <!--end::Card body-->
                                                </div>
                                                <!--end::Card widget 16-->
                                                <!--begin::Card widget 7-->
                                                <div class="card card-flush h-md-50 mb-5 mb-xl-10">
                                                    <!--begin::Header-->
                                                    <div class="card-header pt-5">
                                                        <!--begin::Title-->
                                                        <div class="card-title d-flex flex-column">
                                                            <!--begin::Amount-->
                                                            <span class="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">357</span>
                                                            <!--end::Amount-->
                                                            <!--begin::Subtitle-->
                                                            <span class="text-gray-400 pt-1 fw-bold fs-6">Professionals</span>
                                                            <!--end::Subtitle-->
                                                        </div>
                                                        <!--end::Title-->
                                                    </div>
                                                    <!--end::Header-->
                                                    <!--begin::Card body-->
                                                    <div class="card-body d-flex flex-column justify-content-end pe-0">
                                                        <!--begin::Title-->
                                                        <span class="fs-6 fw-boldest text-gray-800 d-block mb-2">Today’s Heroes</span>
                                                        <!--end::Title-->
                                                        <!--begin::Users group-->
                                                        <div class="symbol-group symbol-hover flex-nowrap">
                                                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                                                                <span class="symbol-label bg-warning text-inverse-warning fw-bolder">A</span>
                                                            </div>
                                                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                                                                <img alt="Pic" src="${publicPath}media/avatars/300-11.jpg" />
                                                            </div>
                                                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                                                                <span class="symbol-label bg-primary text-inverse-primary fw-bolder">S</span>
                                                            </div>
                                                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                                                                <img alt="Pic" src="${publicPath}media/avatars/300-2.jpg" />
                                                            </div>
                                                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                                                                <span class="symbol-label bg-danger text-inverse-danger fw-bolder">P</span>
                                                            </div>
                                                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                                                                <img alt="Pic" src="${publicPath}media/avatars/300-12.jpg" />
                                                            </div>
                                                            <a href="#" class="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                                                                <span class="symbol-label bg-dark text-gray-300 fs-8 fw-bolder">+42</span>
                                                            </a>
                                                        </div>
                                                        <!--end::Users group-->
                                                    </div>
                                                    <!--end::Card body-->
                                                </div>
                                                <!--end::Card widget 7-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                                                <!--begin::Card widget 4-->
                                                <div class="card card-flush h-md-50 mb-5 mb-xl-10">
                                                    <!--begin::Header-->
                                                    <div class="card-header pt-5">
                                                        <!--begin::Title-->
                                                        <div class="card-title d-flex flex-column">
                                                            <!--begin::Info-->
                                                            <div class="d-flex align-items-center">
                                                                <!--begin::Currency-->
                                                                <span class="fs-4 fw-bold text-gray-400 me-1 align-self-start">$</span>
                                                                <!--end::Currency-->
                                                                <!--begin::Amount-->
                                                                <span class="fs-2hx fw-bolder text-dark me-2 lh-1 ls-n2">69,700</span>
                                                                <!--end::Amount-->
                                                                <!--begin::Badge-->
                                                                <span class="badge badge-success fs-base">
                                                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
                                                                <span class="svg-icon svg-icon-5 svg-icon-white ms-n1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                                                                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->2.2%</span>
                                                                <!--end::Badge-->
                                                            </div>
                                                            <!--end::Info-->
                                                            <!--begin::Subtitle-->
                                                            <span class="text-gray-400 pt-1 fw-bold fs-6">Projects Earnings in April</span>
                                                            <!--end::Subtitle-->
                                                        </div>
                                                        <!--end::Title-->
                                                    </div>
                                                    <!--end::Header-->
                                                    <!--begin::Card body-->
                                                    <div class="card-body pt-2 pb-4 d-flex align-items-center">
                                                        <!--begin::Chart-->
                                                        <div class="d-flex flex-center me-5 pt-2">
                                                            <div id="kt_card_widget_17_chart" style="min-width: 70px; min-height: 70px" data-kt-size="70" data-kt-line="11"></div>
                                                        </div>
                                                        <!--end::Chart-->
                                                        <!--begin::Labels-->
                                                        <div class="d-flex flex-column content-justify-center w-100">
                                                            <!--begin::Label-->
                                                            <div class="d-flex fw-bold align-items-center">
                                                                <!--begin::Bullet-->
                                                                <div class="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
                                                                <!--end::Bullet-->
                                                                <!--begin::Label-->
                                                                <div class="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
                                                                <!--end::Label-->
                                                                <!--begin::Stats-->
                                                                <div class="fw-boldest text-gray-700 text-xxl-end">$7,660</div>
                                                                <!--end::Stats-->
                                                            </div>
                                                            <!--end::Label-->
                                                            <!--begin::Label-->
                                                            <div class="d-flex fw-bold align-items-center my-3">
                                                                <!--begin::Bullet-->
                                                                <div class="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
                                                                <!--end::Bullet-->
                                                                <!--begin::Label-->
                                                                <div class="text-gray-500 flex-grow-1 me-4">Mivy App</div>
                                                                <!--end::Label-->
                                                                <!--begin::Stats-->
                                                                <div class="fw-boldest text-gray-700 text-xxl-end">$2,820</div>
                                                                <!--end::Stats-->
                                                            </div>
                                                            <!--end::Label-->
                                                            <!--begin::Label-->
                                                            <div class="d-flex fw-bold align-items-center">
                                                                <!--begin::Bullet-->
                                                                <div class="bullet w-8px h-3px rounded-2 me-3" style="background-color: #E4E6EF"></div>
                                                                <!--end::Bullet-->
                                                                <!--begin::Label-->
                                                                <div class="text-gray-500 flex-grow-1 me-4">Others</div>
                                                                <!--end::Label-->
                                                                <!--begin::Stats-->
                                                                <div class="fw-boldest text-gray-700 text-xxl-end">$45,257</div>
                                                                <!--end::Stats-->
                                                            </div>
                                                            <!--end::Label-->
                                                        </div>
                                                        <!--end::Labels-->
                                                    </div>
                                                    <!--end::Card body-->
                                                </div>
                                                <!--end::Card widget 4-->
                                                <!--begin::List widget 25-->
                                                <div class="card card-flush h-lg-50">
                                                    <!--begin::Header-->
                                                    <div class="card-header pt-5">
                                                        <!--begin::Title-->
                                                        <h3 class="card-title text-gray-800">Highlights</h3>
                                                        <!--end::Title-->
                                                        <!--begin::Toolbar-->
                                                        <div class="card-toolbar d-none">
                                                            <!--begin::Daterangepicker(defined in src/js/layout/app.js)-->
                                                            <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" class="btn btn-sm btn-light d-flex align-items-center px-4">
                                                                <!--begin::Display range-->
                                                                <div class="text-gray-600 fw-bolder">Loading date range...</div>
                                                                <!--end::Display range-->
                                                                <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg-->
                                                                <span class="svg-icon svg-icon-1 ms-2 me-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                                                                        <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                                                                        <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                            </div>
                                                            <!--end::Daterangepicker-->
                                                        </div>
                                                        <!--end::Toolbar-->
                                                    </div>
                                                    <!--end::Header-->
                                                    <!--begin::Body-->
                                                    <div class="card-body pt-5">
                                                        <!--begin::Item-->
                                                        <div class="d-flex flex-stack">
                                                            <!--begin::Section-->
                                                            <div class="text-gray-700 fw-bold fs-6 me-2">Avg. Client Rating</div>
                                                            <!--end::Section-->
                                                            <!--begin::Statistics-->
                                                            <div class="d-flex align-items-senter">
                                                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr094.svg-->
                                                                <span class="svg-icon svg-icon-2 svg-icon-success me-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <rect opacity="0.5" x="16.9497" y="8.46448" width="13" height="2" rx="1" transform="rotate(135 16.9497 8.46448)" fill="currentColor" />
                                                                        <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                                <!--begin::Number-->
                                                                <span class="text-gray-900 fw-boldest fs-6">7.8</span>
                                                                <!--end::Number-->
                                                                <span class="text-gray-400 fw-bolder fs-6">/10</span>
                                                            </div>
                                                            <!--end::Statistics-->
                                                        </div>
                                                        <!--end::Item-->
                                                        <!--begin::Separator-->
                                                        <div class="separator separator-dashed my-3"></div>
                                                        <!--end::Separator-->
                                                        <!--begin::Item-->
                                                        <div class="d-flex flex-stack">
                                                            <!--begin::Section-->
                                                            <div class="text-gray-700 fw-bold fs-6 me-2">Avg. Quotes</div>
                                                            <!--end::Section-->
                                                            <!--begin::Statistics-->
                                                            <div class="d-flex align-items-senter">
                                                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr093.svg-->
                                                                <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <rect opacity="0.5" x="7.05026" y="15.5355" width="13" height="2" rx="1" transform="rotate(-45 7.05026 15.5355)" fill="currentColor" />
                                                                        <path d="M9.17158 14.0284L9.17158 8.11091C9.17158 7.52513 8.6967 7.05025 8.11092 7.05025C7.52513 7.05025 7.05026 7.52512 7.05026 8.11091L7.05026 15.9497C7.05026 16.502 7.49797 16.9497 8.05026 16.9497L15.8891 16.9497C16.4749 16.9497 16.9498 16.4749 16.9498 15.8891C16.9498 15.3033 16.4749 14.8284 15.8891 14.8284L9.97158 14.8284C9.52975 14.8284 9.17158 14.4703 9.17158 14.0284Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                                <!--begin::Number-->
                                                                <span class="text-gray-900 fw-boldest fs-6">730</span>
                                                                <!--end::Number-->
                                                            </div>
                                                            <!--end::Statistics-->
                                                        </div>
                                                        <!--end::Item-->
                                                        <!--begin::Separator-->
                                                        <div class="separator separator-dashed my-3"></div>
                                                        <!--end::Separator-->
                                                        <!--begin::Item-->
                                                        <div class="d-flex flex-stack">
                                                            <!--begin::Section-->
                                                            <div class="text-gray-700 fw-bold fs-6 me-2">Avg. Agent Earnings</div>
                                                            <!--end::Section-->
                                                            <!--begin::Statistics-->
                                                            <div class="d-flex align-items-senter">
                                                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr094.svg-->
                                                                <span class="svg-icon svg-icon-2 svg-icon-success me-2">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                        <rect opacity="0.5" x="16.9497" y="8.46448" width="13" height="2" rx="1" transform="rotate(135 16.9497 8.46448)" fill="currentColor" />
                                                                        <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                                <!--begin::Number-->
                                                                <span class="text-gray-900 fw-boldest fs-6">$2,309</span>
                                                                <!--end::Number-->
                                                            </div>
                                                            <!--end::Statistics-->
                                                        </div>
                                                        <!--end::Item-->
                                                    </div>
                                                    <!--end::Body-->
                                                </div>
                                                <!--end::LIst widget 25-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-lg-12 col-xl-12 col-xxl-6 mb-5 mb-xl-0">
                                                <!--begin::Timeline widget 3-->
                                                <div class="card h-md-100">
                                                    <!--begin::Header-->
                                                    <div class="card-header border-0 pt-5">
                                                        <h3 class="card-title align-items-start flex-column">
                                                            <span class="card-label fw-bolder text-dark">What’s up Today</span>
                                                            <span class="text-muted mt-1 fw-bold fs-7">Total 424,567 deliveries</span>
                                                        </h3>
                                                        <!--begin::Toolbar-->
                                                        <div class="card-toolbar">
                                                            <a href="#" class="btn btn-sm btn-light">Report Cecnter</a>
                                                        </div>
                                                        <!--end::Toolbar-->
                                                    </div>
                                                    <!--end::Header-->
                                                    <!--begin::Body-->
                                                    <div class="card-body pt-7 px-0">
                                                        <!--begin::Nav-->
                                                        <ul class="nav nav-stretch nav-pills nav-pills-custom nav-pills-active-custom d-flex justify-content-between mb-8 px-5">
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_1">
                                                                    <span class="fs-7 fw-bold">Fr</span>
                                                                    <span class="fs-6 fw-bolder">20</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_2">
                                                                    <span class="fs-7 fw-bold">Sa</span>
                                                                    <span class="fs-6 fw-bolder">21</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_3">
                                                                    <span class="fs-7 fw-bold">Su</span>
                                                                    <span class="fs-6 fw-bolder">22</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger active" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_4">
                                                                    <span class="fs-7 fw-bold">Tu</span>
                                                                    <span class="fs-6 fw-bolder">23</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_5">
                                                                    <span class="fs-7 fw-bold">Tu</span>
                                                                    <span class="fs-6 fw-bolder">24</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_6">
                                                                    <span class="fs-7 fw-bold">We</span>
                                                                    <span class="fs-6 fw-bolder">25</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_7">
                                                                    <span class="fs-7 fw-bold">Th</span>
                                                                    <span class="fs-6 fw-bolder">26</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_8">
                                                                    <span class="fs-7 fw-bold">Fri</span>
                                                                    <span class="fs-6 fw-bolder">27</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_9">
                                                                    <span class="fs-7 fw-bold">Sa</span>
                                                                    <span class="fs-6 fw-bolder">28</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_10">
                                                                    <span class="fs-7 fw-bold">Su</span>
                                                                    <span class="fs-6 fw-bolder">29</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                            <!--begin::Nav item-->
                                                            <li class="nav-item p-0 ms-0">
                                                                <!--begin::Date-->
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger" data-bs-toggle="tab" href="#kt_timeline_widget_3_tab_content_11">
                                                                    <span class="fs-7 fw-bold">Mo</span>
                                                                    <span class="fs-6 fw-bolder">30</span>
                                                                </a>
                                                                <!--end::Date-->
                                                            </li>
                                                            <!--end::Nav item-->
                                                        </ul>
                                                        <!--end::Nav-->
                                                        <!--begin::Tab Content (ishlamayabdi)-->
                                                        <div class="tab-content mb-2 px-9">
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_1">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_2">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_3">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade show active" id="kt_timeline_widget_3_tab_content_4">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_5">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_6">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_7">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_8">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_9">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-success"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_10">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-warning"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                            <!--begin::Tap pane-->
                                                            <div class="tab-pane fade" id="kt_timeline_widget_3_tab_content_11">
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">16:30 - 17:00
                                                                        <span class="text-gray-400 fw-bold fs-7">PM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Dashboard UI/UX Design Review</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Mark Morris</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-danger"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">10:20 - 11:00
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">Marketing Campaign Discussion</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Peter Marcus</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                                <!--begin::Wrapper-->
                                                                <div class="d-flex align-items-center mb-6">
                                                                    <!--begin::Bullet-->
                                                                    <span data-kt-element="bullet" class="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-primary"></span>
                                                                    <!--end::Bullet-->
                                                                    <!--begin::Info-->
                                                                    <div class="flex-grow-1 me-5">
                                                                        <!--begin::Time-->
                                                                        <div class="text-gray-800 fw-bold fs-2">12:00 - 13:40
                                                                        <span class="text-gray-400 fw-bold fs-7">AM</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Description-->
                                                                        <div class="text-gray-700 fw-bold fs-6">9 Degree Project Estimation Meeting</div>
                                                                        <!--end::Description-->
                                                                        <!--begin::Link-->
                                                                        <div class="text-gray-400 fw-bold fs-7">Lead by
                                                                        <!--begin::Name-->
                                                                        <a href="#" class="text-primary opacity-75-hover fw-bold">Lead by Bob</a>
                                                                        <!--end::Name--></div>
                                                                        <!--end::Link-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Wrapper-->
                                                            </div>
                                                            <!--end::Tap pane-->
                                                        </div>
                                                        <!--end::Tab Content-->
                                                        <!--begin::Action-->
                                                        <div class="float-end d-none">
                                                            <a href="#" class="btn btn-sm btn-light me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">Add Lesson</a>
                                                            <a href="#" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Call Sick for Today</a>
                                                        </div>
                                                        <!--end::Action-->
                                                    </div>
                                                    <!--end: Card Body-->
                                                </div>
                                                <!--end::Timeline widget 3-->
                                                <!--begin::Timeline widget 3-->
                                                <div class="card card-flush d-none h-md-100">
                                                    <!--begin::Card header-->
                                                    <div class="card-header mt-6">
                                                        <!--begin::Card title-->
                                                        <div class="card-title flex-column">
                                                            <h3 class="fw-bolder mb-1">What's on the road?</h3>
                                                            <div class="fs-6 text-gray-400">Total 482 participants</div>
                                                        </div>
                                                        <!--end::Card title-->
                                                        <!--begin::Card toolbar-->
                                                        <div class="card-toolbar">
                                                            <!--begin::Select-->
                                                            <select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-solid form-select-sm fw-bolder w-100px">
                                                                <option value="1" selected="selected">Options</option>
                                                                <option value="2">Option 1</option>
                                                                <option value="3">Option 2</option>
                                                                <option value="4">Option 3</option>
                                                            </select>
                                                            <!--end::Select-->
                                                        </div>
                                                        <!--end::Card toolbar-->
                                                    </div>
                                                    <!--end::Card header-->
                                                    <!--begin::Card body-->
                                                    <div class="card-body p-0">
                                                        <!--begin::Dates-->
                                                        <ul class="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2 ms-4">
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_0">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Fr</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">20</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_1">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Sa</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">21</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_2">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Su</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">22</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger active" data-bs-toggle="tab" href="#kt_schedule_day_3">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Mo</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">23</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_4">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Tu</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">24</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_5">
                                                                    <span class="text-gray-400 fs-7 fw-bold">We</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">25</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_6">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Th</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">26</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_7">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Fr</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">27</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_8">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Sa</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">28</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_9">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Su</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">29</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_10">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Mo</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">30</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                            <!--begin::Date-->
                                                            <li class="nav-item me-1">
                                                                <a class="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-color-active-white btn-active-danger" data-bs-toggle="tab" href="#kt_schedule_day_11">
                                                                    <span class="text-gray-400 fs-7 fw-bold">Tu</span>
                                                                    <span class="fs-6 text-gray-800 fw-bolder">31</span>
                                                                </a>
                                                            </li>
                                                            <!--end::Date-->
                                                        </ul>
                                                        <!--end::Dates-->
                                                        <!--begin::Tab Content-->
                                                        <div class="tab-content px-9">
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_0" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Terry Robins</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">11:00 - 11:45
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Naomi Hayabusa</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">11:00 - 11:45
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Project Review &amp; Testing</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Terry Robins</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_1" class="tab-pane fade show active">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">16:30 - 17:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Karina Clarke</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">9:00 - 10:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Project Review &amp; Testing</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Sean Bean</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">9:00 - 10:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">David Stevenson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_2" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">16:30 - 17:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Michael Walters</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">11:00 - 11:45
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Kendell Trevor</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">9:00 - 10:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Naomi Hayabusa</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_3" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Kendell Trevor</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">16:30 - 17:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Kendell Trevor</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">13:00 - 14:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Sean Bean</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_4" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">11:00 - 11:45
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">David Stevenson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">16:30 - 17:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Caleb Donaldson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">13:00 - 14:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Karina Clarke</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_5" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">11:00 - 11:45
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Yannis Gloverson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Walter White</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">16:30 - 17:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Naomi Hayabusa</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_6" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">13:00 - 14:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Michael Walters</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Mark Randall</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">10:00 - 11:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">David Stevenson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_7" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">11:00 - 11:45
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Yannis Gloverson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Project Review &amp; Testing</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Sean Bean</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">14:30 - 15:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Peter Marcus</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_8" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Yannis Gloverson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">10:00 - 11:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Bob Harris</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">11:00 - 11:45
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Mark Randall</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_9" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Terry Robins</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">10:00 - 11:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Walter White</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">14:30 - 15:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Kendell Trevor</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_10" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">14:30 - 15:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Karina Clarke</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">16:30 - 17:30
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Walter White</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Peter Marcus</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                            <!--begin::Day-->
                                                            <div id="kt_schedule_day_11" class="tab-pane fade show">
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Karina Clarke</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">12:00 - 13:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">pm</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Terry Robins</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                                <!--begin::Time-->
                                                                <div class="d-flex flex-stack position-relative mt-8">
                                                                    <!--begin::Bar-->
                                                                    <div class="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                                                    <!--end::Bar-->
                                                                    <!--begin::Info-->
                                                                    <div class="fw-bold ms-5 text-gray-600">
                                                                        <!--begin::Time-->
                                                                        <div class="fs-5">10:00 - 11:00
                                                                        <span class="fs-7 text-gray-400 text-uppercase">am</span></div>
                                                                        <!--end::Time-->
                                                                        <!--begin::Title-->
                                                                        <a href="#" class="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                                                                        <!--end::Title-->
                                                                        <!--begin::User-->
                                                                        <div class="text-gray-400">Lead by
                                                                        <a href="#">Yannis Gloverson</a></div>
                                                                        <!--end::User-->
                                                                    </div>
                                                                    <!--end::Info-->
                                                                    <!--begin::Action-->
                                                                    <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                                                                    <!--end::Action-->
                                                                </div>
                                                                <!--end::Time-->
                                                            </div>
                                                            <!--end::Day-->
                                                        </div>
                                                        <!--end::Tab Content-->
                                                    </div>
                                                    <!--end::Card body-->
                                                </div>
                                                <!--end::Timeline widget-3-->
                                            </div>
                                            <!--end::Col-->
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Container-->
                                </div>
                                <!--end::Post-->
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Page-->
                </div>
                <!--end::Root-->
                <!--begin::Drawers-->
                <!--begin::Activities drawer-->
                <div id="kt_activities" class="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
                    <div class="card shadow-none rounded-0">
                        <!--begin::Header-->
                        <div class="card-header" id="kt_activities_header">
                            <h3 class="card-title fw-bolder text-dark">Activity Logs</h3>
                            <div class="card-toolbar">
                                <button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                    <span class="svg-icon svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                </button>
                            </div>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body position-relative" id="kt_activities_body">
                            <!--begin::Content-->
                            <div id="kt_activities_scroll" class="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
                                <!--begin::Timeline items-->
                                <div class="timeline">
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com003.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                                                        <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mb-10 mt-n1">
                                            <!--begin::Timeline heading-->
                                            <div class="pe-3 mb-5">
                                                <!--begin::Title-->
                                                <div class="fs-5 fw-bold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="d-flex align-items-center mt-1 fs-6">
                                                    <!--begin::Info-->
                                                    <div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                    <!--end::Info-->
                                                    <!--begin::User-->
                                                    <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                        <img src="${publicPath}media/avatars/300-14.jpg" alt="img" />
                                                    </div>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                            <!--begin::Timeline details-->
                                            <div class="overflow-auto pb-5">
                                                <!--begin::Record-->
                                                <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                    <!--begin::Title-->
                                                    <a href="../../demo1/dist/apps/projects/project.html" class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Meeting with customer</a>
                                                    <!--end::Title-->
                                                    <!--begin::Label-->
                                                    <div class="min-w-175px pe-2">
                                                        <span class="badge badge-light text-muted">Application Design</span>
                                                    </div>
                                                    <!--end::Label-->
                                                    <!--begin::Users-->
                                                    <div class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                        <!--begin::User-->
                                                        <div class="symbol symbol-circle symbol-25px">
                                                            <img src="${publicPath}media/avatars/300-2.jpg" alt="img" />
                                                        </div>
                                                        <!--end::User-->
                                                        <!--begin::User-->
                                                        <div class="symbol symbol-circle symbol-25px">
                                                            <img src="${publicPath}media/avatars/300-14.jpg" alt="img" />
                                                        </div>
                                                        <!--end::User-->
                                                        <!--begin::User-->
                                                        <div class="symbol symbol-circle symbol-25px">
                                                            <div class="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">A</div>
                                                        </div>
                                                        <!--end::User-->
                                                    </div>
                                                    <!--end::Users-->
                                                    <!--begin::Progress-->
                                                    <div class="min-w-125px pe-2">
                                                        <span class="badge badge-light-primary">In Progress</span>
                                                    </div>
                                                    <!--end::Progress-->
                                                    <!--begin::Action-->
                                                    <a href="../../demo1/dist/apps/projects/project.html" class="btn btn-sm btn-light btn-active-light-primary">View</a>
                                                    <!--end::Action-->
                                                </div>
                                                <!--end::Record-->
                                                <!--begin::Record-->
                                                <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                    <!--begin::Title-->
                                                    <a href="../../demo1/dist/apps/projects/project.html" class="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Project Delivery Preparation</a>
                                                    <!--end::Title-->
                                                    <!--begin::Label-->
                                                    <div class="min-w-175px">
                                                        <span class="badge badge-light text-muted">CRM System Development</span>
                                                    </div>
                                                    <!--end::Label-->
                                                    <!--begin::Users-->
                                                    <div class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                        <!--begin::User-->
                                                        <div class="symbol symbol-circle symbol-25px">
                                                            <img src="${publicPath}media/avatars/300-20.jpg" alt="img" />
                                                        </div>
                                                        <!--end::User-->
                                                        <!--begin::User-->
                                                        <div class="symbol symbol-circle symbol-25px">
                                                            <div class="symbol-label fs-8 fw-bold bg-success text-inverse-primary">B</div>
                                                        </div>
                                                        <!--end::User-->
                                                    </div>
                                                    <!--end::Users-->
                                                    <!--begin::Progress-->
                                                    <div class="min-w-125px">
                                                        <span class="badge badge-light-success">Completed</span>
                                                    </div>
                                                    <!--end::Progress-->
                                                    <!--begin::Action-->
                                                    <a href="../../demo1/dist/apps/projects/project.html" class="btn btn-sm btn-light btn-active-light-primary">View</a>
                                                    <!--end::Action-->
                                                </div>
                                                <!--end::Record-->
                                            </div>
                                            <!--end::Timeline details-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com009.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                                                        <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mb-10 mt-n2">
                                            <!--begin::Timeline heading-->
                                            <div class="overflow-auto pe-3">
                                                <!--begin::Title-->
                                                <div class="fs-5 fw-bold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="d-flex align-items-center mt-1 fs-6">
                                                    <!--begin::Info-->
                                                    <div class="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                                                    <!--end::Info-->
                                                    <!--begin::User-->
                                                    <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                                                        <img src="${publicPath}media/avatars/300-1.jpg" alt="img" />
                                                    </div>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/coding/cod008.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                                                        <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mb-10 mt-n1">
                                            <!--begin::Timeline heading-->
                                            <div class="mb-5 pe-3">
                                                <!--begin::Title-->
                                                <a href="#" class="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="d-flex align-items-center mt-1 fs-6">
                                                    <!--begin::Info-->
                                                    <div class="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                                                    <!--end::Info-->
                                                    <!--begin::User-->
                                                    <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                                                        <img src="${publicPath}media/avatars/300-23.jpg" alt="img" />
                                                    </div>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                            <!--begin::Timeline details-->
                                            <div class="overflow-auto pb-5">
                                                <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                    <!--begin::Item-->
                                                    <div class="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                        <!--begin::Icon-->
                                                        <img alt="" class="w-30px me-3" src="${publicPath}media/svg/files/pdf.svg" />
                                                        <!--end::Icon-->
                                                        <!--begin::Info-->
                                                        <div class="ms-1 fw-bold">
                                                            <!--begin::Desc-->
                                                            <a href="../../demo1/dist/apps/projects/project.html" class="fs-6 text-hover-primary fw-bolder">Finance KPI App Guidelines</a>
                                                            <!--end::Desc-->
                                                            <!--begin::Number-->
                                                            <div class="text-gray-400">1.9mb</div>
                                                            <!--end::Number-->
                                                        </div>
                                                        <!--begin::Info-->
                                                    </div>
                                                    <!--end::Item-->
                                                    <!--begin::Item-->
                                                    <div class="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                        <!--begin::Icon-->
                                                        <img alt="../../demo1/dist/apps/projects/project.html" class="w-30px me-3" src="${publicPath}media/svg/files/doc.svg" />
                                                        <!--end::Icon-->
                                                        <!--begin::Info-->
                                                        <div class="ms-1 fw-bold">
                                                            <!--begin::Desc-->
                                                            <a href="#" class="fs-6 text-hover-primary fw-bolder">Client UAT Testing Results</a>
                                                            <!--end::Desc-->
                                                            <!--begin::Number-->
                                                            <div class="text-gray-400">18kb</div>
                                                            <!--end::Number-->
                                                        </div>
                                                        <!--end::Info-->
                                                    </div>
                                                    <!--end::Item-->
                                                    <!--begin::Item-->
                                                    <div class="d-flex flex-aligns-center">
                                                        <!--begin::Icon-->
                                                        <img alt="../../demo1/dist/apps/projects/project.html" class="w-30px me-3" src="${publicPath}media/svg/files/css.svg" />
                                                        <!--end::Icon-->
                                                        <!--begin::Info-->
                                                        <div class="ms-1 fw-bold">
                                                            <!--begin::Desc-->
                                                            <a href="#" class="fs-6 text-hover-primary fw-bolder">Finance Reports</a>
                                                            <!--end::Desc-->
                                                            <!--begin::Number-->
                                                            <div class="text-gray-400">20mb</div>
                                                            <!--end::Number-->
                                                        </div>
                                                        <!--end::Icon-->
                                                    </div>
                                                    <!--end::Item-->
                                                </div>
                                            </div>
                                            <!--end::Timeline details-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mb-10 mt-n1">
                                            <!--begin::Timeline heading-->
                                            <div class="pe-3 mb-5">
                                                <!--begin::Title-->
                                                <div class="fs-5 fw-bold mb-2">Task
                                                <a href="#" class="text-primary fw-bolder me-1">#45890</a>merged with
                                                <a href="#" class="text-primary fw-bolder me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="d-flex align-items-center mt-1 fs-6">
                                                    <!--begin::Info-->
                                                    <div class="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                                                    <!--end::Info-->
                                                    <!--begin::User-->
                                                    <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                        <img src="${publicPath}media/avatars/300-14.jpg" alt="img" />
                                                    </div>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mb-10 mt-n1">
                                            <!--begin::Timeline heading-->
                                            <div class="pe-3 mb-5">
                                                <!--begin::Title-->
                                                <div class="fs-5 fw-bold mb-2">3 new application design concepts added:</div>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="d-flex align-items-center mt-1 fs-6">
                                                    <!--begin::Info-->
                                                    <div class="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                                                    <!--end::Info-->
                                                    <!--begin::User-->
                                                    <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                                                        <img src="${publicPath}media/avatars/300-2.jpg" alt="img" />
                                                    </div>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                            <!--begin::Timeline details-->
                                            <div class="overflow-auto pb-5">
                                                <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                    <!--begin::Item-->
                                                    <div class="overlay me-10">
                                                        <!--begin::Image-->
                                                        <div class="overlay-wrapper">
                                                            <img alt="img" class="rounded w-150px" src="${publicPath}media/stock/600x400/img-29.jpg" />
                                                        </div>
                                                        <!--end::Image-->
                                                        <!--begin::Link-->
                                                        <div class="overlay-layer bg-dark bg-opacity-10 rounded">
                                                            <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                        </div>
                                                        <!--end::Link-->
                                                    </div>
                                                    <!--end::Item-->
                                                    <!--begin::Item-->
                                                    <div class="overlay me-10">
                                                        <!--begin::Image-->
                                                        <div class="overlay-wrapper">
                                                            <img alt="img" class="rounded w-150px" src="${publicPath}media/stock/600x400/img-31.jpg" />
                                                        </div>
                                                        <!--end::Image-->
                                                        <!--begin::Link-->
                                                        <div class="overlay-layer bg-dark bg-opacity-10 rounded">
                                                            <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                        </div>
                                                        <!--end::Link-->
                                                    </div>
                                                    <!--end::Item-->
                                                    <!--begin::Item-->
                                                    <div class="overlay">
                                                        <!--begin::Image-->
                                                        <div class="overlay-wrapper">
                                                            <img alt="img" class="rounded w-150px" src="${publicPath}media/stock/600x400/img-40.jpg" />
                                                        </div>
                                                        <!--end::Image-->
                                                        <!--begin::Link-->
                                                        <div class="overlay-layer bg-dark bg-opacity-10 rounded">
                                                            <a href="#" class="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                        </div>
                                                        <!--end::Link-->
                                                    </div>
                                                    <!--end::Item-->
                                                </div>
                                            </div>
                                            <!--end::Timeline details-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/communication/com010.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                                                        <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mb-10 mt-n1">
                                            <!--begin::Timeline heading-->
                                            <div class="pe-3 mb-5">
                                                <!--begin::Title-->
                                                <div class="fs-5 fw-bold mb-2">New case
                                                <a href="#" class="text-primary fw-bolder me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="overflow-auto pb-5">
                                                    <!--begin::Wrapper-->
                                                    <div class="d-flex align-items-center mt-1 fs-6">
                                                        <!--begin::Info-->
                                                        <div class="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                        <!--end::Info-->
                                                        <!--begin::User-->
                                                        <a href="#" class="text-primary fw-bolder me-1">Alice Tan</a>
                                                        <!--end::User-->
                                                    </div>
                                                    <!--end::Wrapper-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mb-10 mt-n1">
                                            <!--begin::Timeline heading-->
                                            <div class="pe-3 mb-5">
                                                <!--begin::Title-->
                                                <div class="fs-5 fw-bold mb-2">You have received a new order:</div>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="d-flex align-items-center mt-1 fs-6">
                                                    <!--begin::Info-->
                                                    <div class="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                                                    <!--end::Info-->
                                                    <!--begin::User-->
                                                    <div class="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                                                        <img src="${publicPath}media/avatars/300-4.jpg" alt="img" />
                                                    </div>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                            <!--begin::Timeline details-->
                                            <div class="overflow-auto pb-5">
                                                <!--begin::Notice-->
                                                <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                                                    <!--begin::Icon-->
                                                    <!--begin::Svg Icon | path: icons/duotune/coding/cod004.svg-->
                                                    <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z" fill="currentColor" />
                                                            <path d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <!--end::Svg Icon-->
                                                    <!--end::Icon-->
                                                    <!--begin::Wrapper-->
                                                    <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                        <!--begin::Content-->
                                                        <div class="mb-3 mb-md-0 fw-bold">
                                                            <h4 class="text-gray-900 fw-bolder">Database Backup Process Completed!</h4>
                                                            <div class="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                                                        </div>
                                                        <!--end::Content-->
                                                        <!--begin::Action-->
                                                        <a href="#" class="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
                                                        <!--end::Action-->
                                                    </div>
                                                    <!--end::Wrapper-->
                                                </div>
                                                <!--end::Notice-->
                                            </div>
                                            <!--end::Timeline details-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                    <!--begin::Timeline item-->
                                    <div class="timeline-item">
                                        <!--begin::Timeline line-->
                                        <div class="timeline-line w-40px"></div>
                                        <!--end::Timeline line-->
                                        <!--begin::Timeline icon-->
                                        <div class="timeline-icon symbol symbol-circle symbol-40px">
                                            <div class="symbol-label bg-light">
                                                <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg-->
                                                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                                                        <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                                                        <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </div>
                                        </div>
                                        <!--end::Timeline icon-->
                                        <!--begin::Timeline content-->
                                        <div class="timeline-content mt-n1">
                                            <!--begin::Timeline heading-->
                                            <div class="pe-3 mb-5">
                                                <!--begin::Title-->
                                                <div class="fs-5 fw-bold mb-2">New order
                                                <a href="#" class="text-primary fw-bolder me-1">#67890</a>is placed for Workshow Planning &amp; Budget Estimation</div>
                                                <!--end::Title-->
                                                <!--begin::Description-->
                                                <div class="d-flex align-items-center mt-1 fs-6">
                                                    <!--begin::Info-->
                                                    <div class="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                                                    <!--end::Info-->
                                                    <!--begin::User-->
                                                    <a href="#" class="text-primary fw-bolder me-1">Jimmy Bold</a>
                                                    <!--end::User-->
                                                </div>
                                                <!--end::Description-->
                                            </div>
                                            <!--end::Timeline heading-->
                                        </div>
                                        <!--end::Timeline content-->
                                    </div>
                                    <!--end::Timeline item-->
                                </div>
                                <!--end::Timeline items-->
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Body-->
                        <!--begin::Footer-->
                        <div class="card-footer py-5 text-center" id="kt_activities_footer">
                            <a href="../../demo1/dist/pages/user-profile/activity.html" class="btn btn-bg-body text-primary">View All Activities
                            <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                            <span class="svg-icon svg-icon-3 svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon--></a>
                        </div>
                        <!--end::Footer-->
                    </div>
                </div>
                <!--end::Activities drawer-->
                <!--begin::Chat drawer-->
                <div id="kt_drawer_chat" class="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
                    <!--begin::Messenger-->
                    <div class="card w-100 rounded-0 border-0" id="kt_drawer_chat_messenger">
                        <!--begin::Card header-->
                        <div class="card-header pe-5" id="kt_drawer_chat_messenger_header">
                            <!--begin::Title-->
                            <div class="card-title">
                                <!--begin::User-->
                                <div class="d-flex justify-content-center flex-column me-3">
                                    <a href="#" class="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
                                    <!--begin::Info-->
                                    <div class="mb-0 lh-1">
                                        <span class="badge badge-success badge-circle w-10px h-10px me-1"></span>
                                        <span class="fs-7 fw-bold text-muted">Active</span>
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::User-->
                            </div>
                            <!--end::Title-->
                            <!--begin::Card toolbar-->
                            <div class="card-toolbar">
                                <!--begin::Menu-->
                                <div class="me-2">
                                    <button class="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i class="bi bi-three-dots fs-3"></i>
                                    </button>
                                    <!--begin::Menu 3-->
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                                        <!--begin::Heading-->
                                        <div class="menu-item px-3">
                                            <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
                                        </div>
                                        <!--end::Heading-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3">
                                            <a href="#" class="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3">
                                            <a href="#" class="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
                                            <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation"></i></a>
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                            <a href="#" class="menu-link px-3">
                                                <span class="menu-title">Groups</span>
                                                <span class="menu-arrow"></span>
                                            </a>
                                            <!--begin::Menu sub-->
                                            <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                                <!--begin::Menu item-->
                                                <div class="menu-item px-3">
                                                    <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
                                                </div>
                                                <!--end::Menu item-->
                                                <!--begin::Menu item-->
                                                <div class="menu-item px-3">
                                                    <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
                                                </div>
                                                <!--end::Menu item-->
                                                <!--begin::Menu item-->
                                                <div class="menu-item px-3">
                                                    <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                                </div>
                                                <!--end::Menu item-->
                                            </div>
                                            <!--end::Menu sub-->
                                        </div>
                                        <!--end::Menu item-->
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3 my-1">
                                            <a href="#" class="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                        </div>
                                        <!--end::Menu item-->
                                    </div>
                                    <!--end::Menu 3-->
                                </div>
                                <!--end::Menu-->
                                <!--begin::Close-->
                                <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                    <span class="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                </div>
                                <!--end::Close-->
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body" id="kt_drawer_chat_messenger_body">
                            <!--begin::Messages-->
                            <div class="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-25.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">2 mins</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->
                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-10">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">5 mins</span>
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            <!--end::Details-->
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-1.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->
                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-25.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">1 Hour</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->
                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-10">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">2 Hours</span>
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            <!--end::Details-->
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-1.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->
                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-25.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">3 Hours</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
                                        <a href="https://keenthemes.com">Keenthemes.com</a></div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->
                                <!--begin::Message(out)-->
                                <div class="d-flex justify-content-end mb-10">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">4 Hours</span>
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            <!--end::Details-->
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-1.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(out)-->
                                <!--begin::Message(in)-->
                                <div class="d-flex justify-content-start mb-10">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-25.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">5 Hours</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(in)-->
                                <!--begin::Message(template for out)-->
                                <div class="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-end">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Details-->
                                            <div class="me-3">
                                                <span class="text-muted fs-7 mb-1">Just now</span>
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                                            </div>
                                            <!--end::Details-->
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-1.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text"></div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(template for out)-->
                                <!--begin::Message(template for in)-->
                                <div class="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start">
                                        <!--begin::User-->
                                        <div class="d-flex align-items-center mb-2">
                                            <!--begin::Avatar-->
                                            <div class="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="${publicPath}media/avatars/300-25.jpg" />
                                            </div>
                                            <!--end::Avatar-->
                                            <!--begin::Details-->
                                            <div class="ms-3">
                                                <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                                <span class="text-muted fs-7 mb-1">Just now</span>
                                            </div>
                                            <!--end::Details-->
                                        </div>
                                        <!--end::User-->
                                        <!--begin::Text-->
                                        <div class="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
                                        <!--end::Text-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Message(template for in)-->
                            </div>
                            <!--end::Messages-->
                        </div>
                        <!--end::Card body-->
                        <!--begin::Card footer-->
                        <div class="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
                            <!--begin::Input-->
                            <textarea class="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
                            <!--end::Input-->
                            <!--begin:Toolbar-->
                            <div class="d-flex flex-stack">
                                <!--begin::Actions-->
                                <div class="d-flex align-items-center me-2">
                                    <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                        <i class="bi bi-paperclip fs-3"></i>
                                    </button>
                                    <button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                        <i class="bi bi-upload fs-3"></i>
                                    </button>
                                </div>
                                <!--end::Actions-->
                                <!--begin::Send-->
                                <button class="btn btn-primary" type="button" data-kt-element="send">Send</button>
                                <!--end::Send-->
                            </div>
                            <!--end::Toolbar-->
                        </div>
                        <!--end::Card footer-->
                    </div>
                    <!--end::Messenger-->
                </div>
                <!--end::Chat drawer-->
                <!--end::Drawers-->
                <!--end::Main-->
                <!--begin::Engage drawers-->
                <!--begin::Demos drawer-->
                <div id="kt_engage_demos" class="bg-body" data-kt-drawer="true" data-kt-drawer-name="explore" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'350px', 'lg': '475px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_engage_demos_toggle" data-kt-drawer-close="#kt_engage_demos_close">
                    <!--begin::Card-->
                    <div class="card shadow-none rounded-0 w-100">
                        <!--begin::Header-->
                        <div class="card-header" id="kt_engage_demos_header">
                            <h3 class="card-title fw-bolder text-gray-700">Explore</h3>
                            <div class="card-toolbar">
                                <button type="button" class="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6" id="kt_engage_demos_close">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                    <span class="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                </button>
                            </div>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body" id="kt_engage_demos_body">
                            <!--begin::Content-->
                            <div id="kt_explore_scroll" class="scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_engage_demos_body" data-kt-scroll-dependencies="#kt_engage_demos_header" data-kt-scroll-offset="5px">
                                <!--begin::Wrapper-->
                                <div class="mb-0">
                                    <!--begin::Heading-->
                                    <div class="mb-7">
                                        <div class="d-flex flex-stack">
                                            <h3 class="mb-0">Metronic Licenses</h3>
                                            <a href="https://themeforest.net/licenses/standard" class="fw-bold" target="_blank">License FAQs</a>
                                        </div>
                                    </div>
                                    <!--end::Heading-->
                                    <!--begin::License-->
                                    <div class="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                                        <div class="d-flex flex-stack">
                                            <div class="d-flex flex-column">
                                                <div class="d-flex align-items-center mb-1">
                                                    <div class="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">Regular License</div>
                                                    <i class="text-gray-400 fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="popover" data-bs-custom-class="popover-dark" data-bs-trigger="hover" data-bs-placement="top" data-bs-content="Use, by you or one client in a single end product which end users are not charged for"></i>
                                                </div>
                                                <div class="fs-7 text-muted">For single end product used by you or one client</div>
                                            </div>
                                            <div class="text-nowrap">
                                                <span class="text-muted fs-7 fw-bold me-n1">$</span>
                                                <span class="text-dark fs-1 fw-bolder">39</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::License-->
                                    <!--begin::License-->
                                    <div class="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                                        <div class="d-flex flex-stack">
                                            <div class="d-flex flex-column">
                                                <div class="d-flex align-items-center mb-1">
                                                    <div class="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">Extended License</div>
                                                    <i class="text-gray-400 fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="popover" data-bs-custom-class="popover-dark" data-bs-trigger="hover" data-bs-placement="top" data-bs-content="Use, by you or one client, in a single end product which end users can be charged for."></i>
                                                </div>
                                                <div class="fs-7 text-muted">For single SaaS app with paying users</div>
                                            </div>
                                            <div class="text-nowrap">
                                                <span class="text-muted fs-7 fw-bold me-n1">$</span>
                                                <span class="text-dark fs-1 fw-bolder">969</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::License-->
                                    <!--begin::License-->
                                    <div class="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                                        <div class="d-flex flex-stack">
                                            <div class="d-flex flex-column">
                                                <div class="d-flex align-items-center mb-1">
                                                    <div class="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">Custom License</div>
                                                </div>
                                                <div class="fs-7 text-muted">Reach us for custom license offers.</div>
                                            </div>
                                            <div class="text-nowrap">
                                                <a href="https://keenthemes.com/contact/" class="btn btn-sm btn-success" target="_blank">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::License-->
                                    <!--begin::Purchase-->
                                    <a href="https://1.envato.market/EA4JP" class="btn btn-primary mb-15 w-100">Buy Now</a>
                                    <!--end::Purchase-->
                                    <!--begin::Demos-->
                                    <div class="mb-0">
                                        <h3 class="fw-bolder text-center mb-6">Metronic Demos</h3>
                                        <!--begin::Row-->
                                        <div class="row g-5">
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-success rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo1.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo1" class="btn btn-sm btn-success shadow">Demo 1</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo2.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo2" class="btn btn-sm btn-success shadow">Demo 2</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo3.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo3" class="btn btn-sm btn-success shadow">Demo 3</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo4.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo4" class="btn btn-sm btn-success shadow">Demo 4</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo5.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo5" class="btn btn-sm btn-success shadow">Demo 5</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo6.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo6" class="btn btn-sm btn-success shadow">Demo 6</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo7.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo7" class="btn btn-sm btn-success shadow">Demo 7</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo8.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo8" class="btn btn-sm btn-success shadow">Demo 8</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo9.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo9" class="btn btn-sm btn-success shadow">Demo 9</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo10.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo10" class="btn btn-sm btn-success shadow">Demo 10</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo11.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo11" class="btn btn-sm btn-success shadow">Demo 11</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo12.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo12" class="btn btn-sm btn-success shadow">Demo 12</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo13.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo13" class="btn btn-sm btn-success shadow">Demo 13</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo14.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo14" class="btn btn-sm btn-success shadow">Demo 14</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo15.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo15" class="btn btn-sm btn-success shadow">Demo 15</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo16.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo16" class="btn btn-sm btn-success shadow">Demo 16</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo17.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo17" class="btn btn-sm btn-success shadow">Demo 17</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo18.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo18" class="btn btn-sm btn-success shadow">Demo 18</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo19.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo19" class="btn btn-sm btn-success shadow">Demo 19</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo20.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo20" class="btn btn-sm btn-success shadow">Demo 20</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo21.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo21" class="btn btn-sm btn-success shadow">Demo 21</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo22.png" alt="demo" class="w-100" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <a href="https://preview.keenthemes.com/metronic8/demo22" class="btn btn-sm btn-success shadow">Demo 22</a>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo23.png" alt="demo" class="w-100 opacity-25" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <div class="badge badge-white px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-6">
                                                <!--begin::Demo-->
                                                <div class="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                                                    <div class="overlay-wrapper">
                                                        <img src="${publicPath}media/demos/demo24.png" alt="demo" class="w-100 opacity-25" />
                                                    </div>
                                                    <div class="overlay-layer bg-dark bg-opacity-10">
                                                        <div class="badge badge-white px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
                                                    </div>
                                                </div>
                                                <!--end::Demo-->
                                            </div>
                                            <!--end::Col-->
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Demos-->
                                </div>
                                <!--end::Wrapper-->
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Body-->
                    </div>
                    <!--end::Card-->
                </div>
                <!--end::Demos drawer-->
                <!--begin::Help drawer-->
                <div id="kt_help" class="bg-body" data-kt-drawer="true" data-kt-drawer-name="help" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'350px', 'md': '525px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_help_toggle" data-kt-drawer-close="#kt_help_close">
                    <!--begin::Card-->
                    <div class="card shadow-none rounded-0 w-100">
                        <!--begin::Header-->
                        <div class="card-header" id="kt_help_header">
                            <h5 class="card-title fw-bold text-gray-600">Learn &amp; Get Inspired</h5>
                            <div class="card-toolbar">
                                <button type="button" class="btn btn-sm btn-icon explore-btn-dismiss me-n5" id="kt_help_close">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                    <span class="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                </button>
                            </div>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body" id="kt_help_body">
                            <!--begin::Content-->
                            <div id="kt_help_scroll" class="hover-scroll-overlay-y" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_help_body" data-kt-scroll-dependencies="#kt_help_header" data-kt-scroll-offset="5px">
                                <!--begin::Support-->
                                <div class="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10">
                                    <!--begin::Heading-->
                                    <h2 class="fw-bolder mb-5">Support at
                                    <a href="https://devs.keenthemes.com" class="">devs.keenthemes.com</a></h2>
                                    <!--end::Heading-->
                                    <!--begin::Description-->
                                    <div class="fs-5 fw-bold mb-5">
                                        <span class="text-gray-500">Join our developers community to find answer to your question and help others.</span>
                                        <a class="explore-link d-none" href="https://keenthemes.com/licensing">FAQs</a>
                                    </div>
                                    <!--end::Description-->
                                    <!--begin::Link-->
                                    <a href="https://devs.keenthemes.com" class="btn btn-lg explore-btn-primary w-100">Get Support</a>
                                    <!--end::Link-->
                                </div>
                                <!--end::Support-->
                                <!--begin::Link-->
                                <div class="d-flex align-items-center mb-7">
                                    <!--begin::Icon-->
                                    <div class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning">
                                        <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
                                        <span class="svg-icon svg-icon-warning svg-icon-2x svg-icon-lg-3x">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Icon-->
                                    <!--begin::Info-->
                                    <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-column me-2 me-lg-5">
                                            <!--begin::Title-->
                                            <a href="../../demo1/dist/documentation/getting-started.html" class="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1">Documentation &amp; Videos</a>
                                            <!--end::Title-->
                                            <!--begin::Description-->
                                            <div class="text-muted fw-bold fs-7 fs-lg-6">From guides and video tutorials, to live demos and code examples to get started.</div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Wrapper-->
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                        <span class="svg-icon svg-icon-gray-400 svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Link-->
                                <!--begin::Link-->
                                <div class="d-flex align-items-center mb-7">
                                    <!--begin::Icon-->
                                    <div class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary">
                                        <!--begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg-->
                                        <span class="svg-icon svg-icon-primary svg-icon-2x svg-icon-lg-3x">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z" fill="currentColor" />
                                                <path d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z" fill="currentColor" />
                                                <path opacity="0.3" d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Icon-->
                                    <!--begin::Info-->
                                    <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-column me-2 me-lg-5">
                                            <!--begin::Title-->
                                            <a href="../../demo1/dist/documentation/base/utilities.html" class="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1">Plugins &amp; Components</a>
                                            <!--end::Title-->
                                            <!--begin::Description-->
                                            <div class="text-muted fw-bold fs-7 fs-lg-6">Check out our 300+ in-house components and customized 3rd-party plugins.</div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Wrapper-->
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                        <span class="svg-icon svg-icon-gray-400 svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Link-->
                                <!--begin::Link-->
                                <div class="d-flex align-items-center mb-7">
                                    <!--begin::Icon-->
                                    <div class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info">
                                        <!--begin::Svg Icon | path: icons/duotune/art/art006.svg-->
                                        <span class="svg-icon svg-icon-info svg-icon-2x svg-icon-lg-3x">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z" fill="currentColor" />
                                                <path d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Icon-->
                                    <!--begin::Info-->
                                    <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-column me-2 me-lg-5">
                                            <!--begin::Title-->
                                            <a href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html" class="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1">Layout Builder</a>
                                            <!--end::Title-->
                                            <!--begin::Description-->
                                            <div class="text-muted fw-bold fs-7 fs-lg-6">Build your layout, preview it and export the HTML for server side integration.</div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Wrapper-->
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                        <span class="svg-icon svg-icon-gray-400 svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Link-->
                                <!--begin::Link-->
                                <div class="d-flex align-items-center mb-7">
                                    <!--begin::Icon-->
                                    <div class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-success">
                                        <!--begin::Svg Icon | path: icons/duotune/files/fil021.svg-->
                                        <span class="svg-icon svg-icon-success svg-icon-2x svg-icon-lg-3x">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z" fill="currentColor" />
                                                <path d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z" fill="currentColor" />
                                                <path opacity="0.3" d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Icon-->
                                    <!--begin::Info-->
                                    <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-column me-2 me-lg-5">
                                            <!--begin::Title-->
                                            <a href="https://devs.keenthemes.com/metronic" class="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1">Metronic Downloads</a>
                                            <!--end::Title-->
                                            <!--begin::Description-->
                                            <div class="text-muted fw-bold fs-7 fs-lg-6">Download your prefered framework and demo with one click.</div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Wrapper-->
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                        <span class="svg-icon svg-icon-gray-400 svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Link-->
                                <!--begin::Link-->
                                <div class="d-flex align-items-center mb-7">
                                    <!--begin::Icon-->
                                    <div class="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger">
                                        <!--begin::Svg Icon | path: icons/duotune/electronics/elc009.svg-->
                                        <span class="svg-icon svg-icon-danger svg-icon-2x svg-icon-lg-3x">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M13 9V8C13 7.4 13.4 7 14 7H15C16.7 7 18 5.7 18 4V3C18 2.4 17.6 2 17 2C16.4 2 16 2.4 16 3V4C16 4.6 15.6 5 15 5H14C12.3 5 11 6.3 11 8V9H13Z" fill="currentColor" />
                                                <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V10C2 9.4 2.4 9 3 9H21C21.6 9 22 9.4 22 10V21C22 21.6 21.6 22 21 22ZM5 12C4.4 12 4 12.4 4 13C4 13.6 4.4 14 5 14C5.6 14 6 13.6 6 13C6 12.4 5.6 12 5 12ZM8 12C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14C8.6 14 9 13.6 9 13C9 12.4 8.6 12 8 12ZM11 12C10.4 12 10 12.4 10 13C10 13.6 10.4 14 11 14C11.6 14 12 13.6 12 13C12 12.4 11.6 12 11 12ZM14 12C13.4 12 13 12.4 13 13C13 13.6 13.4 14 14 14C14.6 14 15 13.6 15 13C15 12.4 14.6 12 14 12ZM9 15C8.4 15 8 15.4 8 16C8 16.6 8.4 17 9 17C9.6 17 10 16.6 10 16C10 15.4 9.6 15 9 15ZM12 15C11.4 15 11 15.4 11 16C11 16.6 11.4 17 12 17C12.6 17 13 16.6 13 16C13 15.4 12.6 15 12 15ZM15 15C14.4 15 14 15.4 14 16C14 16.6 14.4 17 15 17C15.6 17 16 16.6 16 16C16 15.4 15.6 15 15 15ZM19 18C18.4 18 18 18.4 18 19C18 19.6 18.4 20 19 20C19.6 20 20 19.6 20 19C20 18.4 19.6 18 19 18ZM7 19C7 18.4 6.6 18 6 18H5C4.4 18 4 18.4 4 19C4 19.6 4.4 20 5 20H6C6.6 20 7 19.6 7 19ZM7 16C7 15.4 6.6 15 6 15H5C4.4 15 4 15.4 4 16C4 16.6 4.4 17 5 17H6C6.6 17 7 16.6 7 16ZM17 14H19C19.6 14 20 13.6 20 13C20 12.4 19.6 12 19 12H17C16.4 12 16 12.4 16 13C16 13.6 16.4 14 17 14ZM18 17H19C19.6 17 20 16.6 20 16C20 15.4 19.6 15 19 15H18C17.4 15 17 15.4 17 16C17 16.6 17.4 17 18 17ZM17 19C17 18.4 16.6 18 16 18H9C8.4 18 8 18.4 8 19C8 19.6 8.4 20 9 20H16C16.6 20 17 19.6 17 19Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Icon-->
                                    <!--begin::Info-->
                                    <div class="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-column me-2 me-lg-5">
                                            <!--begin::Title-->
                                            <a href="../../demo1/dist/documentation/getting-started/changelog.html" class="text-dark text-hover-primary fw-bolder fs-6 fs-lg-4 mb-1">What's New</a>
                                            <!--end::Title-->
                                            <!--begin::Description-->
                                            <div class="text-muted fw-bold fs-7 fs-lg-6">Latest features and improvements added with our users feedback in mind.</div>
                                            <!--end::Description-->
                                        </div>
                                        <!--end::Wrapper-->
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                        <span class="svg-icon svg-icon-gray-400 svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Info-->
                                </div>
                                <!--end::Link-->
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Body-->
                    </div>
                    <!--end::Card-->
                </div>
                <!--end::Help drawer-->
                <!--end::Engage drawers-->
                
                <!--begin::Scrolltop-->
                <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
                    <span class="svg-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </div>
                <!--end::Scrolltop-->
				
                <!--begin::Javascript-->
                <script>var hostUrl = "${publicPath}";</script>
                <!--begin::Global Javascript Bundle(used by all pages)-->
                <script src="${publicPath}plugins/global/plugins.bundle.js"></script>
                <script src="${publicPath}js/scripts.bundle.js"></script>
                <!--end::Global Javascript Bundle-->
                <!--begin::Page Vendors Javascript(used by this page)-->
                <script src="${publicPath}plugins/custom/datatables/datatables.bundle.js"></script>
                <script src="${publicPath}plugins/custom/vis-timeline/vis-timeline.bundle.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
                <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
                <!--end::Page Vendors Javascript-->
                <!--begin::Page Custom Javascript(used by this page)-->
                <script src="${publicPath}js/widgets.bundle.js"></script>
                <script src="${publicPath}js/custom/widgets.js"></script>
                <script src="${publicPath}js/custom/apps/chat/chat.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/upgrade-plan.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/new-target.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/type.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/budget.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/settings.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/team.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/targets.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/files.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/complete.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-project/main.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/create-app.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/new-address.js"></script>
                <script src="${publicPath}js/custom/utilities/modals/users-search.js"></script>
                <!--end::Page Custom Javascript-->
                <!--end::Javascript-->
            </body>
            <!--end::Body-->
        </html>
    `;
};