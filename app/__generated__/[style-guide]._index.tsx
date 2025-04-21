/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, RichTextLink as RichTextLink, Link as Link, Form as Form } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Slot as Slot, Fragment as Fragment_1, Heading as Heading, Text as Text, Paragraph as Paragraph, CodeText as CodeText, List as List, ListItem as ListItem, Span as Span, Blockquote as Blockquote, Separator as Separator, HtmlEmbed as HtmlEmbed, Input as Input, Textarea as Textarea, Button as Button, Image as Image } from "@webstudio-is/sdk-components-react";
import { Accordion as Accordion, AccordionItem as AccordionItem, AccordionHeader as AccordionHeader, AccordionTrigger as AccordionTrigger, AccordionContent as AccordionContent, Label as Label, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, Tooltip as Tooltip, TooltipTrigger as TooltipTrigger, TooltipContent as TooltipContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "4d691365-d09b-47bd-b9f9-5e55af3f3997";

      export const lastPublished = "2025-04-21T05:52:51.776Z";

      export const siteName = "Mastapay";

      export const breakpoints = [{"id":"jAWQK3_7D18H_5v0pK0z4"},{"id":"mONS0so-VrF1uS9rPlVcF","maxWidth":991},{"id":"zGIdqUzdPde7sHmF0aRQP","maxWidth":767},{"id":"wP-rcJFENR2yn86VzREAn","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "Dynage_Designs_Group_27_qF5-ipLlsphtt5lnzJvd6.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["DMSans-VariableFont_opsz_wght__6AYEf42h6baL3cdAc77f.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["Group_kCTIep--Fowuzx8m9sVEU.svg","bg-top-left_iDPdUzP3CXomJM1M8FrN6.svg"]

      

      const Page = (_props: { system: any; }) => {
let [formState, set$formState] = useVariableState<any>("initial")
let [TableData, set$TableData] = useVariableState<any>([{"value":"Usage","data":[{"value":"Custom domains","hint":"Total custom domains across all Projects.","items":[{"name":"Hobby","value":"1"},{"name":"Pro","value":"Unlimited"},{"name":"Pro (Lifetime)","value":"Unlimited"}]},{"value":"Asset storage","hint":"Total asset storage across all Projects such as images and fonts.","items":[{"name":"Hobby","value":"2 GB"},{"name":"Pro","value":"20 GB"},{"name":"Pro (Lifetime)","value":"Unlimited"}]}]}])
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c11ykhog c1kt5iwx`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
className={`w-heading c11nr3ex c11dowh9 c32myit cwrra4i cg5i74l c10r87ok c1dhz37v`}>
{"Style Guide"}
</Heading>
<Text
className={`w-text c1nkzcyu che9upb`}>
{"Craft Version 1.0"}
</Text>
<Paragraph
className={`w-paragraph cz5g8eb c1nkzcyu`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box copqmak c9sypx0 c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cna0hdz c1mzb2kd c1vaudkt cci8rp4 c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cfvl0bs c1mzb2kd c1vaudkt cci8rp4 c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"is-section-hero"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1778y6x c1wt8a7g c2keyc8 cnkorcr c1fd0kk1 c11gzs80 c1fhkm63 clv8gve c1lfjoq7 c1s46o9r cdczzub c1357293 c9jnjeu czr2pxy c155uc7w ck4tzbx`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 copqmak c1vrexag ct02u4h c1fhkm63 clv8gve c1lfjoq7 c1s46o9r c1cdc69r c1f64byh co2qwzx ck4tzbx c1g7fxd7 cx6c9kw c174sw29`}>
<Box
className={`w-box c7rvndl c2w8hv4`}>
<Text
className={`w-text c1yehcfp c1umavhe caipwxg cbvffy can94pj cuccfz7 cir85gx c1qom380 cr8yqfm c1ufwdzl c5blvcv cml0h3f c5m8ase clv8gve`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Foreground"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c12y6bqh c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1bd9ep2 ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cpp0nin c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 czt9u4x c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cchda18 c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Background"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-primary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cvgv9nf ck4tzbx`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1llqm3g c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-accent"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1iv8y8b c6pvryr`} />
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--background-card"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cow0ixc c6pvryr`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Other"}
</Heading>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l`}>
{"--focus-color"}
</Text>
<Box
className={`w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c17o0p2u c6pvryr`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"button-group"}
</Text>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c10zkoym ct8c5y2 c15cml01 c174sw29 c1xf7czk`}>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"button"}
</Link>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"is-button-small"}
</Link>
<Link
className={`w-link c1mtjugd c7rjn6x cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 c1mndk66 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"is-button-secondary"}
</Link>
<Link
className={`w-link c1983xa5 c7nkggm cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 c1ukphsi chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"is-button-Tertiary"}
</Link>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle></svg>"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"button with icon"}
</Text>
</Link>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"link"}
</Text>
<Link
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Link text you can edit"}
</Link>
<Link
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"is-link-nav"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c11nr3ex c11dowh9 c32myit cwrra4i cg5i74l c10r87ok c1dhz37v`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh cl7jefz`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1kol985 c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote cwrra4i c11gzs80 c13qqaub c1mwdnfw cm42med cptxs8s csdfh58`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list"}
</Text>
<List
className={`w-list cwrra4i c1w5x00x cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"separator"}
</Text>
<Separator
className={`w-separator c2uxojo czr2pxy c32myit cwrra4i`} />
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Form"}
</Text>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
className={`w-webhook-form`}>
{(formState === 'initial' || formState === 'error') &&
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c15cml01`}>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1fhkm63 clv8gve c1482uel`}>
<Label
htmlFor={"inputName"}
className={`w-label cl7jefz c1cb3y4c`}>
{"Name"}
</Label>
<Input
placeholder={"Phone"}
required={true}
name={"name"}
id={"inputName"}
className={`w-text-input c1b2tb9q c1xm4ef6 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1fptsc4 cnrz8fp c122t6uk c1a8d7ts c557ax3 cl60rel c2zsigv c1rqinhn c11rjnbe`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1fhkm63 clv8gve c1482uel`}>
<Label
htmlFor={"inputPhone"}
className={`w-label cl7jefz c1cb3y4c`}>
{"Phone"}
</Label>
<Input
placeholder={"Phone"}
required={true}
name={"phone"}
id={"inputPhone"}
className={`w-text-input c1b2tb9q c1xm4ef6 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1fptsc4 cnrz8fp c122t6uk c1a8d7ts c557ax3 cl60rel c2zsigv c1rqinhn c11rjnbe`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1fhkm63 clv8gve c1482uel`}>
<Label
htmlFor={"inputEmail"}
className={`w-label cl7jefz c1cb3y4c`}>
{"Email"}
</Label>
<Input
placeholder={"Email"}
required={true}
type={"email"}
name={"email"}
id={"inputEmail"}
className={`w-text-input c1b2tb9q c1xm4ef6 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1fptsc4 cnrz8fp c122t6uk c1a8d7ts c557ax3 cl60rel c2zsigv c1rqinhn c11rjnbe`} />
</Box>
<Box
className={`w-box cry9bxc c1778y6x c1wt8a7g c1lfjoq7 c1md20bl c1e892th c1fhkm63 clv8gve c1482uel`}>
<Label
htmlFor={"inputMessage"}
className={`w-label cl7jefz c1cb3y4c`}>
{"Message"}
</Label>
<Textarea
placeholder={"Message"}
name={"message"}
required={true}
id={"inputMessage"}
className={`w-text-area c1b2tb9q c1xm4ef6 c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1fptsc4 cnrz8fp c122t6uk c1a8d7ts c557ax3 cl60rel c2zsigv c1rqinhn c11rjnbe`} />
</Box>
</Box>
<Button
className={`w-button cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"Submit"}
</Button>
</Box>
}
{(formState === 'success') &&
<Box
className={`w-box`}>
{"Thank you for getting in touch!"}
</Box>
}
{(formState === 'error') &&
<Box
className={`w-box cle73z7`}>
{"Sorry, something went wrong."}
</Box>
}
</Form>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7`} />
</Box>
</Box>
<Box
id={"radix"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Accordion"}
</Text>
<Accordion
collapsible={true}
defaultValue={"0"}
className={`w-accordion cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 czr2pxy cz5g8eb c9jnjeu c1357293`}>
<AccordionItem
data-ws-index="0"
className={`w-item ca97va1 c1y8xuwk cykbe5u ciht2ag cx6cte2`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1dkse89 cl60rel c1ib9cr2`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Accordion 1"}
</Heading>
<Box
className={`w-box cwdwelg cg4iiql ch2prsz c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"Yes. It adheres to the WAI-ARIA design pattern."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-index="1"
className={`w-item ca97va1 c1y8xuwk cykbe5u ciht2ag cx6cte2`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1dkse89 cl60rel c1ib9cr2`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Accordion 2"}
</Heading>
<Box
className={`w-box cwdwelg cg4iiql ch2prsz c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"Yes. It adheres to the WAI-ARIA design pattern."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
</Accordion>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Navigation Menu"}
</Text>
<Slot>
</Slot>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Sheet"}
</Text>
<Slot>
<Fragment_1>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button cnrz8fp cl8m66n ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cl7jefz c1cb3y4c cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk codg43x c9x99qz cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk cb2iaxq cxrm9n4 covz0n0 c1g7oelg c149s0mc c1mrg60n`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29`}>
<DialogContent
data-ani={"fade"}
className={`w-dialog-content c1fhkm63 cx6c9kw c1a9dz3f colc7hu c174sw29 c1ukpry4 cowwg1a ctgnupg c1i7z02k c5hqtns c4a9xim chekmwa ctiauf2 c1v9i8o6 c15xw1g2`}>
<Box
className={`w-box cx6c9kw c1nd8hlk`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link c5m8ase clv8gve`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/Dynage_Designs_Library_DiG_GCyrEJlUcvUqOEFsG.svg"}
width={150}
height={75}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
className={`w-close-button cnrz8fp cl8m66n ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk codg43x c9x99qz cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c4rd7b9 cb2iaxq cxrm9n4 covz0n0 c1g7oelg c1mrg60n`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box`}>
<Slot>
<Fragment_1>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1e2b3ev ctf8nym c3v2c40 c174sw29 c1rstvfo c10x096o c1565yj9 c1cpmdss`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/about"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"About"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/pricing"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Pricing"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Use Cases"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/blog"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Blog"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/contact"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Contact"}
</Link>
</ListItem>
</List>
</Fragment_1>
</Slot>
</Box>
<Slot>
<Fragment_1>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c12sm2j2 codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"DOWNLOAD APP"}
</Link>
</Fragment_1>
</Slot>
</DialogContent>
</DialogOverlay>
</Dialog>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph`}>
{"Must be on 767 or lower to see it."}
</Paragraph>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Card"}
</Text>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Heading text you can edit"}
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Paragraph
className={`w-paragraph`}>
{"Paragraph text you can edit"}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Link
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Featured Logo"}
</Text>
<Box
className={`w-box copqmak c1s46o9r corcrpm cstj0zg c1vrexag c1cdc69r c1mcu1jn cx6c9kw c174sw29`}>
<Image
className={`w-image c1cydrwa c1fhiulb cy1glqj`} />
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"badge"}
</Text>
<Text
className={`w-text c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1jcu5b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb`}>
{"Badge"}
</Text>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"Table"}
</Text>
<Box
className={`w-box cavd3zn cnt1rez cpekifi cyxns9x c18o2plo`}>
<Box
className={`w-box c1b2tb9q c1mgacbo c1xm4ef6 c7vx2dq copqmak c133lpx4 c14u5o53 cyu6n88 c653p2c ch288gs caklgwa c4nte75 c3uglvb csqmg86 co7opey cafmhox`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cuj80l1 c1lxiyww c1md20bl c1e892th c1e4lql1 cheewmi cc3dq2t`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Lorem"}
</Heading>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h c1qom380 c1lfjoq7 c1md20bl c1e892th`}>
<Text
className={`w-text`}>
{"Free"}
</Text>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h c1qom380 c1lfjoq7 c1md20bl c1e892th`}>
<Text
className={`w-text`}>
{"$20"}
</Text>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h c1qom380 c1lfjoq7 c1md20bl c1e892th`}>
<Text
className={`w-text`}>
{"$999"}
</Text>
</Box>
</Box>
{TableData?.map?.((GroupsItem: any, index_2: number) =>
<Fragment key={index_2}>
<Box
className={`w-box`}>
{(GroupsItem?.value ? true : false) &&
<Box
className={`w-box copqmak c133lpx4 c14u5o53 cyu6n88 c653p2c czn1p8s c4nte75 c3uglvb csqmg86 co7opey cax3zcx cafmhox`}>
<Heading
tag={"h3"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i c12y6bqh cl7jefz`}>
{GroupsItem?.value}
</Heading>
</Box>
}
{GroupsItem?.data?.map?.((ComparisonItem: any, index_1: number) =>
<Fragment key={index_1}>
<Box
className={`w-box cihfpxt c1mgacbo cb4vmi8 c7vx2dq copqmak c133lpx4 c14u5o53 cyu6n88 c4nte75 c3uglvb csqmg86 co7opey cafmhox`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cuj80l1 c1lxiyww c1md20bl c1e892th c1e4lql1 cheewmi`}>
<Tooltip
delayDuration={100}>
<TooltipTrigger>
<Button
aria-label={"Open tooltip"}
type={"button"}
className={`w-button`}>
<Text
className={`w-text`}>
{ComparisonItem?.value}
</Text>
</Button>
</TooltipTrigger>
<TooltipContent
data-ani={"zoom"}
className={`w-tooltip-content`}>
<Text
className={`w-text`}>
{ComparisonItem?.hint}
</Text>
</TooltipContent>
</Tooltip>
</Box>
{ComparisonItem?.items?.map?.((DataItem: any, index: number) =>
<Fragment key={index}>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h c1qom380 c1lfjoq7 c1md20bl c1e892th`}>
{((DataItem?.value === true || DataItem?.value === false || DataItem?.value === 'Coming Soon') ? false : true) &&
<Text
className={`w-text`}>
{DataItem?.value}
</Text>
}
</Box>
</Fragment>
)}
</Box>
</Fragment>
)}
</Box>
</Fragment>
)}
</Box>
</Box>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Text
className={`w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph che9upb c1rco612`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc`}>
<Box
className={`w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7`}>
<Paragraph
className={`w-paragraph`}>
{"The following CSS variables were the modifications or additions made to the default "}
<RichTextLink
href={"https://wstd.us/craft"}
target={"_blank"}
className={`w-rich-text-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Craft"}
</RichTextLink>
{" variables, jyfi."}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-0);\n--foreground-secondary: var(--gray-11);\n--foreground-accent: var(--blue-6);\n--foreground-muted: var(--gray-1);\n--foreground-border: rgba(255, 255, 255, 0.1);\n\n--background-primary: var(--gray-11);\n--background-secondary: rgba(255, 255, 255, 0.1);\n--background-tertiary: var(--gray-0);\n--background-accent: var(--blue-6);\n--background-card: var(--blue-11);\n--background-tertiary: var(--gray-0);\n\n--gap-m: var(--size-fluid-4);\n\n--size-lg: 1246px;\n\n--spacing-default: var(--size-fluid-3);\n\n--blue-6: #0328ee;\n--blue-7: #031FB4;\n--blue-11: #010d50;\n--blue-12: #010725;\n--gray-11: #0b0921;\n--gray-8: #353447;\n--gray-4: #23213b;\n--gray-3: #1c1b2d;\n--gray-1: #d9d9d9;\n--gray-0: #ffffff;"}
className={`w-code-text c2i0393 c19evryj cntnubm c16hrg7f c1qakuu0 czr2pxy cz20ayj cf58xc1`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1sl0nnp c1qakuu0 c47o47j cw5izhw`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lxiyww c1778y6x c18v2pa2 c1z0l37u c1ml0hr7 co39b1z`}>
<Link
href={"/style-guide#layout"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Layout"}
</Link>
<Link
href={"/style-guide#colors"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Colors"}
</Link>
<Link
href={"/style-guide#links-buttons"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Links & Buttons"}
</Link>
<Link
href={"/style-guide#elements"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Elements"}
</Link>
<Link
href={"/style-guide#forms"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Forms"}
</Link>
<Link
href={"/style-guide#radix"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Radix"}
</Link>
<Link
href={"/style-guide#utility"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Utility"}
</Link>
<Link
href={"/style-guide"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Slots"}
</Link>
<Link
href={"/style-guide#custom"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Custom"}
</Link>
<Link
href={"/style-guide#notes"}
className={`w-link cnrz8fp cld4m44 cl60rel c1ib9cr2`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1qyy4dh ct02u4h c1md20bl c1e892th cna0hdz c1mzb2kd`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1rco612 c1qom380 czt9u4x`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box c1yh769p cnu4kgu crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1xzir7e`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n  /* So we don't need to add a token to every paragraph to remove margin. */\n  p {\n    margin: 0;\n  }\n\n  li::marker {\n    color: var(--foreground-accent);\n  }\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<Box
tag={"header"}
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lxiyww c1qyy4dh c18v2pa2 c1z0l37u c1ml0hr7 c15hexcm`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c1s46o9r cdczzub c16a1k66 c1ksohct`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link c5m8ase clv8gve`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/Dynage_Designs_Library_DiG_GCyrEJlUcvUqOEFsG.svg"}
width={150}
height={75}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<Box
tag={"nav"}
className={`w-box cc3dq2t`}>
<Slot>
<Fragment_1>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1e2b3ev ctf8nym c3v2c40 c174sw29 c1rstvfo c10x096o c1565yj9 c1cpmdss`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/about"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"About"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/pricing"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Pricing"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Use Cases"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/blog"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Blog"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/contact"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Contact"}
</Link>
</ListItem>
</List>
</Fragment_1>
</Slot>
</Box>
</Box>
<Box
className={`w-box`}>
<Box
className={`w-box cc3dq2t`}>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h ceu66s9 c12ae6v5 c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 c13uefcm c1nff74r c1krwtqt cknbwh5 c135bl59 c1xf7czk`}>
{"DOWNLOAD"}
<Span
className={`w-text-1 c2yw1lo`}>
{" APP"}
</Span>
</Link>
</Box>
<Slot>
<Fragment_1>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button cnrz8fp cl8m66n ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cl7jefz c1cb3y4c cwvpjlf c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk codg43x c9x99qz cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk cb2iaxq cxrm9n4 covz0n0 c1g7oelg c149s0mc c1mrg60n`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29`}>
<DialogContent
data-ani={"fade"}
className={`w-dialog-content c1fhkm63 cx6c9kw c1a9dz3f colc7hu c174sw29 c1ukpry4 cowwg1a ctgnupg c1i7z02k c5hqtns c4a9xim chekmwa ctiauf2 c1v9i8o6 c15xw1g2`}>
<Box
className={`w-box cx6c9kw c1nd8hlk`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/"}
className={`w-link c5m8ase clv8gve`}>
<Image
loading={"eager"}
alt={"Logo"}
src={"/assets/Dynage_Designs_Library_DiG_GCyrEJlUcvUqOEFsG.svg"}
width={150}
height={75}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
className={`w-close-button cnrz8fp cl8m66n ccfzz03 cub2gss cgcvr98 c1xjllne c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c1xty5yn c1g1x4wk codg43x c9x99qz cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c4rd7b9 cb2iaxq cxrm9n4 covz0n0 c1g7oelg c1mrg60n`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box`}>
<Slot>
<Fragment_1>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc c1z0l37u c1ml0hr7 c1e2b3ev ctf8nym c3v2c40 c174sw29 c1rstvfo c10x096o c1565yj9 c1cpmdss`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/about"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"About"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/pricing"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Pricing"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Use Cases"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/blog"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Blog"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/contact"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Contact"}
</Link>
</ListItem>
</List>
</Fragment_1>
</Slot>
</Box>
<Slot>
<Fragment_1>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c12sm2j2 codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"DOWNLOAD APP"}
</Link>
</Fragment_1>
</Slot>
</DialogContent>
</DialogOverlay>
</Dialog>
</Fragment_1>
</Slot>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box cna0hdz c1mzb2kd cfgetg2`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lfjoq7 cxjshtx c6fi6ij cmaksb1 c1i9o1yp`}>
<Box
className={`w-box cry9bxc c18v2pa2 c1qyy4dh c1e2b3ev c14yifpe c113k288 c1eghq1p c6hjwpc`}>
<Link
href={"/"}
aria-label={"home"}
className={`w-link`}>
<Image
src={"/assets/Dynage_Designs_Library_DiG_GCyrEJlUcvUqOEFsG.svg"}
width={150}
height={75}
alt={"Logo"}
className={`w-image`} />
</Link>
<Box
className={`w-box cry9bxc c1md20bl c1e892th c1lxiyww`}>
<Link
aria-label={"Instagram"}
className={`w-link`}>
<HtmlEmbed
code={"<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"36\" height=\"36\" rx=\"18\" fill=\"white\" fill-opacity=\"0.5\"></rect>\n<path d=\"M18.0223 12.8438C15.1652 12.8438 12.8884 15.1652 12.8884 17.9777C12.8884 20.8348 15.1652 23.1116 18.0223 23.1116C20.8348 23.1116 23.1562 20.8348 23.1562 17.9777C23.1562 15.1652 20.8348 12.8438 18.0223 12.8438ZM18.0223 21.3259C16.192 21.3259 14.6741 19.8527 14.6741 17.9777C14.6741 16.1473 16.1473 14.6741 18.0223 14.6741C19.8527 14.6741 21.3259 16.1473 21.3259 17.9777C21.3259 19.8527 19.8527 21.3259 18.0223 21.3259ZM24.5402 12.6652C24.5402 11.9955 24.0045 11.4598 23.3348 11.4598C22.6652 11.4598 22.1295 11.9955 22.1295 12.6652C22.1295 13.3348 22.6652 13.8705 23.3348 13.8705C24.0045 13.8705 24.5402 13.3348 24.5402 12.6652ZM27.933 13.8705C27.8438 12.2634 27.4866 10.8348 26.3259 9.67411C25.1652 8.51339 23.7366 8.15625 22.1295 8.06696C20.4777 7.97768 15.5223 7.97768 13.8705 8.06696C12.2634 8.15625 10.8795 8.51339 9.67411 9.67411C8.51339 10.8348 8.15625 12.2634 8.06696 13.8705C7.97768 15.5223 7.97768 20.4777 8.06696 22.1295C8.15625 23.7366 8.51339 25.1205 9.67411 26.3259C10.8795 27.4866 12.2634 27.8438 13.8705 27.933C15.5223 28.0223 20.4777 28.0223 22.1295 27.933C23.7366 27.8438 25.1652 27.4866 26.3259 26.3259C27.4866 25.1205 27.8438 23.7366 27.933 22.1295C28.0223 20.4777 28.0223 15.5223 27.933 13.8705ZM25.7902 23.8705C25.4777 24.7634 24.7634 25.433 23.9152 25.7902C22.5759 26.3259 19.4509 26.192 18.0223 26.192C16.5491 26.192 13.4241 26.3259 12.1295 25.7902C11.2366 25.433 10.567 24.7634 10.2098 23.8705C9.67411 22.5759 9.80804 19.4509 9.80804 17.9777C9.80804 16.5491 9.67411 13.4241 10.2098 12.0848C10.567 11.2366 11.2366 10.567 12.1295 10.2098C13.4241 9.67411 16.5491 9.80804 18.0223 9.80804C19.4509 9.80804 22.5759 9.67411 23.9152 10.2098C24.7634 10.5223 25.433 11.2366 25.7902 12.0848C26.3259 13.4241 26.192 16.5491 26.192 17.9777C26.192 19.4509 26.3259 22.5759 25.7902 23.8705Z\" fill=\"white\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"Facebook"}
className={`w-link`}>
<HtmlEmbed
code={"<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"36\" height=\"36\" rx=\"18\" fill=\"white\" fill-opacity=\"0.5\"></rect>\n<path d=\"M25.8571 8H10.1429C8.9375 8 8 8.98214 8 10.1429V25.8571C8 27.0625 8.9375 28 10.1429 28H16.2589V21.2143H13.4464V18H16.2589V15.5893C16.2589 12.8214 17.9107 11.2589 20.4107 11.2589C21.6607 11.2589 22.9107 11.4821 22.9107 11.4821V14.2054H21.5268C20.1429 14.2054 19.6964 15.0536 19.6964 15.9464V18H22.7768L22.2857 21.2143H19.6964V28H25.8571C27.0179 28 28 27.0625 28 25.8571V10.1429C28 8.98214 27.0179 8 25.8571 8Z\" fill=\"white\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"LinkedIn"}
className={`w-link`}>
<HtmlEmbed
code={"<svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"36\" height=\"36\" rx=\"18\" fill=\"white\" fill-opacity=\"0.5\"></rect>\n<path d=\"M12.4743 28V14.6219H8.3132V28H12.4743ZM10.3714 12.8322C11.7136 12.8322 12.7875 11.7136 12.7875 10.3714C12.7875 9.07383 11.7136 8 10.3714 8C9.07383 8 8 9.07383 8 10.3714C8 11.7136 9.07383 12.8322 10.3714 12.8322ZM28.0447 28V20.6622C28.0447 17.0828 27.2394 14.3087 23.0336 14.3087C21.0201 14.3087 19.6779 15.4273 19.0962 16.4564H19.0515V14.6219H15.0694V28H19.2304V21.3781C19.2304 19.6331 19.5436 17.9776 21.6913 17.9776C23.8389 17.9776 23.8837 19.9463 23.8837 21.5123V28H28.0447Z\" fill=\"white\"></path>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c18v2pa2 ca4qjwu c1cdc69r c1jjfh4b`}>
<Box
tag={"nav"}
aria-labelledby={"footerMenuTitle"}
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h2"}
id={"footerMenuTitle"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Menu"}
</Heading>
<Separator
className={`w-separator c2uxojo czr2pxy c32myit cwrra4i`} />
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 copqmak c1s46o9r c1117wcl cevxs5e co2qwzx c1vrexag ce07h1k ctf8nym c1y4fwd4 cx6c9kw c174sw29`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/about"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"About"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/pricing"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Pricing"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Use Cases"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/blog"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Blog"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/contact"}
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Contact"}
</Link>
</ListItem>
</List>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c7rjn6x c6oj68y c15hexcm`}>
<Heading
tag={"h2"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"DOWNLOAD OUR APPLICATION"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer"}
</Paragraph>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c10zkoym ct8c5y2 c15cml01 c174sw29 c1xf7czk`}>
<Slot>
<Fragment_1>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
<HtmlEmbed
code={"<svg width=\"23\" height=\"28\" viewBox=\"0 0 23 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2_792)\">\n<path d=\"M2.89196 24.0589C3.90895 25.5229 5.29949 27.5247 7.09357 27.5247V27.5212H7.18498C7.86984 27.4777 8.53946 27.2985 9.15543 26.9938H9.17267C9.95229 26.6126 10.8069 26.4128 11.6735 26.4091C12.5034 26.4182 13.3208 26.6135 14.0664 26.9808H14.0716C14.6946 27.297 15.38 27.4686 16.0774 27.483H16.1792C17.9841 27.456 19.1378 25.9391 20.3451 24.1093C21.1739 22.9142 21.8163 21.5984 22.25 20.2076V20.2006C21.5704 19.9123 20.9494 19.5 20.4184 18.9843C19.832 18.4268 19.3666 17.7531 19.0513 17.0055C18.7361 16.2579 18.578 15.4525 18.5868 14.6403C18.6038 13.5861 18.8836 12.5531 19.4003 11.6361C19.9169 10.7192 20.654 9.94782 21.5438 9.39272C20.9766 8.57776 20.2289 7.90699 19.3599 7.43351C18.4909 6.96002 17.5245 6.6968 16.537 6.66468C16.3724 6.64991 16.2249 6.64209 16.0989 6.64209C15.0096 6.71105 13.9425 6.98387 12.9523 7.4466H12.9316C12.4223 7.69534 11.8757 7.8574 11.3139 7.92618C10.7214 7.86295 10.1448 7.6944 9.61074 7.42836H9.59177C8.73578 7.01905 7.80992 6.7787 6.86419 6.72029H6.78658C5.63538 6.75676 4.51323 7.0933 3.52964 7.69705C2.54603 8.3008 1.73459 9.15114 1.17449 10.1651C0.0454163 12.4 -0.282374 14.9595 0.246607 17.41C0.663483 19.7825 1.5618 22.0428 2.88536 24.0494L2.89196 24.0589Z\" fill=\"white\"></path>\n<path d=\"M11.1 6.344C11.1888 6.35197 11.278 6.35546 11.3674 6.35443C12.0994 6.31719 12.8156 6.12494 13.4691 5.79023C14.1225 5.4555 14.6986 4.98583 15.1599 4.41178C16.1821 3.18276 16.6844 1.59846 16.5586 0C15.0035 0.163702 13.5667 0.911959 12.5349 2.09555C11.5165 3.26402 11.0003 4.79218 11.1 6.344Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_792\">\n<rect width=\"23\" height=\"28\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
{"App Store"}
</Link>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
<HtmlEmbed
code={"<svg width=\"23\" height=\"26\" viewBox=\"0 0 23 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_2_803)\">\n<path d=\"M16.5185 16.5949L13.0659 13.1357L1.64105 24.7384C1.75026 24.6972 1.85613 24.6476 1.9577 24.59L16.5185 16.5949Z\" fill=\"white\"></path>\n<path d=\"M0.00850522 1.94011C0.0144238 3.35543 0.107148 22.2237 0.116026 23.4134C0.0902982 23.6611 0.125802 23.9113 0.219399 24.142C0.312996 24.3725 0.4618 24.5765 0.652648 24.7357L12.5668 12.6372L0.600367 0.643555C0.393848 0.785546 0.229684 0.981195 0.125431 1.20957C0.0211803 1.43795 -0.0192362 1.69047 0.00850522 1.94011Z\" fill=\"white\"></path>\n<path d=\"M17.1586 8.98096L13.5612 12.6341L17.1626 16.2417L22.1126 13.5229C22.7044 13.1952 23.3338 12.3599 22.1126 11.6918L17.1586 8.98096Z\" fill=\"white\"></path>\n<path d=\"M1.95769 0.659347C1.79957 0.5753 1.62735 0.521278 1.44968 0.5L13.063 12.1343L16.5155 8.62869L1.95769 0.659347Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_803\">\n<rect width=\"23\" height=\"25\" fill=\"white\" transform=\"translate(0 0.5)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
{"Play Store"}
</Link>
</Fragment_1>
</Slot>
</Box>
</Box>
</Box>
</Box>
<Separator
className={`w-separator c2uxojo czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box cry9bxc c1qyy4dh c18v2pa2`}>
<Text
className={`w-text`}>
{"© 2025  Mastapay, Inc."}
</Text>
<Box
className={`w-box`}>
<Link
className={`w-link cnrz8fp csru8nn ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1knsirz cl60rel c1ib9cr2 c12mjb61 c16ndgv7 c1tplt1u`}>
{"Privacy Policy"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    