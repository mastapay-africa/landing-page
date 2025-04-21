/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Button as Button, Slot as Slot, Heading as Heading, Paragraph as Paragraph, Image as Image, Separator as Separator, Text as Text, Vimeo as Vimeo, VimeoPreviewImage as VimeoPreviewImage, VimeoSpinner as VimeoSpinner, VimeoPlayButton as VimeoPlayButton, Span as Span, List as List, ListItem as ListItem } from "@webstudio-is/sdk-components-react";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


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

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

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
className={`w-box cna0hdz c1mzb2kd cdtylqg chmjof8 cavd3zn`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w copqmak c1lfjoq7 c1vrexag c1wt8a7g ceu66s9 c1cdc69r c109i5bh co2qwzx cavd3zn cx6c9kw c174sw29 cvf6exy`}>
<Image
src={"/assets/bg-circle-full-dark_4JkvxuV5WnVfe1KJdFZA7.svg"}
width={1282}
height={1282}
alt={"\"\""}
className={`w-image cdwd3jx c1u3iqu9 coipioj c7uhlu c7oq1d0 cuf9c1i c1o373d6 c1gjpn04 c1dnch4g c1482uel cqtg27u`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1s46o9r cdczzub c16xs6ny ct02u4h`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h1"}
className={`w-heading c11nr3ex c11dowh9 c32myit cwrra4i cg5i74l c10r87ok c1dhz37v c141ap1f`}>
{"Your Configurable Business Banking"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fugiat nulla suspendisse tortor aenean dis placerat."}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c10zkoym ct8c5y2 c15cml01 c174sw29 c1xf7czk`}>
<Slot>
<Fragment_1>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c12sm2j2 codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"DOWNLOAD APP"}
</Link>
</Fragment_1>
</Slot>
<Link
href={"/pricing"}
className={`w-link c1mtjugd c7rjn6x cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p codg43x cl60rel c1ib9cr2 c1mndk66 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"VIEW PRICING"}
</Link>
</Box>
</Box>
<Box
className={`w-box`}>
<Image
src={"/assets/Apple_Computers-2_08IXNnFd2R5ZxlCFbR0o0.svg"}
width={971}
height={585}
className={`w-image cdwd3jx chdlss8 c1mofqpp czr2pxy cuf9c1i cimc1rz cpxs833 c17jj8qr cc6x7mz`} />
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Paragraph
className={`w-paragraph c1qom380`}>
{"Mastapay has been featured on"}
</Paragraph>
<Box
className={`w-box copqmak c1s46o9r cori9ti cstj0zg c1vrexag c1cdc69r cl5hb04 c174sw29 cas7ks9 c7klx50 c12jt7do c1qrxaqp c2zcut6 c1ssuqsl cweujky`}>
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
src={"/assets/a-2_HTb7-f_tDuXdwl_q7VSAY.svg"}
width={184}
height={33}
alt={"Company logo"}
className={`w-image c1cydrwa c1fhiulb cy1glqj`} />
<Image
src={"/assets/a-1_Uk33A56sm6ACkCMTCwjl0.svg"}
width={185}
height={33}
alt={"Company logo"}
className={`w-image c1cydrwa c1fhiulb cy1glqj`} />
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub cavd3zn`}>
<Image
src={"/assets/bg-circle-full-dark_4JkvxuV5WnVfe1KJdFZA7.svg"}
width={1282}
height={1282}
className={`w-image cdwd3jx c5xg3qf c19enfhc c1u3iqu9 cz3mbmv c1o373d6 c1dnch4g cfk9cie c1482uel cqtg27u`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1qyy4dh c1wt8a7g c1qom380 cq4dxli czqy8m4 c10x096o`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Grow your business"}
</Heading>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c10zkoym cejtdrx co2qwzx c1vrexag ct8c5y2 cx6c9kw c174sw29 c1ciuywf`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"68\" viewBox=\"0 0 68 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g opacity=\"0.84992\" clip-path=\"url(#clip0_2_515)\">\n<path opacity=\"0.4\" d=\"M15.7513 22.5122H39.5485C40.6494 22.5122 41.5429 23.4052 41.5429 24.5055C41.5429 25.6057 40.6494 26.4988 39.5485 26.4988H15.7513C14.6504 26.4988 13.7569 25.6057 13.7569 24.5055C13.7569 23.4052 14.6504 22.5122 15.7513 22.5122Z\" fill=\"white\"></path>\n<mask id=\"mask0_2_515\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"37\" y=\"14\" width=\"18\" height=\"22\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.4186 35.4653V14H54.5797V35.4653H37.4186Z\" fill=\"white\"></path>\n</mask>\n<g mask=\"url(#mask0_2_515)\">\n<path d=\"M38.7655 14.1832C39.017 14.1832 39.2648 14.2532 39.4838 14.3896L53.7361 23.3658C54.1276 23.6135 54.3665 24.0425 54.3665 24.5055C54.3665 24.9686 54.1276 25.3977 53.7361 25.6453L39.4838 34.6215C39.069 34.8818 38.5446 34.898 38.1154 34.6592C37.6844 34.4223 37.4186 33.9718 37.4186 33.4818V15.5294C37.4186 15.0394 37.6844 14.5889 38.1154 14.3519C38.3183 14.2389 38.5428 14.1832 38.7655 14.1832Z\" fill=\"white\"></path>\n</g>\n<path opacity=\"0.4\" d=\"M52.3188 46.059H28.5216C27.4206 46.059 26.5272 45.1659 26.5272 44.0657C26.5272 42.9653 27.4206 42.0724 28.5216 42.0724H52.3188C53.4197 42.0724 54.3132 42.9653 54.3132 44.0657C54.3132 45.1659 53.4197 46.059 52.3188 46.059Z\" fill=\"white\"></path>\n<mask id=\"mask1_2_515\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"13\" y=\"33\" width=\"18\" height=\"22\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.5156 33.1058V54.5711H13.3544V33.1058H30.5156Z\" fill=\"white\"></path>\n</mask>\n<g mask=\"url(#mask1_2_515)\">\n<path d=\"M29.1686 54.3878C28.9172 54.3878 28.6694 54.3178 28.4503 54.1815L14.1981 45.2053C13.8065 44.9575 13.5677 44.5286 13.5677 44.0655C13.5677 43.6025 13.8065 43.1734 14.1981 42.9258L28.4503 33.9496C28.8652 33.6893 29.3896 33.6732 29.8187 33.9118C30.2498 34.1488 30.5156 34.5993 30.5156 35.0893V53.0418C30.5156 53.5317 30.2498 53.9822 29.8187 54.2191C29.6158 54.3322 29.3913 54.3878 29.1686 54.3878Z\" fill=\"white\"></path>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_2_515\">\n<rect width=\"42\" height=\"41\" fill=\"white\" transform=\"translate(13 14)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Send & Receive"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"68\" viewBox=\"0 0 68 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g opacity=\"0.84992\" clip-path=\"url(#clip0_2_533)\">\n<path opacity=\"0.4\" d=\"M43.7177 13H24.3709C17.3205 13 13.326 16.9946 13.326 24.0448V43.3733C13.326 50.4237 17.3205 54.4183 24.3709 54.4183H43.7177C50.7681 54.4183 54.7442 50.4237 54.7442 43.3733V24.0448C54.7442 16.9946 50.7681 13 43.7177 13Z\" fill=\"white\"></path>\n<path d=\"M24.4439 28.2605C23.5051 28.2605 22.7319 29.0336 22.7319 29.9908V44.2203C22.7319 45.1591 23.5051 45.9322 24.4439 45.9322C25.4011 45.9322 26.1743 45.1591 26.1743 44.2203V29.9908C26.1743 29.0336 25.4011 28.2605 24.4439 28.2605Z\" fill=\"white\"></path>\n<path d=\"M34.1083 21.4677C33.1695 21.4677 32.3964 22.2408 32.3964 23.198V44.22C32.3964 45.1589 33.1695 45.9321 34.1083 45.9321C35.0655 45.9321 35.8386 45.1589 35.8386 44.22V23.198C35.8386 22.2408 35.0655 21.4677 34.1083 21.4677Z\" fill=\"white\"></path>\n<path d=\"M43.6438 35.771C42.6866 35.771 41.9134 36.5442 41.9134 37.5014V44.2203C41.9134 45.1592 42.6866 45.9323 43.6253 45.9323C44.5825 45.9323 45.3557 45.1592 45.3557 44.2203V37.5014C45.3557 36.5442 44.5825 35.771 43.6438 35.771Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_533\">\n<rect width=\"42\" height=\"42\" fill=\"white\" transform=\"translate(13 13)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"100% Secure Wallet"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cdsjpcc c1fd0kk1 cl8xzcs c11gzs80 cgl7u82 crlid6h caoqbwa c1aguln c1jcu5b ctomwfy colzpbp c11pm1bh c17ln3hy`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"iOS & Android App"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque."}
</Paragraph>
</Box>
<Image
src={"/assets/iPhones_RMHqG3u0c1XkKbuwCsLgU.svg"}
width={355}
height={441}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"68\" viewBox=\"0 0 68 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g opacity=\"0.84992\" clip-path=\"url(#clip0_2_543)\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M54.0855 26.1618H45.173C41.0255 26.1691 37.6655 29.4375 37.658 33.472C37.6524 37.5156 41.0161 40.7985 45.173 40.804H54.093V41.4464C54.093 48.5 49.807 52.6709 42.5539 52.6709H23.541C16.286 52.6709 12 48.5 12 41.4464V26.0836C12 19.03 16.286 14.8754 23.541 14.8754H42.5464C49.7995 14.8754 54.0855 19.03 54.0855 26.0836V26.1618ZM21.9751 26.1454H33.8454H33.8528H33.8678C34.7565 26.1418 35.4748 25.4374 35.4711 24.5712C35.4673 23.7068 34.7414 23.008 33.8528 23.0116H21.9751C21.0921 23.0153 20.3756 23.7123 20.3719 24.5731C20.3681 25.4374 21.0865 26.1418 21.9751 26.1454Z\" fill=\"white\"></path>\n<path opacity=\"0.4\" d=\"M41.5438 34.3961C41.984 36.3934 43.7392 37.7986 45.7431 37.7621H52.583C53.4167 37.7621 54.0931 37.0732 54.0931 36.2216V30.906C54.0912 30.0563 53.4167 29.3656 52.583 29.3638H45.582C43.3026 29.3711 41.4616 31.2587 41.4652 33.5848C41.4652 33.8572 41.492 34.1294 41.5438 34.3961Z\" fill=\"white\"></path>\n<path d=\"M45.6742 35.6629C46.8365 35.6629 47.7788 34.7228 47.7788 33.5631C47.7788 32.4035 46.8365 31.4634 45.6742 31.4634C44.5118 31.4634 43.5695 32.4035 43.5695 33.5631C43.5695 34.7228 44.5118 35.6629 45.6742 35.6629Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_543\">\n<rect width=\"43\" height=\"39\" fill=\"white\" transform=\"translate(12 14)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Configurable Promose"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<HtmlEmbed
code={"<svg width=\"68\" height=\"68\" viewBox=\"0 0 68 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"68\" height=\"68\" rx=\"20\" fill=\"#0328EE\"></rect>\n<g opacity=\"0.84992\">\n<path d=\"M48.6973 19.5031C46.2007 16.491 42.8316 14.3197 39.05 13.2855C35.2685 12.2514 31.2586 12.4048 27.5677 13.7249C23.877 15.045 20.6851 17.4674 18.4278 20.6614C16.1705 23.8556 14.9579 27.6656 14.9554 31.5716V36.7537\" stroke=\"white\" stroke-opacity=\"0.4\" stroke-width=\"4.92496\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M21.0117 47.7568C23.6299 50.5201 27.0206 52.4369 30.7448 53.259C34.4691 54.0811 38.3554 53.7707 41.9005 52.368C45.4455 50.9651 48.4862 48.5346 50.6288 45.3911C52.7713 42.2475 53.9172 38.5357 53.9178 34.7361V31.286\" stroke=\"white\" stroke-opacity=\"0.4\" stroke-width=\"4.92496\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M23.5805 28.2664C23.5696 28.4742 23.5007 28.676 23.3779 28.8512L15.3067 40.2401C15.0841 40.5529 14.7176 40.7317 14.3332 40.7116C13.9487 40.6916 13.603 40.4755 13.4144 40.1413L6.58263 27.9744C6.38463 27.6204 6.39402 27.1863 6.61085 26.8419C6.82627 26.496 7.21182 26.2958 7.61858 26.3171L22.5215 27.095C22.9283 27.1163 23.2908 27.3554 23.4687 27.7219C23.5537 27.8945 23.5902 28.0824 23.5805 28.2664Z\" fill=\"white\"></path>\n<path d=\"M44.8516 38.6356C44.8588 38.4304 44.9233 38.2301 45.0414 38.0553L52.8076 26.6804C53.0219 26.3679 53.3804 26.1852 53.7599 26.1984C54.1396 26.2116 54.4844 26.4187 54.6762 26.7453L61.6269 38.6321C61.8284 38.9781 61.8267 39.4065 61.6186 39.75C61.4121 40.095 61.0352 40.299 60.6335 40.285L45.9167 39.7731C45.515 39.7592 45.1532 39.5294 44.9714 39.1709C44.8845 39.0021 44.8452 38.8173 44.8516 38.6356Z\" fill=\"white\"></path>\n</g>\n</svg>\n"}
className={`w-html-embed`} />
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Built for your Growth"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c12sm2j2 codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"DOWNLOAD APP"}
</Link>
</Fragment_1>
</Slot>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w copqmak c1lfjoq7 c1qyy4dh c1wt8a7g cxjshtx c1cdc69r c1f64byh cstj0zg cavd3zn cx6c9kw c174sw29`}>
<Image
src={"/assets/bg-circle-full-dark_4JkvxuV5WnVfe1KJdFZA7.svg"}
width={1282}
height={1282}
alt={"\"\""}
className={`w-image cdwd3jx c3qqn98 c1u3iqu9 cc3dq2t`} />
<Image
src={"/assets/Group_2_t53Qyq0aa6485uXvJ-FTH.svg"}
width={502}
height={592}
alt={"two phones showing app"}
className={`w-image`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Customer daily rewards on their card usage"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
<Box
className={`w-box cejtdrx cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_579)\">\n<path opacity=\"0.4\" d=\"M29.8492 7H15.3484C10.0641 7 7.07007 9.99399 7.07007 15.2783V29.7654C7.07007 35.0497 10.0641 38.0437 15.3484 38.0437H29.8492C35.1336 38.0437 38.1138 35.0497 38.1138 29.7654V15.2783C38.1138 9.99399 35.1336 7 29.8492 7Z\" fill=\"white\"></path>\n<path d=\"M31.9976 21.8948V27.5382H26.3542\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M31.9976 27.5381L25.3601 20.9006C25.2436 20.7841 25.1054 20.6916 24.9532 20.6285C24.801 20.5655 24.6378 20.533 24.4731 20.533C24.3083 20.533 24.1452 20.5655 23.993 20.6285C23.8407 20.6916 23.7025 20.7841 23.586 20.9006L20.9708 23.5158C20.8543 23.6323 20.7161 23.7248 20.5639 23.7878C20.4117 23.8509 20.2485 23.8834 20.0838 23.8834C19.919 23.8834 19.7559 23.8509 19.6037 23.7878C19.4514 23.7248 19.3132 23.6323 19.1967 23.5158L13.1863 17.5054\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_579\">\n<rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(7 7)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"Lowest fees in market"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_587)\">\n<path d=\"M22.5917 41.1133C32.3073 41.1133 40.1834 33.2373 40.1834 23.5216C40.1834 13.806 32.3073 5.92993 22.5917 5.92993C12.8761 5.92993 5 13.806 5 23.5216C5 33.2373 12.8761 41.1133 22.5917 41.1133Z\" fill=\"white\" fill-opacity=\"0.4\"></path>\n<path d=\"M26.0348 12.658C26.0348 12.2125 25.4962 11.9895 25.1813 12.3044L13.711 23.7747C13.5906 23.8953 13.5086 24.0488 13.4754 24.216C13.4422 24.3831 13.4593 24.5564 13.5244 24.7138C13.5896 24.8713 13.7 25.0059 13.8417 25.1006C13.9833 25.1954 14.1499 25.246 14.3203 25.2462H18.6487C18.9248 25.2462 19.1487 25.4701 19.1487 25.7462V34.3856C19.1487 34.831 19.6872 35.0541 20.0022 34.7391L31.4725 23.2689C31.5929 23.1483 31.6749 22.9947 31.7081 22.8276C31.7413 22.6604 31.7242 22.4872 31.659 22.3297C31.5938 22.1723 31.4834 22.0377 31.3418 21.9429C31.2001 21.8482 31.0336 21.7975 30.8632 21.7974H26.5348C26.2587 21.7974 26.0348 21.5735 26.0348 21.2974V12.658Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_587\">\n<rect width=\"36\" height=\"37\" fill=\"white\" transform=\"translate(5 5)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"Fast and secure transactions"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_594)\">\n<path d=\"M17.7086 19.5681V15.3489C17.7086 13.7823 18.3285 12.2799 19.4318 11.1722C20.5351 10.0645 22.0315 9.44214 23.5919 9.44214C25.1522 9.44214 26.6486 10.0645 27.7519 11.1722C28.8553 12.2799 29.4751 13.7823 29.4751 15.3489V19.5681\" stroke=\"white\" stroke-opacity=\"0.4\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M31.758 18.2656H15.4258C13.2166 18.2656 11.4258 20.0565 11.4258 22.2656V35.6012C11.4258 37.8104 13.2166 39.6012 15.4258 39.6012H31.758C33.9671 39.6012 35.758 37.8104 35.758 35.6012V22.2656C35.758 20.0565 33.9671 18.2656 31.758 18.2656Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_594\">\n<rect width=\"25\" height=\"33\" fill=\"white\" transform=\"translate(11 7)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"256-bit secure encryption"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd cdtylqg chmjof8 cavd3zn`}>
<Image
src={"/assets/bg-circle-full-dark_4JkvxuV5WnVfe1KJdFZA7.svg"}
width={1282}
height={1282}
alt={"\"\""}
className={`w-image cdwd3jx c1u3iqu9 coipioj c7uhlu c7oq1d0 cuf9c1i c1gjpn04 c1482uel cqtg27u c1p6ap20`} />
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w copqmak c1lfjoq7 c1qyy4dh c1wt8a7g ceu66s9 c1cdc69r cnpi1xk cstj0zg cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Personalized Business coupons"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
<Box
className={`w-box cejtdrx cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_579)\">\n<path opacity=\"0.4\" d=\"M29.8492 7H15.3484C10.0641 7 7.07007 9.99399 7.07007 15.2783V29.7654C7.07007 35.0497 10.0641 38.0437 15.3484 38.0437H29.8492C35.1336 38.0437 38.1138 35.0497 38.1138 29.7654V15.2783C38.1138 9.99399 35.1336 7 29.8492 7Z\" fill=\"white\"></path>\n<path d=\"M31.9976 21.8948V27.5382H26.3542\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M31.9976 27.5381L25.3601 20.9006C25.2436 20.7841 25.1054 20.6916 24.9532 20.6285C24.801 20.5655 24.6378 20.533 24.4731 20.533C24.3083 20.533 24.1452 20.5655 23.993 20.6285C23.8407 20.6916 23.7025 20.7841 23.586 20.9006L20.9708 23.5158C20.8543 23.6323 20.7161 23.7248 20.5639 23.7878C20.4117 23.8509 20.2485 23.8834 20.0838 23.8834C19.919 23.8834 19.7559 23.8509 19.6037 23.7878C19.4514 23.7248 19.3132 23.6323 19.1967 23.5158L13.1863 17.5054\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_579\">\n<rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(7 7)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"100% Private data"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_587)\">\n<path d=\"M22.5917 41.1133C32.3073 41.1133 40.1834 33.2373 40.1834 23.5216C40.1834 13.806 32.3073 5.92993 22.5917 5.92993C12.8761 5.92993 5 13.806 5 23.5216C5 33.2373 12.8761 41.1133 22.5917 41.1133Z\" fill=\"white\" fill-opacity=\"0.4\"></path>\n<path d=\"M26.0348 12.658C26.0348 12.2125 25.4962 11.9895 25.1813 12.3044L13.711 23.7747C13.5906 23.8953 13.5086 24.0488 13.4754 24.216C13.4422 24.3831 13.4593 24.5564 13.5244 24.7138C13.5896 24.8713 13.7 25.0059 13.8417 25.1006C13.9833 25.1954 14.1499 25.246 14.3203 25.2462H18.6487C18.9248 25.2462 19.1487 25.4701 19.1487 25.7462V34.3856C19.1487 34.831 19.6872 35.0541 20.0022 34.7391L31.4725 23.2689C31.5929 23.1483 31.6749 22.9947 31.7081 22.8276C31.7413 22.6604 31.7242 22.4872 31.659 22.3297C31.5938 22.1723 31.4834 22.0377 31.3418 21.9429C31.2001 21.8482 31.0336 21.7975 30.8632 21.7974H26.5348C26.2587 21.7974 26.0348 21.5735 26.0348 21.2974V12.658Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_587\">\n<rect width=\"36\" height=\"37\" fill=\"white\" transform=\"translate(5 5)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"99.99% Uptime guarantee"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_594)\">\n<path d=\"M17.7086 19.5681V15.3489C17.7086 13.7823 18.3285 12.2799 19.4318 11.1722C20.5351 10.0645 22.0315 9.44214 23.5919 9.44214C25.1522 9.44214 26.6486 10.0645 27.7519 11.1722C28.8553 12.2799 29.4751 13.7823 29.4751 15.3489V19.5681\" stroke=\"white\" stroke-opacity=\"0.4\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M31.758 18.2656H15.4258C13.2166 18.2656 11.4258 20.0565 11.4258 22.2656V35.6012C11.4258 37.8104 13.2166 39.6012 15.4258 39.6012H31.758C33.9671 39.6012 35.758 37.8104 35.758 35.6012V22.2656C35.758 20.0565 33.9671 18.2656 31.758 18.2656Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_594\">\n<rect width=\"25\" height=\"33\" fill=\"white\" transform=\"translate(11 7)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"24/7 Dedicated support"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
className={`w-box`}>
<Image
alt={"Laptop displaying cryptocurrency platform"}
src={"/assets/Apple_Computers-2_08IXNnFd2R5ZxlCFbR0o0.svg"}
width={971}
height={585}
className={`w-image cdwd3jx chdlss8 c1mofqpp czr2pxy cuf9c1i cimc1rz cpxs833 c17jj8qr cc6x7mz`} />
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cz4drm4 c1qwo2kv`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w copqmak c1lfjoq7 c1qyy4dh c1wt8a7g c1s46o9r c1cdc69r cevxs5e cstj0zg cavd3zn cx6c9kw c13vvg1g cmoe9jo c1obig1w`}>
<Box
className={`w-box cavd3zn cz3uemc czr2pxy c1bkqfhr`}>
<Image
alt={"Two mobile phones"}
src={"/assets/div-5_lhfIufnUxcM9i-52BG1TN.svg"}
width={667}
height={631}
className={`w-image cdwd3jx c3ucb1b c1dj4rt4 c1n6cdq4 cpxs833 c3nui8s`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cdsjpcc ca97va1 ctl2oms`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Explore endless possibilities with Mastapay"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean."}
</Paragraph>
<Link
className={`w-link c1983xa5 c7nkggm cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c1x4yn0w codg43x cl60rel c1ib9cr2 cqz2rm8 c1ukphsi chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"DOWNLOAD APP"}
</Link>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub cavd3zn`}>
<Image
src={"/assets/bg-circle-full-dark_4JkvxuV5WnVfe1KJdFZA7.svg"}
width={1282}
height={1282}
alt={"\"\""}
className={`w-image cdwd3jx ck5o0d5 c1u3iqu9 c18mhbe3 c185cae5`} />
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c1qyy4dh c18v2pa2 cuj80l1 cq4dxli czqy8m4 c10x096o c174sw29`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"What our users say?"}
</Heading>
<Slot>
<Fragment_1>
<Link
className={`w-link cnrz8fp cl8m66n cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c12sm2j2 codg43x cl60rel c1ib9cr2 cqz2rm8 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"DOWNLOAD APP"}
</Link>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box copqmak c1s46o9r cejtdrx co2qwzx c1vrexag c1cdc69r cx6c9kw c174sw29 c44uyy9`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Paragraph
className={`w-paragraph`}>
{"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7`}>
<Image
src={"/assets/div_(1)_t4ON61-QEMgdFiZtcQ7oa.png"}
width={116}
height={116}
alt={"Testimonial picture"}
className={`w-image cb6cng2 cnn4ttu`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"JOHN CARTER"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"ROLE, COMPANY"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Paragraph
className={`w-paragraph`}>
{"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7`}>
<Image
src={"/assets/div_(1)_t4ON61-QEMgdFiZtcQ7oa.png"}
width={116}
height={116}
alt={"Testimonial picture"}
className={`w-image cb6cng2 cnn4ttu`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"JOHN CARTER"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"ROLE, COMPANY"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c15hexcm`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g`}>
<Paragraph
className={`w-paragraph`}>
{"“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7`}>
<Image
src={"/assets/div_(1)_t4ON61-QEMgdFiZtcQ7oa.png"}
width={116}
height={116}
alt={"Testimonial picture"}
className={`w-image cb6cng2 cnn4ttu`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"JOHN CARTER"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"ROLE, COMPANY"}
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
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w copqmak c1lfjoq7 c1qyy4dh c1wt8a7g cxjshtx c1cdc69r c1f64byh cstj0zg cx6c9kw c174sw29 cu4c3t1`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Get started today"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."}
</Paragraph>
<Box
className={`w-box cejtdrx cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_579)\">\n<path opacity=\"0.4\" d=\"M29.8492 7H15.3484C10.0641 7 7.07007 9.99399 7.07007 15.2783V29.7654C7.07007 35.0497 10.0641 38.0437 15.3484 38.0437H29.8492C35.1336 38.0437 38.1138 35.0497 38.1138 29.7654V15.2783C38.1138 9.99399 35.1336 7 29.8492 7Z\" fill=\"white\"></path>\n<path d=\"M31.9976 21.8948V27.5382H26.3542\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M31.9976 27.5381L25.3601 20.9006C25.2436 20.7841 25.1054 20.6916 24.9532 20.6285C24.801 20.5655 24.6378 20.533 24.4731 20.533C24.3083 20.533 24.1452 20.5655 23.993 20.6285C23.8407 20.6916 23.7025 20.7841 23.586 20.9006L20.9708 23.5158C20.8543 23.6323 20.7161 23.7248 20.5639 23.7878C20.4117 23.8509 20.2485 23.8834 20.0838 23.8834C19.919 23.8834 19.7559 23.8509 19.6037 23.7878C19.4514 23.7248 19.3132 23.6323 19.1967 23.5158L13.1863 17.5054\" stroke=\"white\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_579\">\n<rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(7 7)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"Download app"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_587)\">\n<path d=\"M22.5917 41.1133C32.3073 41.1133 40.1834 33.2373 40.1834 23.5216C40.1834 13.806 32.3073 5.92993 22.5917 5.92993C12.8761 5.92993 5 13.806 5 23.5216C5 33.2373 12.8761 41.1133 22.5917 41.1133Z\" fill=\"white\" fill-opacity=\"0.4\"></path>\n<path d=\"M26.0348 12.658C26.0348 12.2125 25.4962 11.9895 25.1813 12.3044L13.711 23.7747C13.5906 23.8953 13.5086 24.0488 13.4754 24.216C13.4422 24.3831 13.4593 24.5564 13.5244 24.7138C13.5896 24.8713 13.7 25.0059 13.8417 25.1006C13.9833 25.1954 14.1499 25.246 14.3203 25.2462H18.6487C18.9248 25.2462 19.1487 25.4701 19.1487 25.7462V34.3856C19.1487 34.831 19.6872 35.0541 20.0022 34.7391L31.4725 23.2689C31.5929 23.1483 31.6749 22.9947 31.7081 22.8276C31.7413 22.6604 31.7242 22.4872 31.659 22.3297C31.5938 22.1723 31.4834 22.0377 31.3418 21.9429C31.2001 21.8482 31.0336 21.7975 30.8632 21.7974H26.5348C26.2587 21.7974 26.0348 21.5735 26.0348 21.2974V12.658Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_587\">\n<rect width=\"36\" height=\"37\" fill=\"white\" transform=\"translate(5 5)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"Create a free account"}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g cn6056e c1117wcl`}>
<HtmlEmbed
code={"<svg width=\"46\" height=\"46\" viewBox=\"0 0 46 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"46\" height=\"46\" rx=\"13\" fill=\"#0328EE\"></rect>\n<g clip-path=\"url(#clip0_2_594)\">\n<path d=\"M17.7086 19.5681V15.3489C17.7086 13.7823 18.3285 12.2799 19.4318 11.1722C20.5351 10.0645 22.0315 9.44214 23.5919 9.44214C25.1522 9.44214 26.6486 10.0645 27.7519 11.1722C28.8553 12.2799 29.4751 13.7823 29.4751 15.3489V19.5681\" stroke=\"white\" stroke-opacity=\"0.4\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<path d=\"M31.758 18.2656H15.4258C13.2166 18.2656 11.4258 20.0565 11.4258 22.2656V35.6012C11.4258 37.8104 13.2166 39.6012 15.4258 39.6012H31.758C33.9671 39.6012 35.758 37.8104 35.758 35.6012V22.2656C35.758 20.0565 33.9671 18.2656 31.758 18.2656Z\" fill=\"white\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_2_594\">\n<rect width=\"25\" height=\"33\" fill=\"white\" transform=\"translate(11 7)\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
<Paragraph
className={`w-paragraph`}>
{"Start trading"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
className={`w-box czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h`}>
<Vimeo
url={"https://vimeo.com/226053498"}
showPreview={true}
className={`w-vimeo cavd3zn cu0rr2h czr2pxy cp04853 c1nwj4jm c1fzqoc1 c1ojnhaa cdtylqg chmjof8`}>
<VimeoPreviewImage
alt={"Vimeo video preview image"}
sizes={"100vw"}
className={`w-preview-image cdwd3jx c1gxuxwl czr2pxy c1bkqfhr cz775um ctwnsxo`} />
<VimeoSpinner
className={`w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"e2CRglijn891\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" viewBox=\"0 0 128 128\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id=\"e2CRglijn892_tr\" transform=\"translate(64,64) rotate(90)\"><circle id=\"e2CRglijn892\" r=\"42\" fill=\"none\" stroke=\"#39fbbb\" stroke-dasharray=\"263.89\" stroke-dashoffset=\"251.89\" stroke-linecap=\"round\" stroke-width=\"16\" transform=\"scale(-1,1) translate(0,0)\"/></g></svg>"}
className={`w-html-embed`} />
</VimeoSpinner>
<VimeoPlayButton
aria-label={"Play button"}
className={`w-play-button cdwd3jx c1ei7iod cuf9c1i cd1rb50 cry9bxc c1qyy4dh ct02u4h c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t cxbr3c5 c7rjn6x cuccfz7 cagnu3j c1cw2f0j ci3odkx cd3iwfe c1yhcvvf cwc6hbl c11r52nx c16p8e7v c1jfw235 c1o1o09c citxhpm c486lga cbj6aey cl60rel c8gppyh`}>
<Box
aria-hidden={"true"}
className={`w-box c1u3r42f`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</VimeoPlayButton>
</Vimeo>
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd c1ns98mi`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c1qyy4dh c18v2pa2 cuj80l1 cq4dxli czqy8m4 c10x096o c174sw29`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Browse our latest news"}
</Heading>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1s46o9r cejtdrx co2qwzx c1vrexag c1cdc69r cx6c9kw c174sw29 c1ciuywf`}>
<Link
className={`w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn`}>
<Image
alt={"Laptop with colorful lighting"}
src={"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png"}
width={764}
height={430}
className={`w-image`} />
<Box
className={`w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6`}>
{"Products"}
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"The Basics about Business Banking"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."}
</Paragraph>
</Box>
<Separator
className={`w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt`} />
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1`}>
<Image
src={"/assets/div_4suNP1kaJXee07vc7AK9U.png"}
width={120}
height={120}
alt={"Author picture"}
className={`w-image cb6cng2 cnn4ttu`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"ALEX TURNER"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"AUGUST 2, 2021"}
</Paragraph>
</Box>
</Box>
</Link>
<Link
className={`w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn`}>
<Image
alt={"Laptop with colorful lighting"}
src={"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png"}
width={764}
height={430}
className={`w-image`} />
<Box
className={`w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6`}>
{"Products"}
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Customer Retention as a Service"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."}
</Paragraph>
</Box>
<Separator
className={`w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt`} />
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1`}>
<Image
src={"/assets/div_4suNP1kaJXee07vc7AK9U.png"}
width={120}
height={120}
alt={"Author picture"}
className={`w-image cb6cng2 cnn4ttu`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"ALEX TURNER"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"AUGUST 2, 2021"}
</Paragraph>
</Box>
</Box>
</Link>
<Link
className={`w-link cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 cdtylqg chmjof8 c135vpv5 cnrz8fp c1rt687o cd3iwfe c1yhcvvf cwc6hbl c11r52nx cav21ye c1tm2hpp c18knjwi c1mndk66 c1kvaui c16zzo80 crwrm4p cl60rel c8gppyh`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c16xs6ny c1wt8a7g cavd3zn`}>
<Image
alt={"Laptop with colorful lighting"}
src={"/assets/60e4a1e7380756935be7fc46_image-blog-6-crypto-template-p-800.jpeg_z1jq8McHWeSD0MaqvsfMT.png"}
width={764}
height={430}
className={`w-image`} />
<Box
className={`w-box c1sche0c c1l2989r c1w5x00x c7ycb0a c13u1snz cl7jefz c1sf5l1b cu385pj cvghewe cfzf927 c1noknrj c1cb3y4c co8gpyk c1tme1mb cvy6962 cdwd3jx c1dj4rt4 c1lvkmhk c1d7r856 cd3iwfe c1yhcvvf cwc6hbl c11r52nx c17wqig6`}>
{"Products"}
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 c1fd0kk1 c11gzs80 cdsjpcc`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Improving your "}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sculerisque viverra donec diammeo."}
</Paragraph>
</Box>
<Separator
className={`w-separator c2uxojo cblpe2z c32myit cwrra4i cvy6962 c960zyt`} />
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c11gzs80 ca97va1 c1fd0kk1`}>
<Image
src={"/assets/div_4suNP1kaJXee07vc7AK9U.png"}
width={120}
height={120}
alt={"Author picture"}
className={`w-image cb6cng2 cnn4ttu`} />
<Box
className={`w-box cry9bxc c1lfjoq7 c1md20bl c1e892th c16xs6ny ct02u4h`}>
<Paragraph
className={`w-paragraph c1cb3y4c`}>
{"ALEX TURNER"}
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"AUGUST 2, 2021"}
</Paragraph>
</Box>
</Box>
</Link>
</Box>
<Link
href={"/blog"}
className={`w-link c1mtjugd c7rjn6x cihfpxt cb4vmi8 c1j33arz c1r2vfc1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cl7jefz c1cb3y4c csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1vamubz c1c9nyn co9inq6 c18nx7en c13zjl4p c12sm2j2 codg43x cl60rel c1ib9cr2 c1mndk66 chtpy1z c1qtvx9w c5h5y5y chgk7uj c1xf7czk`}>
{"VIEW ALL ARTICLES"}
</Link>
</Box>
</Box>
<Box
tag={"section"}
className={`w-box cna0hdz c1mzb2kd c1ns98mi`}>
<Box
className={`w-box c1357293 c9jnjeu c11gzs80 c1fd0kk1 czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub`}>
<Box
className={`w-box cry9bxc c1lxiyww c1z0l37u c1ml0hr7 c1qyy4dh c18v2pa2 cuj80l1 cq4dxli czqy8m4 c10x096o c174sw29`}>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Download our app"}
</Heading>
<Paragraph
className={`w-paragraph c6oj68y`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet ."}
</Paragraph>
</Box>
<Box
className={`w-box copqmak c1s46o9r cevxs5e co2qwzx c1vrexag c1cdc69r cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cdsjpcc c1fd0kk1 cl8xzcs c11gzs80 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c16xs6ny`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Download for iOS"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis."}
</Paragraph>
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
<Image
alt={"iPhone illustration"}
src={"/assets/iPhones_(1)_OiE_o90YMaMDF8_y9um0s.svg"}
width={459}
height={416}
className={`w-image`} />
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c18v2pa2 c1z0l37u c1ml0hr7 cdsjpcc c1fd0kk1 cl8xzcs c11gzs80 cgl7u82 crlid6h caoqbwa c1aguln c1trky77 c16xs6ny`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Download for Android"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis."}
</Paragraph>
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
<Image
alt={"Android phone illustration"}
src={"/assets/Samsung_Galaxys_u2EzpFwVKdnwKlDzLggEu.svg"}
width={454}
height={416}
className={`w-image`} />
</Box>
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
    