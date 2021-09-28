# Customize

## General info

Components in the project have two ways for customization:
- Adding or editing classes in style file `.less` which located at the customized component;
- Changing already prepared props variables based on `Antd` library;

## Logo and Left menu 

![Init store](/img/customize/left-menu.png)

You can change logo in `Notifications` component with path:
```bash
js/packages/web/src/components/Notifications/index.tsx
```

You can add Icon inside `h1` tag in this function: 
```js
const justContent = (
    <Popover
      className="noty-popover"
      placement="bottomLeft"
      content={content}
      trigger="click"
    >
      <h1 className="title">M</h1>
    </Popover>
);
```

For customizing left menu items you need open `AppBar` component with path:
```bash
js/packages/web/src/components/AppBar/index.tsx
```
Edit this `DefaultActions` component:
```js
const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
  const { connected } = useWallet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    >
      <Link to={`/`}>
        <Button className="app-btn">Explore</Button>
      </Link>
      <Link to={`/artworks`}>
        <Button className="app-btn">
          {connected ? 'My Items' : 'Artworks'}
        </Button>
      </Link>
      <Link to={`/artists`}>
        <Button className="app-btn">Creators</Button>
      </Link>
    </div>
  );
};
```

or edit `MetaplexMenu` component for mobile version of menu, located inside this rule:
```js
 if (width < 768) {
   '...component structure'
 }
```
Pay attention that in project using `Antd` library for styles, so you can customise menu buttons like: 
- overriding styles in the `index.less` file with path (current directory)
```bash
js/packages/web/src/components/AppBar/index.less
```
- using prepared styles from `Antd` library
find all variables for buttons you can on this link:
```bash
https://ant.design/components/button/
```

## Right menu 

![Init store](/img/customize/right-menu.png)

For customizing right menu items you need open `AppBar` component with path:
```bash
js/packages/web/src/components/AppBar/index.tsx
```

And edit this code:
```js
<div className="app-right app-bar-box">
  <UserActions />
  <CurrentUserBadge
    showBalance={false}
    showAddress={false}
    iconSize={24}
  />
</div>
```

## Auction View

![Init store](/img/customize/auction-view.png)

You can change `PreSaleBanner` component with path:

```bash
js/packages/web/src/components/PreSaleBanner/index.tsx
```

This component consists from two parts:
- Left - product view `ArtContent`, here can be videos or images
```bash
js/packages/web/src/components/ArtContent/index.tsx
```
For demonstrate video uses `@cloudflare/stream-react` library and `Image Antd` for images

for changing styles need send `className` through props from parent component 

```js
<ArtContent
  pubkey={id}
  className="artwork-image"
  allowMeshRender={true}
/>
```

- Right - product info `AuctionCard`, here main info about product
```bash
js/packages/web/src/components/AuctionCard/index.tsx
```

This component has a props `style` where you can change global styles
example:
```js
<AuctionCard
    style={{
      background: 'transparent',
      width: '100%',
      padding: 0,
      margin: 0,
    }}
/>
```

This component has a local styles file for customization too
````bash
js/packages/web/src/components/AuctionCard/index.less
````


