## Introduction

**Dashlib**  was born when we realized that we were spending a lot of time writing CSS in the CSS file, which was getting bigger and bigger with the CSS file. This led us to the idea of building a library called **Dashlib**

Dashlib is a great utility library that helps you take ready-made and responsive classes.

**Dashlib** helps you get less CSS code and more HTML file readability and extremely fast development speed. **Dashlib** also has the most standard Breakpoint sizes and support for older browsers.
**Dashlib** was developed based on the first mobile technique.

> Stylish, modern, compact and powerful front-end library for faster and easier web development.





## Table Of contents

[TOC]



## release notes ![rocket](https://github.githubassets.com/images/icons/emoji/unicode/1f680.png)

**version 2 is released** ![fire](https://github.githubassets.com/images/icons/emoji/unicode/1f525.png)

1. make all class shorter
2. change prefix from "em-" to "-" ![crossed_fingers](https://github.githubassets.com/images/icons/emoji/unicode/1f91e.png)![crossed_fingers](https://github.githubassets.com/images/icons/emoji/unicode/1f91e.png)
3. add primary, secondary, danger, success, warning, light, dark ![nail_care](https://github.githubassets.com/images/icons/emoji/unicode/1f485.png)
4. add align-self ![clap](https://github.githubassets.com/images/icons/emoji/unicode/1f44f.png)![wink](https://github.githubassets.com/images/icons/emoji/unicode/1f609.png)
5. add background-attachment, background-repeat, object-fit, object-position 🤩
6. add resize 🧐
7. add border style ![drooling_face](https://github.githubassets.com/images/icons/emoji/unicode/1f924.png)
8. add RFS (responsive font size) ![call_me_hand](https://github.githubassets.com/images/icons/emoji/unicode/1f919.png)![sunglasses](https://github.githubassets.com/images/icons/emoji/unicode/1f60e.png)
9. add "between" for working one class in between two size ![vulcan_salute](https://github.githubassets.com/images/icons/emoji/unicode/1f596.png)![smiling_imp](https://github.githubassets.com/images/icons/emoji/unicode/1f608.png)

fix some bugs ![pray](https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png)![weary](https://github.githubassets.com/images/icons/emoji/unicode/1f629.png)



## Download

There are many ways to install Foundation, but if you're just getting started, we have a few suggestions.

### Install with Package Managers

**Dashlib** is available on npm . The package includes all of the source Sass files, as well as compiled CSS , in uncompressed and compressed flavors.



**NPM**
```javascript
npm install foundation-sites
```



### Direct download link

you can download directly from [here](https://github.com/mahdi-momeni/em.css/archive/master.zip).



Here's what comes in the package.

```
├─ src       Source Sass files. Use this folder as a load path in Sass.
└─ dist       Compiled files:
  └─ css        * Compiled CSS files. Includes minified and unminified 
```



## Responsive meta tag

**Dashlib** is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```





## Use autocomplete for your IDE

Using  **Dashlib**  works best if you have a solid code editor, for example Webstorm or Sublime Text , Atom. To be even more efficient, we recommend that you install one of the autocomplete plugins for your favorite IDE or code editor. This saves a lot of time, as you won't have to look up and type all **Dashlib** classes.







## CSS architecture

To avoid conflicts with other CSS frameworks, all **Dashlib** classes are name-spaced with the `-` prefix. Components are divided into the component itself, sub-objects and modifiers, whose class names always pick up the component name.

### Syntax

| Object                                                | Example                                       |
| ----------------------------------------------------- | --------------------------------------------- |
| Property                                              | shorthand of css property like `m` for margin |
| Property value                                        | value of property like center for text-align  |
| Responsive class (for some property and its optional) | Responsive classes(`sm`,` md`,` lg` and`xl`)  |

 `-{property}-{Property value}_{Responsive class}`

Like : `-p-20_md` 



### sizing

all size that use for margin and padding  and line height start from `0` to `60` px with 5 steps font sizes has same range but with 1 step.



### Responsive breakpoints

**Dashlib** based on bootstrap breakpoints size. and we use that sizes for our library for great Coordination between bootstrap and **Dashlib**.

Since Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.



#### Breakpoints

**Dashlib** includes a number of responsive classes to style your content for different viewport widths. This section gives you an overview of the available breakpoints and the associated devices.

the classes are named using the format:

- `.-{property}-{value}_{breakpoint}`  for `sm`, `md`, `lg`, and `xl`.



```css
/ Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```



there is NO media query for `xs ` in new version of bootstrap. if you want write some property for mobile you most write it without `xs` suffix. then you can edit property on bigger breakpoints.

##### Example

```html
<div class="-m-5 -m-20_sm -m-40_md -m-50_lg -m-60_xl">
    Cool responsive margin
</div>
```



#### Between breakpoints

you can adjust some property between to size and **work** only in that size. this option availabe just for displays, positions, order and flex option like `justify-content`

the classes are named using the format:

- `.-{property}-{value}_o_{breakpoint}`  for `sm`, `md`, `lg`, and `xl`.

`o` stands for only.



```css
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, between 576px and 768px)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Medium devices (tablets, between 768px and 992px)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// large devices (desktops, beetween 992px and 1200px)
@media (min-width: 992px) and (max-width: 1199.98px) { ... }
```



##### Example

```html
<div class="-d-none_o_sm">
    hide on small device
</div>
```











### Colors

Convey meaning through color with a handful of color utility classes. that can use for border color, background and text color. 



The classes are named using the format `{prefix}{property}-{color}` .

Where *property* is one of:

- `c` - for classes that set `color`
- `bg` - for classes that set `background-color`
- `b` - for classes that set `border-color`



```html
<p class="-bg-gray-50">.-bg-gray-50</p>
<p class="-b-1 -b-gray-50">.-b-gray-50</p>
<p class="-c-gray-300">.-c-gray-300</p>
<p class="-c-danger">.-c-danger</p>
```



#### HTML Gray Color Shades

we add all gray shades for use in border color, background and text color and start from 50 to 900.



#### Main Colors

And we add main color use in border color, background and text color.

```css
primary:#007bff, 
secondary:#6C757D, 
success:#28A745, 
danger:#DC3545, 
warning:#FFC107, 
light:#F8F9FA, 
dark:#343A40,
white:#fff,
black:#000,
```











## How To Use



### Spacing

**Dashlib**  includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `0px` to `60px`.



#### Notation

Spacing utilities that apply to all breakpoints, from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `-{property}{sides}-{size}` for `xs` and `{property}{sides}-{size}_{breakpoint}` for `sm`, `md`, `lg`, and `xl` for responsive usage.

Where *property* is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where *sides* is one of:

- `*t` - for classes that set `*-top`
- `*b` - for classes that set `*-bottom`
- `*l` - for classes that set `*-left`
- `*r` - for classes that set `*-right` 
- `*x` - for classes that set both `*-left` and `*-right`
- `**y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

sizes are 0 to 60 with 5 step and special size :

- `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
- `auto` - for classes that set the `margin` to auto



#### Horizontal and vertical centering

Additionally, Dasherry also includes an `.-mx-auto` class for horizontally centering fixed-width block level content—that is, content that has `display: block` and a `width` set—by setting the horizontal or vertical margins to `auto`.



#### Usage

Add one or more of the following classes to any element to create the same vertical and/or horizontal margin or padding that a paragraph usually has.

*property* is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

| CLASS                 | DESCRIPTION                                           |
| --------------------- | ----------------------------------------------------- |
| `-{property}-{size}`  | Adds margin or padding to all 4 sides of the element. |
| `-{property}t-{size}` | Adds top margin or padding.                           |
| `-{property}b-{size}` | Adds bottom margin or padding.                        |
| `-{property}l-{size}` | Adds left margin or padding.                          |
| `-{property}r-{size}` | Adds right margin or padding.                         |
| `-{property}x-{size}` | Adds right and left margin or padding.                |
| `-{property}y-{size}` | Adds top and bottom margin or padding.                |
| `-my-auto`            | Adds margin auto to top and bottom .                  |
| `-mx-auto`            | Adds margin auto to left and right .                  |



#### Responsive

Dasherry provides a number of responsive classes. they have suffixes that represent the breakpoint from which they come to effect.

| EXAMPLES                                 | DESCRIPTION                                  |
| ---------------------------------------- | -------------------------------------------- |
| `.-ml-auto` `.-p-25` `.-mr-0`            | Affects all devices.                         |
| `.-pt-5_sm` `.-m-auto_sm` `.-mr-auto_sm` | Affects device widths of *576px* and larger. |
| `.-pl-10_md` `.-m-45_md` `.-mr-10_md`    | Affects device widths of *768px* and larger. |
| `.-py-40_lg` `.-px-20_lg` `.-pr-5_lg`    | Affects device widths of *992px* and larger. |
| `.-mb-10_xl ` `.-pr-5_xl` `.-px-20_xl`   | Affects device widths of *1200* and larger.  |



**Example**

```html
<div class="-m-60_xl -m-30_md -m-10"></div>
<div class="-p-60_xl -pb-30_md -p-10"></div>
<div class="-mx-auto"></div>
```

 

### Display property

Quickly and responsively toggle the display value of components and more with our display utilities.

#### Notation

Display utility classes that apply to all [breakpoints](https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints), from `xs` to `xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

- `.d-{value}` for `xs`
- `.d-{value}_{breakpoint}` for `sm`, `md`, `lg`, and `xl`.

Where *value* is one of:

- `none`
- `in` for`inline`
- `in-block` for `inline-block`
- `block` for `block`
- `tbl` for `table`
- `tbl-cel` for `table-cell`
- `tbl-r` for `table-row`
- `flex` for`flex`
- `in-felx` for`inline-flex`

 



### Text Align

- `.text-{value}` 

Where *value* is one of:

- `r` for`right`

- `l` for `left`

- `c` for `center`

- `just` for `justify`

  

## Bugs and feature requests

Have a bug or a feature request? If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/bootstrap/issues/new).

## Contributing

Finding bugs and add features, sending pull requests or improving our document - any kind of contribution is welcome and highly appreciated. To get started, first read our [contribution guidelines](https://github.com/uikit/uikit/blob/develop/CONTRIBUTING.md). Thanks! ![pray](https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png)

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Deployment

**for run gulp v3.9.1 tasks you should use or install node v10**

1. Install NVM

`curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`

you must install v10 of nodejs or if you installed nodejs v12 switch to v10 like below steps

1. Find Available Node.js Version

`nvm ls-remote`

1. Node.js Installation with NVM

`nvm install v10.16.0`

1. Set Node.js Default Version

`nvm use v10.16.0`

each time you see error `const { Math, Object } = primordials;` or something like that you need set Node.js default version to 10.16.0

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). Sometimes we mishandle , but we adhere to those rules whenever possible.

## Authors

- **Mahdi Momeni** - [Dashery](https://github.com/PurpleBooth)

Special thanks from Ehsan Ahmadi. See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.
