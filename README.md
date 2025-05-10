# According.Work OpenAPI

## 工作原理
后端仓库在合入 dev 后会自动编译 OpenAPI 文件，生成相应接口所需的类型及请求方法，并发布到当前仓库的 main 分支。

前端代码通过 submodule 引用当前仓库，在 `src/service/index.ts` 中完成请求库的封装，其中 `src/service/instance` 里可以实现一些通用逻辑，比如拦截器。

```typescript
import http from './instance'
import { TaskApi, Configuration, ReportApi } from '@/openapi/client'

export const taskApi = new TaskApi(
  new Configuration({
    basePath: import.meta.env.VITE_BASE_URL,
  }),
  '',
  http,
)

export const reportApi = new ReportApi(
  new Configuration({
    basePath: import.meta.env.VITE_BASE_URL,
  }),
  '',
  http,
)
```

开发前端代码时，如果无需改动接口层，无需更新 submodule。 否则需将 submodule 更新到最新版本，并确保不会有任何类型错误。
（如果有不向前兼容的接口变更，通常需要后端和前端同学协同协作。）
（这个流程仍然值得优化。）

## 限制
- 后端自动编译，分支管理比较困难，因为每个分支编译出来的代码虽然也许是一样的，但 commit id 并不一样，不同分支独立维护保持一致会有困难。 所以如果后端合到 dev 就会发 sdk 到 openapi 的 main，大家在自己的分支按需和 main 上不同的版本保持一致就行。
- 如果出现接口结构变动，比如更换名字，可能导致新增文件，但是原有文件不会被删除。考虑自动化处理，目前需要手动删除已经不再需要的文件。暂时由 @wfnuser 统一处理即可。





