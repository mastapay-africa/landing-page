/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Box as Box, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Button as Button, Image as Image, Heading as Heading, Paragraph as Paragraph, Slot as Slot, Separator as Separator, Text as Text, Span as Span, List as List, ListItem as ListItem } from "@webstudio-is/sdk-components-react";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";
import { Link as Link, Body as Body } from "@webstudio-is/sdk-components-react-router";


      export const projectId = "4d691365-d09b-47bd-b9f9-5e55af3f3997";

      export const lastPublished = "2025-04-21T05:33:55.674Z";

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
return <Body
className={`w-body`}>
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
className={`w-box cfvl0bs c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1qyy4dh c1wt8a7g c1qom380 cq4dxli czqy8m4 c10x096o`}>
<Heading
tag={"h1"}
className={`w-heading c11nr3ex c11dowh9 c32myit cwrra4i cg5i74l c10r87ok c1dhz37v`}>
{"About Mastapay"}
</Heading>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae dolor non aliquam. Malesuada."}
</Paragraph>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"What drives Finance Flow?"}
</Heading>
<Box
className={`w-box cry9bxc c1lfjoq7 cdczzub c1s46o9r`}>
<Box
className={`w-box copqmak c1s46o9r cevxs5e co2qwzx c1vrexag c1cdc69r cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lxiyww c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"69\" viewBox=\"0 0 68 69\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect y=\"0.984375\" width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_896)\">\n<path d=\"M34.2334 41.1177C26.9127 41.1177 20.7358 42.3139 20.7358 46.9308C20.7358 51.5495 26.9526 52.7037 34.2334 52.7037C41.5541 52.7037 47.731 51.5075 47.731 46.8906C47.731 42.2719 41.5142 41.1177 34.2334 41.1177Z\" fill=\"white\"></path>\n<path opacity=\"0.4\" d=\"M34.2334 36.7191C39.1905 36.7191 43.1653 32.7214 43.1653 27.7358C43.1653 22.7482 39.1905 18.7524 34.2334 18.7524C29.2763 18.7524 25.3015 22.7482 25.3015 27.7358C25.3015 32.7214 29.2763 36.7191 34.2334 36.7191Z\" fill=\"white\"></path>\n<path opacity=\"0.4\" d=\"M53.6255 29.8277C54.908 24.7828 51.1479 20.252 46.3599 20.252C45.8393 20.252 45.3415 20.3093 44.8551 20.4067C44.7905 20.422 44.7183 20.4545 44.6803 20.5118C44.6366 20.5845 44.6689 20.6819 44.7164 20.745C46.1547 22.7744 46.9812 25.2452 46.9812 27.8976C46.9812 30.4392 46.2231 32.8087 44.8931 34.7751C44.7563 34.9777 44.8779 35.2509 45.1192 35.293C45.4536 35.3522 45.7956 35.3828 46.1452 35.3923C49.6317 35.4841 52.761 33.2272 53.6255 29.8277Z\" fill=\"white\"></path>\n<path d=\"M57.2782 41.7058C56.6398 40.3375 55.0989 39.3993 52.7562 38.9387C51.6504 38.6674 48.6579 38.2852 45.8744 38.3368C45.8326 38.3425 45.8098 38.3712 45.806 38.3903C45.8003 38.417 45.8117 38.4629 45.8668 38.4916C47.1531 39.1317 52.1254 41.916 51.5003 47.7883C51.4737 48.0424 51.677 48.2622 51.9297 48.224C53.1533 48.0482 56.3016 47.3679 57.2782 45.2486C57.8178 44.1288 57.8178 42.8275 57.2782 41.7058Z\" fill=\"white\"></path>\n<path opacity=\"0.4\" d=\"M23.8269 20.4072C23.3424 20.3079 22.8427 20.2524 22.3221 20.2524C17.5342 20.2524 13.7741 24.7833 15.0585 29.8282C15.9211 33.2277 19.0504 35.4845 22.5368 35.3928C22.8864 35.3833 23.2303 35.3508 23.5628 35.2935C23.8041 35.2514 23.9257 34.9781 23.7889 34.7756C22.4589 32.8073 21.7008 30.4397 21.7008 27.8981C21.7008 25.2438 22.5292 22.773 23.9675 20.7455C24.0131 20.6824 24.0473 20.5849 24.0017 20.5123C23.9637 20.4531 23.8934 20.4225 23.8269 20.4072Z\" fill=\"white\"></path>\n<path d=\"M15.9262 38.9376C13.5835 39.3982 12.0445 40.3364 11.4061 41.7047C10.8646 42.8264 10.8646 44.1277 11.4061 45.2495C12.3827 47.3668 15.531 48.049 16.7546 48.2229C17.0073 48.2611 17.2087 48.0433 17.1821 47.7872C16.557 41.9168 21.5293 39.1326 22.8175 38.4924C22.8707 38.4618 22.8821 38.4179 22.8764 38.3892C22.8726 38.3701 22.8517 38.3414 22.8099 38.3376C20.0245 38.2841 17.0339 38.6663 15.9262 38.9376Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_896\">\n<rect width=\"47\" height=\"35\" fill=\"white\" transform=\"translate(11 17.9844)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Business Focus"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"69\" viewBox=\"0 0 68 69\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect y=\"0.984375\" width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_909)\">\n<path d=\"M59.4875 34.7281C59.4875 48.9574 47.973 60.4719 33.7437 60.4719C19.5145 60.4719 8 48.9574 8 34.7281C8 20.4989 19.5145 8.98438 33.7437 8.98438C36.7862 8.98438 39.735 9.49925 42.4498 10.4822C52.3728 14.0395 59.4875 23.5413 59.4875 34.7281Z\" fill=\"white\" fill-opacity=\"0.4\"></path>\n<path d=\"M58.9726 29.5327C57.1472 20.6863 50.7815 13.478 42.4498 10.4824C42.403 10.4824 42.3562 10.4355 42.3562 10.4355L42.4498 15.3971C42.4498 16.6608 41.7009 17.831 40.5308 18.3459C37.9564 19.4693 35.382 18.8608 34.3055 21.8096C33.4161 24.0095 35.7565 30.0476 38.6117 30.0476C42.2158 30.0476 43.9477 22.7926 45.0242 22.7926C45.7263 22.7926 46.8029 24.9925 48.0667 26.6307C48.9092 27.7541 50.2198 28.3626 51.624 28.3626H54.0111L58.9726 29.5327Z\" fill=\"white\"></path>\n<path d=\"M38.3308 40.3448C37.0202 42.1702 43.9008 47.7402 46.1943 46.6637C50.0793 44.8382 52.6068 41.0469 52.6068 39.6427C52.6068 38.2384 50.7814 35.5237 44.5561 39.7363C42.8242 41 39.6882 38.4725 38.3308 40.3448Z\" fill=\"white\"></path>\n<path d=\"M27.8929 35.243C29.2503 33.8856 29.6715 31.7793 28.9694 30.5623C26.7227 26.4901 21.3867 28.6433 20.8719 32.9027C20.591 35.4771 19.0464 38.0982 17.7358 39.4556C16.4252 40.7662 13.8508 40.0641 13.1487 38.145C12.353 35.9919 15.1146 35.1962 14.6934 32.4346C14.5998 31.6857 13.804 31.3112 12.8211 31.1708L8.18723 31.3581C8.09361 32.4346 8 33.558 8 34.7281C8 47.0383 16.6125 57.3358 28.1737 59.8634V55.2763C28.1737 55.2763 28.1737 55.2763 27.0036 54.1062C25.8334 52.936 28.2205 50.9701 28.8758 48.4893C30.7013 41.4683 24.6164 41.1875 24.4292 39.6429C24.242 37.911 26.5355 36.6004 27.8929 35.243Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_909\">\n<rect width=\"52\" height=\"52\" fill=\"white\" transform=\"translate(8 8.98438)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Worldwide"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"69\" viewBox=\"0 0 68 69\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect y=\"0.984375\" width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_920)\">\n<path d=\"M31.2599 51.8023C41.7081 51.8023 50.1782 43.2791 50.1782 32.7652C50.1782 22.2513 41.7081 13.7281 31.2599 13.7281C20.8116 13.7281 12.3416 22.2513 12.3416 32.7652C12.3416 43.2791 20.8116 51.8023 31.2599 51.8023Z\" fill=\"white\"></path>\n<path opacity=\"0.4\" d=\"M53.4258 57.6296C52.6909 57.6058 51.9921 57.3035 51.4694 56.7831L46.9893 51.5464C46.0288 50.668 45.9502 49.1752 46.8132 48.1996C47.2171 47.7909 47.7663 47.5611 48.3392 47.5611C48.912 47.5611 49.4612 47.7909 49.8652 48.1996L55.4996 52.7079C56.3112 53.5386 56.5616 54.7718 56.139 55.8563C55.7163 56.9408 54.6996 57.674 53.5432 57.7281L53.4258 57.6296Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_920\">\n<rect width=\"45\" height=\"45\" fill=\"white\" transform=\"translate(12 12.9844)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Transparent"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"69\" viewBox=\"0 0 68 69\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect y=\"0.984375\" width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_22_6911)\">\n<path opacity=\"0.4\" d=\"M56.1314 34.7281C56.1314 47.0928 46.1084 57.1158 33.7437 57.1158C21.3789 57.1158 11.356 47.0928 11.356 34.7281C11.356 22.3656 21.3789 12.3403 33.7437 12.3403C46.1084 12.3403 56.1314 22.3656 56.1314 34.7281Z\" fill=\"white\"></path>\n<path d=\"M42.3848 27.3512L38.758 38.8137C38.6237 39.2838 38.2431 39.6644 37.7729 39.801L26.3552 43.3808C25.594 43.6293 24.8552 42.8882 25.1015 42.1271L28.6835 30.6422C28.8179 30.172 29.1984 29.8138 29.6686 29.6571L41.1311 26.0751C41.9147 25.8288 42.6311 26.5676 42.3848 27.3512Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_22_6911\">\n<rect width=\"46\" height=\"46\" fill=\"white\" transform=\"translate(11 11.9844)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Community Driven"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w copqmak c1lfjoq7 c1vrexag c1wt8a7g c1s46o9r c1cdc69r cevxs5e co2qwzx cx6c9kw c174sw29`}>
<Box
className={`w-box c6oj68y cry9bxc c1lfjoq7 ca4qjwu c1cdc69r`}>
<Box
className={`w-box`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Our mission"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu."}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Vulpitate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharaltra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Our story"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu."}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Vulpitate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharaltra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box`}>
<Image
src={"/assets/planet_(1)_tK69a7zIDk3CZrwAn_VUk.webp"}
width={1310}
height={1266}
alt={"Globe"}
className={`w-image`} />
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w copqmak c1lfjoq7 c1vrexag c1wt8a7g c1s46o9r c1cdc69r c1q7flhk co2qwzx cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cuj80l1 cq4dxli czqy8m4 c10x096o`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Timeline"}
</Heading>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7`}>
<Box
className={`w-box cry9bxc c16xs6ny c1wt8a7g ca4qjwu c1cdc69r cdsjpcc ca97va1 c1y8xuwk cykbe5u ciht2ag cx6cte2`}>
<Box
className={`w-box`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"24\" height=\"24\" rx=\"12\" fill=\"white\"></rect>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh c1nk3tgl`}>
{"2024"}
</Heading>
<Text
className={`w-text c160atll c11dowh9 c32myit cwrra4i c12y6bqh cl7jefz`}>
{"ANNOUNCEMENT"}
</Text>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c16xs6ny c1wt8a7g ca4qjwu c1cdc69r cdsjpcc ca97va1 c1y8xuwk cykbe5u ciht2ag cx6cte2`}>
<Box
className={`w-box`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"24\" height=\"24\" rx=\"12\" fill=\"white\"></rect>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh c1nk3tgl`}>
{"2025"}
</Heading>
<Text
className={`w-text c160atll c11dowh9 c32myit cwrra4i c12y6bqh cl7jefz`}>
{"ANNOUNCEMENT"}
</Text>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c16xs6ny c1wt8a7g ca4qjwu c1cdc69r cdsjpcc ca97va1 c1y8xuwk cykbe5u ciht2ag cx6cte2`}>
<Box
className={`w-box`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"24\" height=\"24\" rx=\"12\" fill=\"white\"></rect>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh c1nk3tgl`}>
{"2027"}
</Heading>
<Text
className={`w-text c160atll c11dowh9 c32myit cwrra4i c12y6bqh cl7jefz`}>
{"ANNOUNCEMENT"}
</Text>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c16xs6ny c1wt8a7g ca4qjwu c1cdc69r cdsjpcc ca97va1 c1y8xuwk cykbe5u ciht2ag cx6cte2`}>
<Box
className={`w-box`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"24\" height=\"24\" rx=\"12\" fill=\"white\"></rect>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh c1nk3tgl`}>
{"2030"}
</Heading>
<Text
className={`w-text c160atll c11dowh9 c32myit cwrra4i c12y6bqh cl7jefz`}>
{"ANNOUNCEMENT"}
</Text>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c1qyy4dh c18v2pa2 cuj80l1 cq4dxli czqy8m4 c10x096o c174sw29`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Our Team"}
</Heading>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Parturient lorem purus justo, ultricies."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1s46o9r cejtdrx co2qwzx c1vrexag c1cdc69r cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Image
alt={"John Carter, CEO & Co-Founder"}
src={"/assets/Rectangle_2_3-mLAJMDpKlShtHF8zV9r.png"}
width={654}
height={800}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"John Carter"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"CEO & Co-Founder"}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Image
alt={"Sophie Moore, Community Lead"}
src={"/assets/lukmon-abdulsalam_IFZb8WUpBPqdWyTPn3WIp.jpg"}
width={3216}
height={1528}
className={`w-image cc0tcse c1gxuxwl c1w14gb3 c7ylbzb c5u7r4m c1h5pqsu`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"Lukmon Abdulsalam"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"CTO"}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Image
alt={"Alex Turner, Operations"}
src={"/assets/Rectangle_2_(2)_flLnSLUZXqQ2ChgXESfKG.png"}
width={654}
height={800}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"Abdulqudus Akinsanya"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Operations"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1qyy4dh c1wt8a7g c1qom380 cq4dxli czqy8m4 c10x096o`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Investors"}
</Heading>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1s46o9r cori9ti cstj0zg c1vrexag c1cdc69r cx6c9kw c1mpedrw c1jjfh4b c1rstvfo c1bulmrh`}>
<Image
src={"/assets/a-4_qUdIB7WvUjOKOp5t_E8wT.svg"}
width={184}
height={33}
alt={"Company logo"}
className={`w-image c1cydrwa c1fhiulb cy1glqj`} />
<Image
src={"/assets/a-3__0-sV_ygL_8lSvSmB0MNj.svg"}
width={185}
height={33}
alt={"Company logo"}
className={`w-image c1cydrwa c1fhiulb cy1glqj`} />
<Image
src={"/assets/a-1_Uk33A56sm6ACkCMTCwjl0.svg"}
width={185}
height={33}
alt={"Company logo"}
className={`w-image c1cydrwa c1fhiulb cy1glqj`} />
<Image
src={"/assets/a_MIv_KJ4FNcIjUD3t-uUC0.svg"}
width={184}
height={33}
alt={"Company logo"}
className={`w-image c1cydrwa c1fhiulb cy1glqj`} />
</Box>
</Box>
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
    