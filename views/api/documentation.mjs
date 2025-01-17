import dotenv from 'dotenv';
dotenv.config();

export const renderDocumentationIndexPage = () => {
    return `
        <style type="text/css">
            h1 {
                color: #c00;
                font-family: sans-serif;
                font-size: 2em;
                margin-bottom: 0;
            }

            table {
                font-family: sans-serif;

            }

            th,
            td {
                padding: .25em .5em;
                text-align: left;

                &:nth-child(2) {
                    text-align: right;
                }
            }

            td {
                background-color: #eee;
            }

            th {
                background-color: #FF6443;
                color: #fff;
            }
            </style>
        <h1>Documentation : This is API Flourish Dude!</h1>
        <table class="zigzag">
            <thead>
                <tr>
                    <th class="header">Pages</th>
                    <th class="header">Section</th>
                    <th class="header">Url API</th>
                    <th class="header">Noted</th>
                </tr>
            </thead>
            <tbody>
                <!-- homepage -->
                <tr>
                    <td>Homepage</td>
                    <td>partnerData</td>
                    <td><a href="https://api.flourish.co.id/homepage/partners" target="_blank">https://api.flourish.co.id/homepage/partners</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>caseStudyData</td>
                    <td><a href="https://api.flourish.co.id/homepage/case-study" target="_blank">https://api.flourish.co.id/homepage/case-study</a></td>
                    <td></td>
                </tr>

                <!-- Expertise -->
                <tr>
                    <td>Expertise List</td>
                    <td>servicesData</td>
                    <td><a href="https://api.flourish.co.id/expertise/service" target="_blank">https://api.flourish.co.id/expertise/service</a>
                    </td>
                    <td></td>
                </tr>
                <!-- start -->
                <tr>
                    <td>Expertise in Detail page (Creative)</td>
                    <td>serviceCreativeScopes</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/scope/creative" target="_blank">https://api.flourish.co.id/expertise/service/scope/creative</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Creative)</td>
                    <td>serviceCreativeData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/another/creative" target="_blank">https://api.flourish.co.id/expertise/service/another/creative</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Creative)</td>
                    <td>relatedJournalData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/related/journal/creative" target="_blank">https://api.flourish.co.id/expertise/service/related/journal/creative</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Creative)</td>
                    <td>relatedJournalData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/related/works/creative" target="_blank">https://api.flourish.co.id/expertise/service/related/works/creative</a>
                    </td>
                    <td></td>
                </tr>
                <!-- end -->
                <!-- start -->
                <tr>
                    <td>Expertise in Detail Page (Strategy)</td>
                    <td>serviceStrategyScopes</td>
                    <td>
                        <a href="https://api.flourish.co.id//expertise/service/scope/strategy" target="_blank">https://api.flourish.co.id//expertise/service/scope/strategy</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Strategy)</td>
                    <td>serviceStrategyData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/another/strategy" target="_blank">https://api.flourish.co.id/expertise/service/another/strategy</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Strategy)</td>
                    <td>relatedJournalData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/related/journal/strategy" target="_blank">https://api.flourish.co.id/expertise/service/related/journal/strategy</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Strategy)</td>
                    <td>relatedWorkData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/related/works/strategy" target="_blank">https://api.flourish.co.id/expertise/service/related/works/strategy</a>
                    </td>
                    <td></td>
                </tr>
                <!-- start -->
                <tr>
                    <td>Expertise in Detail Page (Technology)</td>
                    <td>serviceTechnologyScopes</td>
                    <td>
                        <a href="https://api.flourish.co.id//expertise/service/scope/technology" target="_blank">https://api.flourish.co.id//expertise/service/scope/technology</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Technology)</td>
                    <td>serviceTechnologyData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/another/technology" target="_blank">https://api.flourish.co.id/expertise/service/another/technology</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Technology)</td>
                    <td>relatedJournalData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/related/journal/technology" target="_blank">https://api.flourish.co.id/expertise/service/related/journal/technology</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Expertise in Detail Page (Technology)</td>
                    <td>relatedWorkData</td>
                    <td>
                        <a href="https://api.flourish.co.id/expertise/service/related/works/technology" target="_blank">https://api.flourish.co.id/expertise/service/related/works/technology</a>
                    </td>
                    <td></td>
                </tr>
                <!-- end -->
                <!-- About -->
                <tr>
                    <td>About</td>
                    <td>peopleData</td>
                    <td><a href="https://api.flourish.co.id/about/people" target="_blank">https://api.flourish.co.id/about/people</a></td>
                    <td></td>
                </tr>
                <!-- Works -->
                <!-- Start -->
                <tr>
                    <td>Works</td>
                    <td>caseStudyData</td>
                    <td><a href="https://api.flourish.co.id/work/case-study?component=case-study" target="_blank">https://api.flourish.co.id/work/case-study?component=case-study</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works</td>
                    <td>FeaturedWorkData</td>
                    <td><a href="https://api.flourish.co.id/work/case-study?component=featured" target="_blank">https://api.flourish.co.id/work/case-study?component=featured</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works (Case Study)</td>
                    <td>asean-japan</td>
                    <td><a href="https://api.flourish.co.id/work/case-study/asean-japan" target="_blank">https://api.flourish.co.id/work/case-study/asean-japan</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works (Case Study)</td>
                    <td>asean-japan-50</td>
                    <td><a href="https://api.flourish.co.id/work/case-study/asean-japan-50" target="_blank">https://api.flourish.co.id/work/case-study/asean-japan-50</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works (Case Study)</td>
                    <td>eria</td>
                    <td><a href="https://api.flourish.co.id/work/case-study/eria" target="_blank">https://api.flourish.co.id/work/case-study/eria</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works (Case Study)</td>
                    <td>jaif-communication</td>
                    <td><a href="#" target="_blank">#</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works (Case Study)</td>
                    <td>jaif-grid-slider</td>
                    <td><a href="https://api.flourish.co.id/work/case-study/jaif?component=grid" target="_blank">https://api.flourish.co.id/work/case-study/jaif?component=grid</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works (Case Study)</td>
                    <td>jaif-fluid-slider</td>
                    <td><a href="https://api.flourish.co.id/work/case-study/jaif?component=grid" target="_blank">https://api.flourish.co.id/work/case-study/jaif?component=fluid</a>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <td>Works (Case Study)</td>
                    <td>oxfam</td>
                    <td><a href="https://api.flourish.co.id/work/case-study/oxfam" target="_blank">https://api.flourish.co.id/work/case-study/oxfam</a>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Works (Case Study)</td>
                    <td>sqres</td>
                    <td><a href="https://api.flourish.co.id/work/case-study/sqres" target="_blank">https://api.flourish.co.id/work/case-study/sqres</a>
                    </td>
                    <td></td>
                </tr>
                <!-- end -->
                <!-- Journals Page -->
                <tr>
                    <td>Journals</td>
                    <td>journal-list</td>
                    <td><a href="https://api.flourish.co.id/#" target="_blank">#</a></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td>Detail Journals</td>
                    <td><a href="https://api.flourish.co.id/journals/detail/list-journal" target="_blank">https://api.flourish.co.id/journals/detail/list-journal</a>
                    </td>
                    <td>#</td>
                </tr>
                <!-- Career Page -->
                <tr>
                    <td>Careers</td>
                    <td>Career List</td>
                    <td>#</td>
                    <td>#</td>
                </tr>

            </tbody>
        </table>
    `;
};