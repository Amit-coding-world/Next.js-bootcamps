## SSR - Server Side Rendering
    this is default behaviour

## SSG - Static Site Generation
 Any content which does not have network calls is a static page by default

## ISG or ISR - 
fetch in next.js caches the response
```
export const dynamic = 'force-dynamic'
```

however, there are expections, fetch requests are not cached when:

- Used inside a Server Action
- Used inside a Route Handler that uses the POST method.
