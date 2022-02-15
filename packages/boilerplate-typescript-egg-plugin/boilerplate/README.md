## egg-{{name}}

Egg plugin for {{name}}

### Usage

```bash
$ npm i egg-{{name}}
```

add to plugin

```typescript
// config/plugin.ts

export default {
  {{name}}: {
    enable: true,
    package: 'egg-{{name}}',
  }
}
```

add to config

```typescript
// config/config.{env}.ts

export default {
  {{name}}: {
  },
}
```

use the plugin

```typescript
const res = await app.{{name}};
```
