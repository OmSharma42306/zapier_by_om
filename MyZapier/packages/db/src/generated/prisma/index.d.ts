
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Zap
 * 
 */
export type Zap = $Result.DefaultSelection<Prisma.$ZapPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Avilabletriggers
 * 
 */
export type Avilabletriggers = $Result.DefaultSelection<Prisma.$AvilabletriggersPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model AvilableActions
 * 
 */
export type AvilableActions = $Result.DefaultSelection<Prisma.$AvilableActionsPayload>
/**
 * Model ZapRuns
 * 
 */
export type ZapRuns = $Result.DefaultSelection<Prisma.$ZapRunsPayload>
/**
 * Model ZapRunOutbox
 * 
 */
export type ZapRunOutbox = $Result.DefaultSelection<Prisma.$ZapRunOutboxPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zap`: Exposes CRUD operations for the **Zap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zaps
    * const zaps = await prisma.zap.findMany()
    * ```
    */
  get zap(): Prisma.ZapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avilabletriggers`: Exposes CRUD operations for the **Avilabletriggers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avilabletriggers
    * const avilabletriggers = await prisma.avilabletriggers.findMany()
    * ```
    */
  get avilabletriggers(): Prisma.AvilabletriggersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avilableActions`: Exposes CRUD operations for the **AvilableActions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvilableActions
    * const avilableActions = await prisma.avilableActions.findMany()
    * ```
    */
  get avilableActions(): Prisma.AvilableActionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRuns`: Exposes CRUD operations for the **ZapRuns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRuns
    * const zapRuns = await prisma.zapRuns.findMany()
    * ```
    */
  get zapRuns(): Prisma.ZapRunsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRunOutbox`: Exposes CRUD operations for the **ZapRunOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRunOutboxes
    * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
    * ```
    */
  get zapRunOutbox(): Prisma.ZapRunOutboxDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Zap: 'Zap',
    Trigger: 'Trigger',
    Avilabletriggers: 'Avilabletriggers',
    Action: 'Action',
    AvilableActions: 'AvilableActions',
    ZapRuns: 'ZapRuns',
    ZapRunOutbox: 'ZapRunOutbox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "zap" | "trigger" | "avilabletriggers" | "action" | "avilableActions" | "zapRuns" | "zapRunOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Zap: {
        payload: Prisma.$ZapPayload<ExtArgs>
        fields: Prisma.ZapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findFirst: {
            args: Prisma.ZapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findMany: {
            args: Prisma.ZapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          create: {
            args: Prisma.ZapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          createMany: {
            args: Prisma.ZapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          delete: {
            args: Prisma.ZapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          update: {
            args: Prisma.ZapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          deleteMany: {
            args: Prisma.ZapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          upsert: {
            args: Prisma.ZapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          aggregate: {
            args: Prisma.ZapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZap>
          }
          groupBy: {
            args: Prisma.ZapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapCountArgs<ExtArgs>
            result: $Utils.Optional<ZapCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Avilabletriggers: {
        payload: Prisma.$AvilabletriggersPayload<ExtArgs>
        fields: Prisma.AvilabletriggersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvilabletriggersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvilabletriggersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>
          }
          findFirst: {
            args: Prisma.AvilabletriggersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvilabletriggersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>
          }
          findMany: {
            args: Prisma.AvilabletriggersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>[]
          }
          create: {
            args: Prisma.AvilabletriggersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>
          }
          createMany: {
            args: Prisma.AvilabletriggersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvilabletriggersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>[]
          }
          delete: {
            args: Prisma.AvilabletriggersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>
          }
          update: {
            args: Prisma.AvilabletriggersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>
          }
          deleteMany: {
            args: Prisma.AvilabletriggersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvilabletriggersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvilabletriggersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>[]
          }
          upsert: {
            args: Prisma.AvilabletriggersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilabletriggersPayload>
          }
          aggregate: {
            args: Prisma.AvilabletriggersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvilabletriggers>
          }
          groupBy: {
            args: Prisma.AvilabletriggersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvilabletriggersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvilabletriggersCountArgs<ExtArgs>
            result: $Utils.Optional<AvilabletriggersCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      AvilableActions: {
        payload: Prisma.$AvilableActionsPayload<ExtArgs>
        fields: Prisma.AvilableActionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvilableActionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvilableActionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>
          }
          findFirst: {
            args: Prisma.AvilableActionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvilableActionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>
          }
          findMany: {
            args: Prisma.AvilableActionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>[]
          }
          create: {
            args: Prisma.AvilableActionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>
          }
          createMany: {
            args: Prisma.AvilableActionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvilableActionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>[]
          }
          delete: {
            args: Prisma.AvilableActionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>
          }
          update: {
            args: Prisma.AvilableActionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>
          }
          deleteMany: {
            args: Prisma.AvilableActionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvilableActionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvilableActionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>[]
          }
          upsert: {
            args: Prisma.AvilableActionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvilableActionsPayload>
          }
          aggregate: {
            args: Prisma.AvilableActionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvilableActions>
          }
          groupBy: {
            args: Prisma.AvilableActionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvilableActionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvilableActionsCountArgs<ExtArgs>
            result: $Utils.Optional<AvilableActionsCountAggregateOutputType> | number
          }
        }
      }
      ZapRuns: {
        payload: Prisma.$ZapRunsPayload<ExtArgs>
        fields: Prisma.ZapRunsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapRunsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapRunsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>
          }
          findFirst: {
            args: Prisma.ZapRunsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapRunsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>
          }
          findMany: {
            args: Prisma.ZapRunsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>[]
          }
          create: {
            args: Prisma.ZapRunsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>
          }
          createMany: {
            args: Prisma.ZapRunsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapRunsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>[]
          }
          delete: {
            args: Prisma.ZapRunsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>
          }
          update: {
            args: Prisma.ZapRunsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>
          }
          deleteMany: {
            args: Prisma.ZapRunsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapRunsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapRunsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>[]
          }
          upsert: {
            args: Prisma.ZapRunsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunsPayload>
          }
          aggregate: {
            args: Prisma.ZapRunsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRuns>
          }
          groupBy: {
            args: Prisma.ZapRunsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapRunsCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunsCountAggregateOutputType> | number
          }
        }
      }
      ZapRunOutbox: {
        payload: Prisma.$ZapRunOutboxPayload<ExtArgs>
        fields: Prisma.ZapRunOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapRunOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          findFirst: {
            args: Prisma.ZapRunOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapRunOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          findMany: {
            args: Prisma.ZapRunOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[]
          }
          create: {
            args: Prisma.ZapRunOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          createMany: {
            args: Prisma.ZapRunOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapRunOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[]
          }
          delete: {
            args: Prisma.ZapRunOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          update: {
            args: Prisma.ZapRunOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          deleteMany: {
            args: Prisma.ZapRunOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapRunOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapRunOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>[]
          }
          upsert: {
            args: Prisma.ZapRunOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutboxPayload>
          }
          aggregate: {
            args: Prisma.ZapRunOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRunOutbox>
          }
          groupBy: {
            args: Prisma.ZapRunOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapRunOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutboxCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    zap?: ZapOmit
    trigger?: TriggerOmit
    avilabletriggers?: AvilabletriggersOmit
    action?: ActionOmit
    avilableActions?: AvilableActionsOmit
    zapRuns?: ZapRunsOmit
    zapRunOutbox?: ZapRunOutboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    zap: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | UserCountOutputTypeCountZapArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountZapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
  }


  /**
   * Count Type ZapCountOutputType
   */

  export type ZapCountOutputType = {
    action: number
    zapRuns: number
  }

  export type ZapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ZapCountOutputTypeCountActionArgs
    zapRuns?: boolean | ZapCountOutputTypeCountZapRunsArgs
  }

  // Custom InputTypes
  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: ZapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountZapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunsWhereInput
  }


  /**
   * Count Type AvilabletriggersCountOutputType
   */

  export type AvilabletriggersCountOutputType = {
    triggers: number
  }

  export type AvilabletriggersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvilabletriggersCountOutputTypeCountTriggersArgs
  }

  // Custom InputTypes
  /**
   * AvilabletriggersCountOutputType without action
   */
  export type AvilabletriggersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilabletriggersCountOutputType
     */
    select?: AvilabletriggersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvilabletriggersCountOutputType without action
   */
  export type AvilabletriggersCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Count Type AvilableActionsCountOutputType
   */

  export type AvilableActionsCountOutputType = {
    actions: number
  }

  export type AvilableActionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvilableActionsCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * AvilableActionsCountOutputType without action
   */
  export type AvilableActionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActionsCountOutputType
     */
    select?: AvilableActionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvilableActionsCountOutputType without action
   */
  export type AvilableActionsCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    zap?: boolean | User$zapArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | User$zapArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends User$zapArgs<ExtArgs> = {}>(args?: Subset<T, User$zapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.zap
   */
  export type User$zapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    cursor?: ZapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Zap
   */

  export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null
    _avg: ZapAvgAggregateOutputType | null
    _sum: ZapSumAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  export type ZapAvgAggregateOutputType = {
    userId: number | null
  }

  export type ZapSumAggregateOutputType = {
    userId: number | null
  }

  export type ZapMinAggregateOutputType = {
    id: string | null
    userId: number | null
    triggerId: string | null
  }

  export type ZapMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    triggerId: string | null
  }

  export type ZapCountAggregateOutputType = {
    id: number
    userId: number
    triggerId: number
    _all: number
  }


  export type ZapAvgAggregateInputType = {
    userId?: true
  }

  export type ZapSumAggregateInputType = {
    userId?: true
  }

  export type ZapMinAggregateInputType = {
    id?: true
    userId?: true
    triggerId?: true
  }

  export type ZapMaxAggregateInputType = {
    id?: true
    userId?: true
    triggerId?: true
  }

  export type ZapCountAggregateInputType = {
    id?: true
    userId?: true
    triggerId?: true
    _all?: true
  }

  export type ZapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zap to aggregate.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zaps
    **/
    _count?: true | ZapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapMaxAggregateInputType
  }

  export type GetZapAggregateType<T extends ZapAggregateArgs> = {
        [P in keyof T & keyof AggregateZap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZap[P]>
      : GetScalarType<T[P], AggregateZap[P]>
  }




  export type ZapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithAggregationInput | ZapOrderByWithAggregationInput[]
    by: ZapScalarFieldEnum[] | ZapScalarFieldEnum
    having?: ZapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapCountAggregateInputType | true
    _avg?: ZapAvgAggregateInputType
    _sum?: ZapSumAggregateInputType
    _min?: ZapMinAggregateInputType
    _max?: ZapMaxAggregateInputType
  }

  export type ZapGroupByOutputType = {
    id: string
    userId: number
    triggerId: string
    _count: ZapCountAggregateOutputType | null
    _avg: ZapAvgAggregateOutputType | null
    _sum: ZapSumAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  type GetZapGroupByPayload<T extends ZapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapGroupByOutputType[P]>
            : GetScalarType<T[P], ZapGroupByOutputType[P]>
        }
      >
    >


  export type ZapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    triggerId?: boolean
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    triggerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    triggerId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectScalar = {
    id?: boolean
    userId?: boolean
    triggerId?: boolean
  }

  export type ZapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "triggerId", ExtArgs["result"]["zap"]>
  export type ZapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ZapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ZapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zap"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      action: Prisma.$ActionPayload<ExtArgs>[]
      zapRuns: Prisma.$ZapRunsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      triggerId: string
    }, ExtArgs["result"]["zap"]>
    composites: {}
  }

  type ZapGetPayload<S extends boolean | null | undefined | ZapDefaultArgs> = $Result.GetResult<Prisma.$ZapPayload, S>

  type ZapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapCountAggregateInputType | true
    }

  export interface ZapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zap'], meta: { name: 'Zap' } }
    /**
     * Find zero or one Zap that matches the filter.
     * @param {ZapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapFindUniqueArgs>(args: SelectSubset<T, ZapFindUniqueArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapFindFirstArgs>(args?: SelectSubset<T, ZapFindFirstArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     * 
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapFindManyArgs>(args?: SelectSubset<T, ZapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zap.
     * @param {ZapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     * 
     */
    create<T extends ZapCreateArgs>(args: SelectSubset<T, ZapCreateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zaps.
     * @param {ZapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapCreateManyArgs>(args?: SelectSubset<T, ZapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {ZapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zap.
     * @param {ZapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     * 
     */
    delete<T extends ZapDeleteArgs>(args: SelectSubset<T, ZapDeleteArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zap.
     * @param {ZapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapUpdateArgs>(args: SelectSubset<T, ZapUpdateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zaps.
     * @param {ZapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapDeleteManyArgs>(args?: SelectSubset<T, ZapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapUpdateManyArgs>(args: SelectSubset<T, ZapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps and returns the data updated in the database.
     * @param {ZapUpdateManyAndReturnArgs} args - Arguments to update many Zaps.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zap.
     * @param {ZapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends ZapUpsertArgs>(args: SelectSubset<T, ZapUpsertArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
    **/
    count<T extends ZapCountArgs>(
      args?: Subset<T, ZapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapAggregateArgs>(args: Subset<T, ZapAggregateArgs>): Prisma.PrismaPromise<GetZapAggregateType<T>>

    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapGroupByArgs['orderBy'] }
        : { orderBy?: ZapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zap model
   */
  readonly fields: ZapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Zap$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Zap$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends Zap$actionArgs<ExtArgs> = {}>(args?: Subset<T, Zap$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zapRuns<T extends Zap$zapRunsArgs<ExtArgs> = {}>(args?: Subset<T, Zap$zapRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Zap model
   */
  interface ZapFieldRefs {
    readonly id: FieldRef<"Zap", 'String'>
    readonly userId: FieldRef<"Zap", 'Int'>
    readonly triggerId: FieldRef<"Zap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zap findUnique
   */
  export type ZapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findUniqueOrThrow
   */
  export type ZapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findFirst
   */
  export type ZapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findFirstOrThrow
   */
  export type ZapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findMany
   */
  export type ZapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zaps to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap create
   */
  export type ZapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to create a Zap.
     */
    data: XOR<ZapCreateInput, ZapUncheckedCreateInput>
  }

  /**
   * Zap createMany
   */
  export type ZapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap createManyAndReturn
   */
  export type ZapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zap update
   */
  export type ZapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to update a Zap.
     */
    data: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
    /**
     * Choose, which Zap to update.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap updateMany
   */
  export type ZapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap updateManyAndReturn
   */
  export type ZapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zap upsert
   */
  export type ZapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The filter to search for the Zap to update in case it exists.
     */
    where: ZapWhereUniqueInput
    /**
     * In case the Zap found by the `where` argument doesn't exist, create a new Zap with this data.
     */
    create: XOR<ZapCreateInput, ZapUncheckedCreateInput>
    /**
     * In case the Zap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
  }

  /**
   * Zap delete
   */
  export type ZapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter which Zap to delete.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap deleteMany
   */
  export type ZapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zaps to delete
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to delete.
     */
    limit?: number
  }

  /**
   * Zap.trigger
   */
  export type Zap$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Zap.action
   */
  export type Zap$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Zap.zapRuns
   */
  export type Zap$zapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    where?: ZapRunsWhereInput
    orderBy?: ZapRunsOrderByWithRelationInput | ZapRunsOrderByWithRelationInput[]
    cursor?: ZapRunsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapRunsScalarFieldEnum | ZapRunsScalarFieldEnum[]
  }

  /**
   * Zap without action
   */
  export type ZapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    zapId: string | null
    triggerId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
    triggerId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    zapId: number
    triggerId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    zapId?: true
    triggerId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    zapId: string
    triggerId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    type?: boolean | AvilabletriggersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    type?: boolean | AvilabletriggersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    type?: boolean | AvilabletriggersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    zapId?: boolean
    triggerId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "triggerId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    type?: boolean | AvilabletriggersDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    type?: boolean | AvilabletriggersDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    type?: boolean | AvilabletriggersDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>
      type: Prisma.$AvilabletriggersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      triggerId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends AvilabletriggersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvilabletriggersDefaultArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly zapId: FieldRef<"Trigger", 'String'>
    readonly triggerId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Avilabletriggers
   */

  export type AggregateAvilabletriggers = {
    _count: AvilabletriggersCountAggregateOutputType | null
    _min: AvilabletriggersMinAggregateOutputType | null
    _max: AvilabletriggersMaxAggregateOutputType | null
  }

  export type AvilabletriggersMinAggregateOutputType = {
    id: string | null
    triggerName: string | null
  }

  export type AvilabletriggersMaxAggregateOutputType = {
    id: string | null
    triggerName: string | null
  }

  export type AvilabletriggersCountAggregateOutputType = {
    id: number
    triggerName: number
    _all: number
  }


  export type AvilabletriggersMinAggregateInputType = {
    id?: true
    triggerName?: true
  }

  export type AvilabletriggersMaxAggregateInputType = {
    id?: true
    triggerName?: true
  }

  export type AvilabletriggersCountAggregateInputType = {
    id?: true
    triggerName?: true
    _all?: true
  }

  export type AvilabletriggersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avilabletriggers to aggregate.
     */
    where?: AvilabletriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avilabletriggers to fetch.
     */
    orderBy?: AvilabletriggersOrderByWithRelationInput | AvilabletriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvilabletriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avilabletriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avilabletriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avilabletriggers
    **/
    _count?: true | AvilabletriggersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvilabletriggersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvilabletriggersMaxAggregateInputType
  }

  export type GetAvilabletriggersAggregateType<T extends AvilabletriggersAggregateArgs> = {
        [P in keyof T & keyof AggregateAvilabletriggers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvilabletriggers[P]>
      : GetScalarType<T[P], AggregateAvilabletriggers[P]>
  }




  export type AvilabletriggersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvilabletriggersWhereInput
    orderBy?: AvilabletriggersOrderByWithAggregationInput | AvilabletriggersOrderByWithAggregationInput[]
    by: AvilabletriggersScalarFieldEnum[] | AvilabletriggersScalarFieldEnum
    having?: AvilabletriggersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvilabletriggersCountAggregateInputType | true
    _min?: AvilabletriggersMinAggregateInputType
    _max?: AvilabletriggersMaxAggregateInputType
  }

  export type AvilabletriggersGroupByOutputType = {
    id: string
    triggerName: string
    _count: AvilabletriggersCountAggregateOutputType | null
    _min: AvilabletriggersMinAggregateOutputType | null
    _max: AvilabletriggersMaxAggregateOutputType | null
  }

  type GetAvilabletriggersGroupByPayload<T extends AvilabletriggersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvilabletriggersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvilabletriggersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvilabletriggersGroupByOutputType[P]>
            : GetScalarType<T[P], AvilabletriggersGroupByOutputType[P]>
        }
      >
    >


  export type AvilabletriggersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerName?: boolean
    triggers?: boolean | Avilabletriggers$triggersArgs<ExtArgs>
    _count?: boolean | AvilabletriggersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avilabletriggers"]>

  export type AvilabletriggersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerName?: boolean
  }, ExtArgs["result"]["avilabletriggers"]>

  export type AvilabletriggersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerName?: boolean
  }, ExtArgs["result"]["avilabletriggers"]>

  export type AvilabletriggersSelectScalar = {
    id?: boolean
    triggerName?: boolean
  }

  export type AvilabletriggersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerName", ExtArgs["result"]["avilabletriggers"]>
  export type AvilabletriggersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | Avilabletriggers$triggersArgs<ExtArgs>
    _count?: boolean | AvilabletriggersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvilabletriggersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvilabletriggersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvilabletriggersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avilabletriggers"
    objects: {
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerName: string
    }, ExtArgs["result"]["avilabletriggers"]>
    composites: {}
  }

  type AvilabletriggersGetPayload<S extends boolean | null | undefined | AvilabletriggersDefaultArgs> = $Result.GetResult<Prisma.$AvilabletriggersPayload, S>

  type AvilabletriggersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvilabletriggersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvilabletriggersCountAggregateInputType | true
    }

  export interface AvilabletriggersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avilabletriggers'], meta: { name: 'Avilabletriggers' } }
    /**
     * Find zero or one Avilabletriggers that matches the filter.
     * @param {AvilabletriggersFindUniqueArgs} args - Arguments to find a Avilabletriggers
     * @example
     * // Get one Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvilabletriggersFindUniqueArgs>(args: SelectSubset<T, AvilabletriggersFindUniqueArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avilabletriggers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvilabletriggersFindUniqueOrThrowArgs} args - Arguments to find a Avilabletriggers
     * @example
     * // Get one Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvilabletriggersFindUniqueOrThrowArgs>(args: SelectSubset<T, AvilabletriggersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avilabletriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilabletriggersFindFirstArgs} args - Arguments to find a Avilabletriggers
     * @example
     * // Get one Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvilabletriggersFindFirstArgs>(args?: SelectSubset<T, AvilabletriggersFindFirstArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avilabletriggers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilabletriggersFindFirstOrThrowArgs} args - Arguments to find a Avilabletriggers
     * @example
     * // Get one Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvilabletriggersFindFirstOrThrowArgs>(args?: SelectSubset<T, AvilabletriggersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avilabletriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilabletriggersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.findMany()
     * 
     * // Get first 10 Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avilabletriggersWithIdOnly = await prisma.avilabletriggers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvilabletriggersFindManyArgs>(args?: SelectSubset<T, AvilabletriggersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avilabletriggers.
     * @param {AvilabletriggersCreateArgs} args - Arguments to create a Avilabletriggers.
     * @example
     * // Create one Avilabletriggers
     * const Avilabletriggers = await prisma.avilabletriggers.create({
     *   data: {
     *     // ... data to create a Avilabletriggers
     *   }
     * })
     * 
     */
    create<T extends AvilabletriggersCreateArgs>(args: SelectSubset<T, AvilabletriggersCreateArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avilabletriggers.
     * @param {AvilabletriggersCreateManyArgs} args - Arguments to create many Avilabletriggers.
     * @example
     * // Create many Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvilabletriggersCreateManyArgs>(args?: SelectSubset<T, AvilabletriggersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avilabletriggers and returns the data saved in the database.
     * @param {AvilabletriggersCreateManyAndReturnArgs} args - Arguments to create many Avilabletriggers.
     * @example
     * // Create many Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avilabletriggers and only return the `id`
     * const avilabletriggersWithIdOnly = await prisma.avilabletriggers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvilabletriggersCreateManyAndReturnArgs>(args?: SelectSubset<T, AvilabletriggersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avilabletriggers.
     * @param {AvilabletriggersDeleteArgs} args - Arguments to delete one Avilabletriggers.
     * @example
     * // Delete one Avilabletriggers
     * const Avilabletriggers = await prisma.avilabletriggers.delete({
     *   where: {
     *     // ... filter to delete one Avilabletriggers
     *   }
     * })
     * 
     */
    delete<T extends AvilabletriggersDeleteArgs>(args: SelectSubset<T, AvilabletriggersDeleteArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avilabletriggers.
     * @param {AvilabletriggersUpdateArgs} args - Arguments to update one Avilabletriggers.
     * @example
     * // Update one Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvilabletriggersUpdateArgs>(args: SelectSubset<T, AvilabletriggersUpdateArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avilabletriggers.
     * @param {AvilabletriggersDeleteManyArgs} args - Arguments to filter Avilabletriggers to delete.
     * @example
     * // Delete a few Avilabletriggers
     * const { count } = await prisma.avilabletriggers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvilabletriggersDeleteManyArgs>(args?: SelectSubset<T, AvilabletriggersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avilabletriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilabletriggersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvilabletriggersUpdateManyArgs>(args: SelectSubset<T, AvilabletriggersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avilabletriggers and returns the data updated in the database.
     * @param {AvilabletriggersUpdateManyAndReturnArgs} args - Arguments to update many Avilabletriggers.
     * @example
     * // Update many Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avilabletriggers and only return the `id`
     * const avilabletriggersWithIdOnly = await prisma.avilabletriggers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvilabletriggersUpdateManyAndReturnArgs>(args: SelectSubset<T, AvilabletriggersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avilabletriggers.
     * @param {AvilabletriggersUpsertArgs} args - Arguments to update or create a Avilabletriggers.
     * @example
     * // Update or create a Avilabletriggers
     * const avilabletriggers = await prisma.avilabletriggers.upsert({
     *   create: {
     *     // ... data to create a Avilabletriggers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avilabletriggers we want to update
     *   }
     * })
     */
    upsert<T extends AvilabletriggersUpsertArgs>(args: SelectSubset<T, AvilabletriggersUpsertArgs<ExtArgs>>): Prisma__AvilabletriggersClient<$Result.GetResult<Prisma.$AvilabletriggersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avilabletriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilabletriggersCountArgs} args - Arguments to filter Avilabletriggers to count.
     * @example
     * // Count the number of Avilabletriggers
     * const count = await prisma.avilabletriggers.count({
     *   where: {
     *     // ... the filter for the Avilabletriggers we want to count
     *   }
     * })
    **/
    count<T extends AvilabletriggersCountArgs>(
      args?: Subset<T, AvilabletriggersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvilabletriggersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avilabletriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilabletriggersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvilabletriggersAggregateArgs>(args: Subset<T, AvilabletriggersAggregateArgs>): Prisma.PrismaPromise<GetAvilabletriggersAggregateType<T>>

    /**
     * Group by Avilabletriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilabletriggersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvilabletriggersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvilabletriggersGroupByArgs['orderBy'] }
        : { orderBy?: AvilabletriggersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvilabletriggersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvilabletriggersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avilabletriggers model
   */
  readonly fields: AvilabletriggersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avilabletriggers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvilabletriggersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    triggers<T extends Avilabletriggers$triggersArgs<ExtArgs> = {}>(args?: Subset<T, Avilabletriggers$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avilabletriggers model
   */
  interface AvilabletriggersFieldRefs {
    readonly id: FieldRef<"Avilabletriggers", 'String'>
    readonly triggerName: FieldRef<"Avilabletriggers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avilabletriggers findUnique
   */
  export type AvilabletriggersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * Filter, which Avilabletriggers to fetch.
     */
    where: AvilabletriggersWhereUniqueInput
  }

  /**
   * Avilabletriggers findUniqueOrThrow
   */
  export type AvilabletriggersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * Filter, which Avilabletriggers to fetch.
     */
    where: AvilabletriggersWhereUniqueInput
  }

  /**
   * Avilabletriggers findFirst
   */
  export type AvilabletriggersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * Filter, which Avilabletriggers to fetch.
     */
    where?: AvilabletriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avilabletriggers to fetch.
     */
    orderBy?: AvilabletriggersOrderByWithRelationInput | AvilabletriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avilabletriggers.
     */
    cursor?: AvilabletriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avilabletriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avilabletriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avilabletriggers.
     */
    distinct?: AvilabletriggersScalarFieldEnum | AvilabletriggersScalarFieldEnum[]
  }

  /**
   * Avilabletriggers findFirstOrThrow
   */
  export type AvilabletriggersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * Filter, which Avilabletriggers to fetch.
     */
    where?: AvilabletriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avilabletriggers to fetch.
     */
    orderBy?: AvilabletriggersOrderByWithRelationInput | AvilabletriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avilabletriggers.
     */
    cursor?: AvilabletriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avilabletriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avilabletriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avilabletriggers.
     */
    distinct?: AvilabletriggersScalarFieldEnum | AvilabletriggersScalarFieldEnum[]
  }

  /**
   * Avilabletriggers findMany
   */
  export type AvilabletriggersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * Filter, which Avilabletriggers to fetch.
     */
    where?: AvilabletriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avilabletriggers to fetch.
     */
    orderBy?: AvilabletriggersOrderByWithRelationInput | AvilabletriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avilabletriggers.
     */
    cursor?: AvilabletriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avilabletriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avilabletriggers.
     */
    skip?: number
    distinct?: AvilabletriggersScalarFieldEnum | AvilabletriggersScalarFieldEnum[]
  }

  /**
   * Avilabletriggers create
   */
  export type AvilabletriggersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * The data needed to create a Avilabletriggers.
     */
    data: XOR<AvilabletriggersCreateInput, AvilabletriggersUncheckedCreateInput>
  }

  /**
   * Avilabletriggers createMany
   */
  export type AvilabletriggersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avilabletriggers.
     */
    data: AvilabletriggersCreateManyInput | AvilabletriggersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avilabletriggers createManyAndReturn
   */
  export type AvilabletriggersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * The data used to create many Avilabletriggers.
     */
    data: AvilabletriggersCreateManyInput | AvilabletriggersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avilabletriggers update
   */
  export type AvilabletriggersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * The data needed to update a Avilabletriggers.
     */
    data: XOR<AvilabletriggersUpdateInput, AvilabletriggersUncheckedUpdateInput>
    /**
     * Choose, which Avilabletriggers to update.
     */
    where: AvilabletriggersWhereUniqueInput
  }

  /**
   * Avilabletriggers updateMany
   */
  export type AvilabletriggersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avilabletriggers.
     */
    data: XOR<AvilabletriggersUpdateManyMutationInput, AvilabletriggersUncheckedUpdateManyInput>
    /**
     * Filter which Avilabletriggers to update
     */
    where?: AvilabletriggersWhereInput
    /**
     * Limit how many Avilabletriggers to update.
     */
    limit?: number
  }

  /**
   * Avilabletriggers updateManyAndReturn
   */
  export type AvilabletriggersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * The data used to update Avilabletriggers.
     */
    data: XOR<AvilabletriggersUpdateManyMutationInput, AvilabletriggersUncheckedUpdateManyInput>
    /**
     * Filter which Avilabletriggers to update
     */
    where?: AvilabletriggersWhereInput
    /**
     * Limit how many Avilabletriggers to update.
     */
    limit?: number
  }

  /**
   * Avilabletriggers upsert
   */
  export type AvilabletriggersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * The filter to search for the Avilabletriggers to update in case it exists.
     */
    where: AvilabletriggersWhereUniqueInput
    /**
     * In case the Avilabletriggers found by the `where` argument doesn't exist, create a new Avilabletriggers with this data.
     */
    create: XOR<AvilabletriggersCreateInput, AvilabletriggersUncheckedCreateInput>
    /**
     * In case the Avilabletriggers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvilabletriggersUpdateInput, AvilabletriggersUncheckedUpdateInput>
  }

  /**
   * Avilabletriggers delete
   */
  export type AvilabletriggersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
    /**
     * Filter which Avilabletriggers to delete.
     */
    where: AvilabletriggersWhereUniqueInput
  }

  /**
   * Avilabletriggers deleteMany
   */
  export type AvilabletriggersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avilabletriggers to delete
     */
    where?: AvilabletriggersWhereInput
    /**
     * Limit how many Avilabletriggers to delete.
     */
    limit?: number
  }

  /**
   * Avilabletriggers.triggers
   */
  export type Avilabletriggers$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Avilabletriggers without action
   */
  export type AvilabletriggersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avilabletriggers
     */
    select?: AvilabletriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avilabletriggers
     */
    omit?: AvilabletriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilabletriggersInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionSumAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    actionId: string | null
    zapId: string | null
    sortingOrder: number | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    actionId: string | null
    zapId: string | null
    sortingOrder: number | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    actionId: number
    zapId: number
    sortingOrder: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionSumAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    actionId?: true
    zapId?: true
    sortingOrder?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    actionId?: true
    zapId?: true
    sortingOrder?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    actionId?: true
    zapId?: true
    sortingOrder?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    actionId: string
    zapId: string
    sortingOrder: number
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    sortingOrder?: boolean
    type?: boolean | AvilableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    sortingOrder?: boolean
    type?: boolean | AvilableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    sortingOrder?: boolean
    type?: boolean | AvilableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    actionId?: boolean
    zapId?: boolean
    sortingOrder?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionId" | "zapId" | "sortingOrder", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvilableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvilableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvilableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      type: Prisma.$AvilableActionsPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionId: string
      zapId: string
      sortingOrder: number
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvilableActionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvilableActionsDefaultArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly actionId: FieldRef<"Action", 'String'>
    readonly zapId: FieldRef<"Action", 'String'>
    readonly sortingOrder: FieldRef<"Action", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model AvilableActions
   */

  export type AggregateAvilableActions = {
    _count: AvilableActionsCountAggregateOutputType | null
    _min: AvilableActionsMinAggregateOutputType | null
    _max: AvilableActionsMaxAggregateOutputType | null
  }

  export type AvilableActionsMinAggregateOutputType = {
    id: string | null
    actionName: string | null
  }

  export type AvilableActionsMaxAggregateOutputType = {
    id: string | null
    actionName: string | null
  }

  export type AvilableActionsCountAggregateOutputType = {
    id: number
    actionName: number
    _all: number
  }


  export type AvilableActionsMinAggregateInputType = {
    id?: true
    actionName?: true
  }

  export type AvilableActionsMaxAggregateInputType = {
    id?: true
    actionName?: true
  }

  export type AvilableActionsCountAggregateInputType = {
    id?: true
    actionName?: true
    _all?: true
  }

  export type AvilableActionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvilableActions to aggregate.
     */
    where?: AvilableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvilableActions to fetch.
     */
    orderBy?: AvilableActionsOrderByWithRelationInput | AvilableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvilableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvilableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvilableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvilableActions
    **/
    _count?: true | AvilableActionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvilableActionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvilableActionsMaxAggregateInputType
  }

  export type GetAvilableActionsAggregateType<T extends AvilableActionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAvilableActions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvilableActions[P]>
      : GetScalarType<T[P], AggregateAvilableActions[P]>
  }




  export type AvilableActionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvilableActionsWhereInput
    orderBy?: AvilableActionsOrderByWithAggregationInput | AvilableActionsOrderByWithAggregationInput[]
    by: AvilableActionsScalarFieldEnum[] | AvilableActionsScalarFieldEnum
    having?: AvilableActionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvilableActionsCountAggregateInputType | true
    _min?: AvilableActionsMinAggregateInputType
    _max?: AvilableActionsMaxAggregateInputType
  }

  export type AvilableActionsGroupByOutputType = {
    id: string
    actionName: string
    _count: AvilableActionsCountAggregateOutputType | null
    _min: AvilableActionsMinAggregateOutputType | null
    _max: AvilableActionsMaxAggregateOutputType | null
  }

  type GetAvilableActionsGroupByPayload<T extends AvilableActionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvilableActionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvilableActionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvilableActionsGroupByOutputType[P]>
            : GetScalarType<T[P], AvilableActionsGroupByOutputType[P]>
        }
      >
    >


  export type AvilableActionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionName?: boolean
    actions?: boolean | AvilableActions$actionsArgs<ExtArgs>
    _count?: boolean | AvilableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avilableActions"]>

  export type AvilableActionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionName?: boolean
  }, ExtArgs["result"]["avilableActions"]>

  export type AvilableActionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionName?: boolean
  }, ExtArgs["result"]["avilableActions"]>

  export type AvilableActionsSelectScalar = {
    id?: boolean
    actionName?: boolean
  }

  export type AvilableActionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionName", ExtArgs["result"]["avilableActions"]>
  export type AvilableActionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvilableActions$actionsArgs<ExtArgs>
    _count?: boolean | AvilableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvilableActionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvilableActionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvilableActionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvilableActions"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionName: string
    }, ExtArgs["result"]["avilableActions"]>
    composites: {}
  }

  type AvilableActionsGetPayload<S extends boolean | null | undefined | AvilableActionsDefaultArgs> = $Result.GetResult<Prisma.$AvilableActionsPayload, S>

  type AvilableActionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvilableActionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvilableActionsCountAggregateInputType | true
    }

  export interface AvilableActionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvilableActions'], meta: { name: 'AvilableActions' } }
    /**
     * Find zero or one AvilableActions that matches the filter.
     * @param {AvilableActionsFindUniqueArgs} args - Arguments to find a AvilableActions
     * @example
     * // Get one AvilableActions
     * const avilableActions = await prisma.avilableActions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvilableActionsFindUniqueArgs>(args: SelectSubset<T, AvilableActionsFindUniqueArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvilableActions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvilableActionsFindUniqueOrThrowArgs} args - Arguments to find a AvilableActions
     * @example
     * // Get one AvilableActions
     * const avilableActions = await prisma.avilableActions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvilableActionsFindUniqueOrThrowArgs>(args: SelectSubset<T, AvilableActionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvilableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilableActionsFindFirstArgs} args - Arguments to find a AvilableActions
     * @example
     * // Get one AvilableActions
     * const avilableActions = await prisma.avilableActions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvilableActionsFindFirstArgs>(args?: SelectSubset<T, AvilableActionsFindFirstArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvilableActions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilableActionsFindFirstOrThrowArgs} args - Arguments to find a AvilableActions
     * @example
     * // Get one AvilableActions
     * const avilableActions = await prisma.avilableActions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvilableActionsFindFirstOrThrowArgs>(args?: SelectSubset<T, AvilableActionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvilableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilableActionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvilableActions
     * const avilableActions = await prisma.avilableActions.findMany()
     * 
     * // Get first 10 AvilableActions
     * const avilableActions = await prisma.avilableActions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avilableActionsWithIdOnly = await prisma.avilableActions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvilableActionsFindManyArgs>(args?: SelectSubset<T, AvilableActionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvilableActions.
     * @param {AvilableActionsCreateArgs} args - Arguments to create a AvilableActions.
     * @example
     * // Create one AvilableActions
     * const AvilableActions = await prisma.avilableActions.create({
     *   data: {
     *     // ... data to create a AvilableActions
     *   }
     * })
     * 
     */
    create<T extends AvilableActionsCreateArgs>(args: SelectSubset<T, AvilableActionsCreateArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvilableActions.
     * @param {AvilableActionsCreateManyArgs} args - Arguments to create many AvilableActions.
     * @example
     * // Create many AvilableActions
     * const avilableActions = await prisma.avilableActions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvilableActionsCreateManyArgs>(args?: SelectSubset<T, AvilableActionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvilableActions and returns the data saved in the database.
     * @param {AvilableActionsCreateManyAndReturnArgs} args - Arguments to create many AvilableActions.
     * @example
     * // Create many AvilableActions
     * const avilableActions = await prisma.avilableActions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvilableActions and only return the `id`
     * const avilableActionsWithIdOnly = await prisma.avilableActions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvilableActionsCreateManyAndReturnArgs>(args?: SelectSubset<T, AvilableActionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvilableActions.
     * @param {AvilableActionsDeleteArgs} args - Arguments to delete one AvilableActions.
     * @example
     * // Delete one AvilableActions
     * const AvilableActions = await prisma.avilableActions.delete({
     *   where: {
     *     // ... filter to delete one AvilableActions
     *   }
     * })
     * 
     */
    delete<T extends AvilableActionsDeleteArgs>(args: SelectSubset<T, AvilableActionsDeleteArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvilableActions.
     * @param {AvilableActionsUpdateArgs} args - Arguments to update one AvilableActions.
     * @example
     * // Update one AvilableActions
     * const avilableActions = await prisma.avilableActions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvilableActionsUpdateArgs>(args: SelectSubset<T, AvilableActionsUpdateArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvilableActions.
     * @param {AvilableActionsDeleteManyArgs} args - Arguments to filter AvilableActions to delete.
     * @example
     * // Delete a few AvilableActions
     * const { count } = await prisma.avilableActions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvilableActionsDeleteManyArgs>(args?: SelectSubset<T, AvilableActionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvilableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilableActionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvilableActions
     * const avilableActions = await prisma.avilableActions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvilableActionsUpdateManyArgs>(args: SelectSubset<T, AvilableActionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvilableActions and returns the data updated in the database.
     * @param {AvilableActionsUpdateManyAndReturnArgs} args - Arguments to update many AvilableActions.
     * @example
     * // Update many AvilableActions
     * const avilableActions = await prisma.avilableActions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvilableActions and only return the `id`
     * const avilableActionsWithIdOnly = await prisma.avilableActions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvilableActionsUpdateManyAndReturnArgs>(args: SelectSubset<T, AvilableActionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvilableActions.
     * @param {AvilableActionsUpsertArgs} args - Arguments to update or create a AvilableActions.
     * @example
     * // Update or create a AvilableActions
     * const avilableActions = await prisma.avilableActions.upsert({
     *   create: {
     *     // ... data to create a AvilableActions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvilableActions we want to update
     *   }
     * })
     */
    upsert<T extends AvilableActionsUpsertArgs>(args: SelectSubset<T, AvilableActionsUpsertArgs<ExtArgs>>): Prisma__AvilableActionsClient<$Result.GetResult<Prisma.$AvilableActionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvilableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilableActionsCountArgs} args - Arguments to filter AvilableActions to count.
     * @example
     * // Count the number of AvilableActions
     * const count = await prisma.avilableActions.count({
     *   where: {
     *     // ... the filter for the AvilableActions we want to count
     *   }
     * })
    **/
    count<T extends AvilableActionsCountArgs>(
      args?: Subset<T, AvilableActionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvilableActionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvilableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilableActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvilableActionsAggregateArgs>(args: Subset<T, AvilableActionsAggregateArgs>): Prisma.PrismaPromise<GetAvilableActionsAggregateType<T>>

    /**
     * Group by AvilableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvilableActionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvilableActionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvilableActionsGroupByArgs['orderBy'] }
        : { orderBy?: AvilableActionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvilableActionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvilableActionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvilableActions model
   */
  readonly fields: AvilableActionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvilableActions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvilableActionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends AvilableActions$actionsArgs<ExtArgs> = {}>(args?: Subset<T, AvilableActions$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvilableActions model
   */
  interface AvilableActionsFieldRefs {
    readonly id: FieldRef<"AvilableActions", 'String'>
    readonly actionName: FieldRef<"AvilableActions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvilableActions findUnique
   */
  export type AvilableActionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvilableActions to fetch.
     */
    where: AvilableActionsWhereUniqueInput
  }

  /**
   * AvilableActions findUniqueOrThrow
   */
  export type AvilableActionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvilableActions to fetch.
     */
    where: AvilableActionsWhereUniqueInput
  }

  /**
   * AvilableActions findFirst
   */
  export type AvilableActionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvilableActions to fetch.
     */
    where?: AvilableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvilableActions to fetch.
     */
    orderBy?: AvilableActionsOrderByWithRelationInput | AvilableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvilableActions.
     */
    cursor?: AvilableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvilableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvilableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvilableActions.
     */
    distinct?: AvilableActionsScalarFieldEnum | AvilableActionsScalarFieldEnum[]
  }

  /**
   * AvilableActions findFirstOrThrow
   */
  export type AvilableActionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvilableActions to fetch.
     */
    where?: AvilableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvilableActions to fetch.
     */
    orderBy?: AvilableActionsOrderByWithRelationInput | AvilableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvilableActions.
     */
    cursor?: AvilableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvilableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvilableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvilableActions.
     */
    distinct?: AvilableActionsScalarFieldEnum | AvilableActionsScalarFieldEnum[]
  }

  /**
   * AvilableActions findMany
   */
  export type AvilableActionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvilableActions to fetch.
     */
    where?: AvilableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvilableActions to fetch.
     */
    orderBy?: AvilableActionsOrderByWithRelationInput | AvilableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvilableActions.
     */
    cursor?: AvilableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvilableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvilableActions.
     */
    skip?: number
    distinct?: AvilableActionsScalarFieldEnum | AvilableActionsScalarFieldEnum[]
  }

  /**
   * AvilableActions create
   */
  export type AvilableActionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * The data needed to create a AvilableActions.
     */
    data: XOR<AvilableActionsCreateInput, AvilableActionsUncheckedCreateInput>
  }

  /**
   * AvilableActions createMany
   */
  export type AvilableActionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvilableActions.
     */
    data: AvilableActionsCreateManyInput | AvilableActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvilableActions createManyAndReturn
   */
  export type AvilableActionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * The data used to create many AvilableActions.
     */
    data: AvilableActionsCreateManyInput | AvilableActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvilableActions update
   */
  export type AvilableActionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * The data needed to update a AvilableActions.
     */
    data: XOR<AvilableActionsUpdateInput, AvilableActionsUncheckedUpdateInput>
    /**
     * Choose, which AvilableActions to update.
     */
    where: AvilableActionsWhereUniqueInput
  }

  /**
   * AvilableActions updateMany
   */
  export type AvilableActionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvilableActions.
     */
    data: XOR<AvilableActionsUpdateManyMutationInput, AvilableActionsUncheckedUpdateManyInput>
    /**
     * Filter which AvilableActions to update
     */
    where?: AvilableActionsWhereInput
    /**
     * Limit how many AvilableActions to update.
     */
    limit?: number
  }

  /**
   * AvilableActions updateManyAndReturn
   */
  export type AvilableActionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * The data used to update AvilableActions.
     */
    data: XOR<AvilableActionsUpdateManyMutationInput, AvilableActionsUncheckedUpdateManyInput>
    /**
     * Filter which AvilableActions to update
     */
    where?: AvilableActionsWhereInput
    /**
     * Limit how many AvilableActions to update.
     */
    limit?: number
  }

  /**
   * AvilableActions upsert
   */
  export type AvilableActionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * The filter to search for the AvilableActions to update in case it exists.
     */
    where: AvilableActionsWhereUniqueInput
    /**
     * In case the AvilableActions found by the `where` argument doesn't exist, create a new AvilableActions with this data.
     */
    create: XOR<AvilableActionsCreateInput, AvilableActionsUncheckedCreateInput>
    /**
     * In case the AvilableActions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvilableActionsUpdateInput, AvilableActionsUncheckedUpdateInput>
  }

  /**
   * AvilableActions delete
   */
  export type AvilableActionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
    /**
     * Filter which AvilableActions to delete.
     */
    where: AvilableActionsWhereUniqueInput
  }

  /**
   * AvilableActions deleteMany
   */
  export type AvilableActionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvilableActions to delete
     */
    where?: AvilableActionsWhereInput
    /**
     * Limit how many AvilableActions to delete.
     */
    limit?: number
  }

  /**
   * AvilableActions.actions
   */
  export type AvilableActions$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * AvilableActions without action
   */
  export type AvilableActionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvilableActions
     */
    select?: AvilableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvilableActions
     */
    omit?: AvilableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvilableActionsInclude<ExtArgs> | null
  }


  /**
   * Model ZapRuns
   */

  export type AggregateZapRuns = {
    _count: ZapRunsCountAggregateOutputType | null
    _min: ZapRunsMinAggregateOutputType | null
    _max: ZapRunsMaxAggregateOutputType | null
  }

  export type ZapRunsMinAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunsMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunsCountAggregateOutputType = {
    id: number
    zapId: number
    metadata: number
    _all: number
  }


  export type ZapRunsMinAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunsMaxAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunsCountAggregateInputType = {
    id?: true
    zapId?: true
    metadata?: true
    _all?: true
  }

  export type ZapRunsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRuns to aggregate.
     */
    where?: ZapRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunsOrderByWithRelationInput | ZapRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZapRuns
    **/
    _count?: true | ZapRunsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunsMaxAggregateInputType
  }

  export type GetZapRunsAggregateType<T extends ZapRunsAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRuns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRuns[P]>
      : GetScalarType<T[P], AggregateZapRuns[P]>
  }




  export type ZapRunsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunsWhereInput
    orderBy?: ZapRunsOrderByWithAggregationInput | ZapRunsOrderByWithAggregationInput[]
    by: ZapRunsScalarFieldEnum[] | ZapRunsScalarFieldEnum
    having?: ZapRunsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunsCountAggregateInputType | true
    _min?: ZapRunsMinAggregateInputType
    _max?: ZapRunsMaxAggregateInputType
  }

  export type ZapRunsGroupByOutputType = {
    id: string
    zapId: string
    metadata: JsonValue
    _count: ZapRunsCountAggregateOutputType | null
    _min: ZapRunsMinAggregateOutputType | null
    _max: ZapRunsMaxAggregateOutputType | null
  }

  type GetZapRunsGroupByPayload<T extends ZapRunsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunsGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunsGroupByOutputType[P]>
        }
      >
    >


  export type ZapRunsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zapRunOutbox?: boolean | ZapRuns$zapRunOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["zapRuns"]>

  export type ZapRunsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRuns"]>

  export type ZapRunsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRuns"]>

  export type ZapRunsSelectScalar = {
    id?: boolean
    zapId?: boolean
    metadata?: boolean
  }

  export type ZapRunsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "metadata", ExtArgs["result"]["zapRuns"]>
  export type ZapRunsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zapRunOutbox?: boolean | ZapRuns$zapRunOutboxArgs<ExtArgs>
  }
  export type ZapRunsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ZapRunsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ZapRunsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZapRuns"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>
      zapRunOutbox: Prisma.$ZapRunOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["zapRuns"]>
    composites: {}
  }

  type ZapRunsGetPayload<S extends boolean | null | undefined | ZapRunsDefaultArgs> = $Result.GetResult<Prisma.$ZapRunsPayload, S>

  type ZapRunsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapRunsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunsCountAggregateInputType | true
    }

  export interface ZapRunsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZapRuns'], meta: { name: 'ZapRuns' } }
    /**
     * Find zero or one ZapRuns that matches the filter.
     * @param {ZapRunsFindUniqueArgs} args - Arguments to find a ZapRuns
     * @example
     * // Get one ZapRuns
     * const zapRuns = await prisma.zapRuns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunsFindUniqueArgs>(args: SelectSubset<T, ZapRunsFindUniqueArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRuns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunsFindUniqueOrThrowArgs} args - Arguments to find a ZapRuns
     * @example
     * // Get one ZapRuns
     * const zapRuns = await prisma.zapRuns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunsFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapRunsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunsFindFirstArgs} args - Arguments to find a ZapRuns
     * @example
     * // Get one ZapRuns
     * const zapRuns = await prisma.zapRuns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunsFindFirstArgs>(args?: SelectSubset<T, ZapRunsFindFirstArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRuns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunsFindFirstOrThrowArgs} args - Arguments to find a ZapRuns
     * @example
     * // Get one ZapRuns
     * const zapRuns = await prisma.zapRuns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunsFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapRunsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRuns
     * const zapRuns = await prisma.zapRuns.findMany()
     * 
     * // Get first 10 ZapRuns
     * const zapRuns = await prisma.zapRuns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunsWithIdOnly = await prisma.zapRuns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapRunsFindManyArgs>(args?: SelectSubset<T, ZapRunsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRuns.
     * @param {ZapRunsCreateArgs} args - Arguments to create a ZapRuns.
     * @example
     * // Create one ZapRuns
     * const ZapRuns = await prisma.zapRuns.create({
     *   data: {
     *     // ... data to create a ZapRuns
     *   }
     * })
     * 
     */
    create<T extends ZapRunsCreateArgs>(args: SelectSubset<T, ZapRunsCreateArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRuns.
     * @param {ZapRunsCreateManyArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRuns = await prisma.zapRuns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapRunsCreateManyArgs>(args?: SelectSubset<T, ZapRunsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRuns and returns the data saved in the database.
     * @param {ZapRunsCreateManyAndReturnArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRuns = await prisma.zapRuns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRuns and only return the `id`
     * const zapRunsWithIdOnly = await prisma.zapRuns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapRunsCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapRunsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRuns.
     * @param {ZapRunsDeleteArgs} args - Arguments to delete one ZapRuns.
     * @example
     * // Delete one ZapRuns
     * const ZapRuns = await prisma.zapRuns.delete({
     *   where: {
     *     // ... filter to delete one ZapRuns
     *   }
     * })
     * 
     */
    delete<T extends ZapRunsDeleteArgs>(args: SelectSubset<T, ZapRunsDeleteArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRuns.
     * @param {ZapRunsUpdateArgs} args - Arguments to update one ZapRuns.
     * @example
     * // Update one ZapRuns
     * const zapRuns = await prisma.zapRuns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapRunsUpdateArgs>(args: SelectSubset<T, ZapRunsUpdateArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRuns.
     * @param {ZapRunsDeleteManyArgs} args - Arguments to filter ZapRuns to delete.
     * @example
     * // Delete a few ZapRuns
     * const { count } = await prisma.zapRuns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapRunsDeleteManyArgs>(args?: SelectSubset<T, ZapRunsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRuns
     * const zapRuns = await prisma.zapRuns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapRunsUpdateManyArgs>(args: SelectSubset<T, ZapRunsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns and returns the data updated in the database.
     * @param {ZapRunsUpdateManyAndReturnArgs} args - Arguments to update many ZapRuns.
     * @example
     * // Update many ZapRuns
     * const zapRuns = await prisma.zapRuns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRuns and only return the `id`
     * const zapRunsWithIdOnly = await prisma.zapRuns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapRunsUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapRunsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRuns.
     * @param {ZapRunsUpsertArgs} args - Arguments to update or create a ZapRuns.
     * @example
     * // Update or create a ZapRuns
     * const zapRuns = await prisma.zapRuns.upsert({
     *   create: {
     *     // ... data to create a ZapRuns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRuns we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunsUpsertArgs>(args: SelectSubset<T, ZapRunsUpsertArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunsCountArgs} args - Arguments to filter ZapRuns to count.
     * @example
     * // Count the number of ZapRuns
     * const count = await prisma.zapRuns.count({
     *   where: {
     *     // ... the filter for the ZapRuns we want to count
     *   }
     * })
    **/
    count<T extends ZapRunsCountArgs>(
      args?: Subset<T, ZapRunsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunsAggregateArgs>(args: Subset<T, ZapRunsAggregateArgs>): Prisma.PrismaPromise<GetZapRunsAggregateType<T>>

    /**
     * Group by ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapRunsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunsGroupByArgs['orderBy'] }
        : { orderBy?: ZapRunsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapRunsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZapRuns model
   */
  readonly fields: ZapRunsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRuns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zapRunOutbox<T extends ZapRuns$zapRunOutboxArgs<ExtArgs> = {}>(args?: Subset<T, ZapRuns$zapRunOutboxArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZapRuns model
   */
  interface ZapRunsFieldRefs {
    readonly id: FieldRef<"ZapRuns", 'String'>
    readonly zapId: FieldRef<"ZapRuns", 'String'>
    readonly metadata: FieldRef<"ZapRuns", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ZapRuns findUnique
   */
  export type ZapRunsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * Filter, which ZapRuns to fetch.
     */
    where: ZapRunsWhereUniqueInput
  }

  /**
   * ZapRuns findUniqueOrThrow
   */
  export type ZapRunsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * Filter, which ZapRuns to fetch.
     */
    where: ZapRunsWhereUniqueInput
  }

  /**
   * ZapRuns findFirst
   */
  export type ZapRunsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * Filter, which ZapRuns to fetch.
     */
    where?: ZapRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunsOrderByWithRelationInput | ZapRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunsScalarFieldEnum | ZapRunsScalarFieldEnum[]
  }

  /**
   * ZapRuns findFirstOrThrow
   */
  export type ZapRunsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * Filter, which ZapRuns to fetch.
     */
    where?: ZapRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunsOrderByWithRelationInput | ZapRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunsScalarFieldEnum | ZapRunsScalarFieldEnum[]
  }

  /**
   * ZapRuns findMany
   */
  export type ZapRunsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * Filter, which ZapRuns to fetch.
     */
    where?: ZapRunsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunsOrderByWithRelationInput | ZapRunsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZapRuns.
     */
    cursor?: ZapRunsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    distinct?: ZapRunsScalarFieldEnum | ZapRunsScalarFieldEnum[]
  }

  /**
   * ZapRuns create
   */
  export type ZapRunsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * The data needed to create a ZapRuns.
     */
    data: XOR<ZapRunsCreateInput, ZapRunsUncheckedCreateInput>
  }

  /**
   * ZapRuns createMany
   */
  export type ZapRunsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunsCreateManyInput | ZapRunsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZapRuns createManyAndReturn
   */
  export type ZapRunsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunsCreateManyInput | ZapRunsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRuns update
   */
  export type ZapRunsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * The data needed to update a ZapRuns.
     */
    data: XOR<ZapRunsUpdateInput, ZapRunsUncheckedUpdateInput>
    /**
     * Choose, which ZapRuns to update.
     */
    where: ZapRunsWhereUniqueInput
  }

  /**
   * ZapRuns updateMany
   */
  export type ZapRunsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZapRuns.
     */
    data: XOR<ZapRunsUpdateManyMutationInput, ZapRunsUncheckedUpdateManyInput>
    /**
     * Filter which ZapRuns to update
     */
    where?: ZapRunsWhereInput
    /**
     * Limit how many ZapRuns to update.
     */
    limit?: number
  }

  /**
   * ZapRuns updateManyAndReturn
   */
  export type ZapRunsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * The data used to update ZapRuns.
     */
    data: XOR<ZapRunsUpdateManyMutationInput, ZapRunsUncheckedUpdateManyInput>
    /**
     * Filter which ZapRuns to update
     */
    where?: ZapRunsWhereInput
    /**
     * Limit how many ZapRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRuns upsert
   */
  export type ZapRunsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * The filter to search for the ZapRuns to update in case it exists.
     */
    where: ZapRunsWhereUniqueInput
    /**
     * In case the ZapRuns found by the `where` argument doesn't exist, create a new ZapRuns with this data.
     */
    create: XOR<ZapRunsCreateInput, ZapRunsUncheckedCreateInput>
    /**
     * In case the ZapRuns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunsUpdateInput, ZapRunsUncheckedUpdateInput>
  }

  /**
   * ZapRuns delete
   */
  export type ZapRunsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
    /**
     * Filter which ZapRuns to delete.
     */
    where: ZapRunsWhereUniqueInput
  }

  /**
   * ZapRuns deleteMany
   */
  export type ZapRunsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRuns to delete
     */
    where?: ZapRunsWhereInput
    /**
     * Limit how many ZapRuns to delete.
     */
    limit?: number
  }

  /**
   * ZapRuns.zapRunOutbox
   */
  export type ZapRuns$zapRunOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    where?: ZapRunOutboxWhereInput
  }

  /**
   * ZapRuns without action
   */
  export type ZapRunsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRuns
     */
    select?: ZapRunsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRuns
     */
    omit?: ZapRunsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunsInclude<ExtArgs> | null
  }


  /**
   * Model ZapRunOutbox
   */

  export type AggregateZapRunOutbox = {
    _count: ZapRunOutboxCountAggregateOutputType | null
    _min: ZapRunOutboxMinAggregateOutputType | null
    _max: ZapRunOutboxMaxAggregateOutputType | null
  }

  export type ZapRunOutboxMinAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunOutboxMaxAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunOutboxCountAggregateOutputType = {
    id: number
    zapRunId: number
    _all: number
  }


  export type ZapRunOutboxMinAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunOutboxMaxAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunOutboxCountAggregateInputType = {
    id?: true
    zapRunId?: true
    _all?: true
  }

  export type ZapRunOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRunOutbox to aggregate.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZapRunOutboxes
    **/
    _count?: true | ZapRunOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunOutboxMaxAggregateInputType
  }

  export type GetZapRunOutboxAggregateType<T extends ZapRunOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRunOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRunOutbox[P]>
      : GetScalarType<T[P], AggregateZapRunOutbox[P]>
  }




  export type ZapRunOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunOutboxWhereInput
    orderBy?: ZapRunOutboxOrderByWithAggregationInput | ZapRunOutboxOrderByWithAggregationInput[]
    by: ZapRunOutboxScalarFieldEnum[] | ZapRunOutboxScalarFieldEnum
    having?: ZapRunOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunOutboxCountAggregateInputType | true
    _min?: ZapRunOutboxMinAggregateInputType
    _max?: ZapRunOutboxMaxAggregateInputType
  }

  export type ZapRunOutboxGroupByOutputType = {
    id: string
    zapRunId: string
    _count: ZapRunOutboxCountAggregateOutputType | null
    _min: ZapRunOutboxMinAggregateOutputType | null
    _max: ZapRunOutboxMaxAggregateOutputType | null
  }

  type GetZapRunOutboxGroupByPayload<T extends ZapRunOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunOutboxGroupByOutputType[P]>
        }
      >
    >


  export type ZapRunOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | ZapRunsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type ZapRunOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | ZapRunsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type ZapRunOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    zapRun?: boolean | ZapRunsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutbox"]>

  export type ZapRunOutboxSelectScalar = {
    id?: boolean
    zapRunId?: boolean
  }

  export type ZapRunOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapRunId", ExtArgs["result"]["zapRunOutbox"]>
  export type ZapRunOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | ZapRunsDefaultArgs<ExtArgs>
  }
  export type ZapRunOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | ZapRunsDefaultArgs<ExtArgs>
  }
  export type ZapRunOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | ZapRunsDefaultArgs<ExtArgs>
  }

  export type $ZapRunOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZapRunOutbox"
    objects: {
      zapRun: Prisma.$ZapRunsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapRunId: string
    }, ExtArgs["result"]["zapRunOutbox"]>
    composites: {}
  }

  type ZapRunOutboxGetPayload<S extends boolean | null | undefined | ZapRunOutboxDefaultArgs> = $Result.GetResult<Prisma.$ZapRunOutboxPayload, S>

  type ZapRunOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapRunOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunOutboxCountAggregateInputType | true
    }

  export interface ZapRunOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZapRunOutbox'], meta: { name: 'ZapRunOutbox' } }
    /**
     * Find zero or one ZapRunOutbox that matches the filter.
     * @param {ZapRunOutboxFindUniqueArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunOutboxFindUniqueArgs>(args: SelectSubset<T, ZapRunOutboxFindUniqueArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunOutboxFindUniqueOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindFirstArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunOutboxFindFirstArgs>(args?: SelectSubset<T, ZapRunOutboxFindFirstArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindFirstOrThrowArgs} args - Arguments to find a ZapRunOutbox
     * @example
     * // Get one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapRunOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany()
     * 
     * // Get first 10 ZapRunOutboxes
     * const zapRunOutboxes = await prisma.zapRunOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapRunOutboxFindManyArgs>(args?: SelectSubset<T, ZapRunOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRunOutbox.
     * @param {ZapRunOutboxCreateArgs} args - Arguments to create a ZapRunOutbox.
     * @example
     * // Create one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.create({
     *   data: {
     *     // ... data to create a ZapRunOutbox
     *   }
     * })
     * 
     */
    create<T extends ZapRunOutboxCreateArgs>(args: SelectSubset<T, ZapRunOutboxCreateArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRunOutboxes.
     * @param {ZapRunOutboxCreateManyArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapRunOutboxCreateManyArgs>(args?: SelectSubset<T, ZapRunOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRunOutboxes and returns the data saved in the database.
     * @param {ZapRunOutboxCreateManyAndReturnArgs} args - Arguments to create many ZapRunOutboxes.
     * @example
     * // Create many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapRunOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapRunOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRunOutbox.
     * @param {ZapRunOutboxDeleteArgs} args - Arguments to delete one ZapRunOutbox.
     * @example
     * // Delete one ZapRunOutbox
     * const ZapRunOutbox = await prisma.zapRunOutbox.delete({
     *   where: {
     *     // ... filter to delete one ZapRunOutbox
     *   }
     * })
     * 
     */
    delete<T extends ZapRunOutboxDeleteArgs>(args: SelectSubset<T, ZapRunOutboxDeleteArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRunOutbox.
     * @param {ZapRunOutboxUpdateArgs} args - Arguments to update one ZapRunOutbox.
     * @example
     * // Update one ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapRunOutboxUpdateArgs>(args: SelectSubset<T, ZapRunOutboxUpdateArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRunOutboxes.
     * @param {ZapRunOutboxDeleteManyArgs} args - Arguments to filter ZapRunOutboxes to delete.
     * @example
     * // Delete a few ZapRunOutboxes
     * const { count } = await prisma.zapRunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapRunOutboxDeleteManyArgs>(args?: SelectSubset<T, ZapRunOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapRunOutboxUpdateManyArgs>(args: SelectSubset<T, ZapRunOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunOutboxes and returns the data updated in the database.
     * @param {ZapRunOutboxUpdateManyAndReturnArgs} args - Arguments to update many ZapRunOutboxes.
     * @example
     * // Update many ZapRunOutboxes
     * const zapRunOutbox = await prisma.zapRunOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRunOutboxes and only return the `id`
     * const zapRunOutboxWithIdOnly = await prisma.zapRunOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapRunOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapRunOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRunOutbox.
     * @param {ZapRunOutboxUpsertArgs} args - Arguments to update or create a ZapRunOutbox.
     * @example
     * // Update or create a ZapRunOutbox
     * const zapRunOutbox = await prisma.zapRunOutbox.upsert({
     *   create: {
     *     // ... data to create a ZapRunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunOutboxUpsertArgs>(args: SelectSubset<T, ZapRunOutboxUpsertArgs<ExtArgs>>): Prisma__ZapRunOutboxClient<$Result.GetResult<Prisma.$ZapRunOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxCountArgs} args - Arguments to filter ZapRunOutboxes to count.
     * @example
     * // Count the number of ZapRunOutboxes
     * const count = await prisma.zapRunOutbox.count({
     *   where: {
     *     // ... the filter for the ZapRunOutboxes we want to count
     *   }
     * })
    **/
    count<T extends ZapRunOutboxCountArgs>(
      args?: Subset<T, ZapRunOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunOutboxAggregateArgs>(args: Subset<T, ZapRunOutboxAggregateArgs>): Prisma.PrismaPromise<GetZapRunOutboxAggregateType<T>>

    /**
     * Group by ZapRunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapRunOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunOutboxGroupByArgs['orderBy'] }
        : { orderBy?: ZapRunOutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapRunOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZapRunOutbox model
   */
  readonly fields: ZapRunOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRunOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zapRun<T extends ZapRunsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapRunsDefaultArgs<ExtArgs>>): Prisma__ZapRunsClient<$Result.GetResult<Prisma.$ZapRunsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZapRunOutbox model
   */
  interface ZapRunOutboxFieldRefs {
    readonly id: FieldRef<"ZapRunOutbox", 'String'>
    readonly zapRunId: FieldRef<"ZapRunOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ZapRunOutbox findUnique
   */
  export type ZapRunOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox findUniqueOrThrow
   */
  export type ZapRunOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox findFirst
   */
  export type ZapRunOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * ZapRunOutbox findFirstOrThrow
   */
  export type ZapRunOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutbox to fetch.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRunOutboxes.
     */
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * ZapRunOutbox findMany
   */
  export type ZapRunOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutboxes to fetch.
     */
    where?: ZapRunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutboxes to fetch.
     */
    orderBy?: ZapRunOutboxOrderByWithRelationInput | ZapRunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZapRunOutboxes.
     */
    cursor?: ZapRunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutboxes.
     */
    skip?: number
    distinct?: ZapRunOutboxScalarFieldEnum | ZapRunOutboxScalarFieldEnum[]
  }

  /**
   * ZapRunOutbox create
   */
  export type ZapRunOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a ZapRunOutbox.
     */
    data: XOR<ZapRunOutboxCreateInput, ZapRunOutboxUncheckedCreateInput>
  }

  /**
   * ZapRunOutbox createMany
   */
  export type ZapRunOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZapRunOutboxes.
     */
    data: ZapRunOutboxCreateManyInput | ZapRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZapRunOutbox createManyAndReturn
   */
  export type ZapRunOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many ZapRunOutboxes.
     */
    data: ZapRunOutboxCreateManyInput | ZapRunOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRunOutbox update
   */
  export type ZapRunOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a ZapRunOutbox.
     */
    data: XOR<ZapRunOutboxUpdateInput, ZapRunOutboxUncheckedUpdateInput>
    /**
     * Choose, which ZapRunOutbox to update.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox updateMany
   */
  export type ZapRunOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZapRunOutboxes.
     */
    data: XOR<ZapRunOutboxUpdateManyMutationInput, ZapRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which ZapRunOutboxes to update
     */
    where?: ZapRunOutboxWhereInput
    /**
     * Limit how many ZapRunOutboxes to update.
     */
    limit?: number
  }

  /**
   * ZapRunOutbox updateManyAndReturn
   */
  export type ZapRunOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * The data used to update ZapRunOutboxes.
     */
    data: XOR<ZapRunOutboxUpdateManyMutationInput, ZapRunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which ZapRunOutboxes to update
     */
    where?: ZapRunOutboxWhereInput
    /**
     * Limit how many ZapRunOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRunOutbox upsert
   */
  export type ZapRunOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the ZapRunOutbox to update in case it exists.
     */
    where: ZapRunOutboxWhereUniqueInput
    /**
     * In case the ZapRunOutbox found by the `where` argument doesn't exist, create a new ZapRunOutbox with this data.
     */
    create: XOR<ZapRunOutboxCreateInput, ZapRunOutboxUncheckedCreateInput>
    /**
     * In case the ZapRunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunOutboxUpdateInput, ZapRunOutboxUncheckedUpdateInput>
  }

  /**
   * ZapRunOutbox delete
   */
  export type ZapRunOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
    /**
     * Filter which ZapRunOutbox to delete.
     */
    where: ZapRunOutboxWhereUniqueInput
  }

  /**
   * ZapRunOutbox deleteMany
   */
  export type ZapRunOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRunOutboxes to delete
     */
    where?: ZapRunOutboxWhereInput
    /**
     * Limit how many ZapRunOutboxes to delete.
     */
    limit?: number
  }

  /**
   * ZapRunOutbox without action
   */
  export type ZapRunOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutbox
     */
    select?: ZapRunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutbox
     */
    omit?: ZapRunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutboxInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZapScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    triggerId: 'triggerId'
  };

  export type ZapScalarFieldEnum = (typeof ZapScalarFieldEnum)[keyof typeof ZapScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    triggerId: 'triggerId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const AvilabletriggersScalarFieldEnum: {
    id: 'id',
    triggerName: 'triggerName'
  };

  export type AvilabletriggersScalarFieldEnum = (typeof AvilabletriggersScalarFieldEnum)[keyof typeof AvilabletriggersScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    actionId: 'actionId',
    zapId: 'zapId',
    sortingOrder: 'sortingOrder'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const AvilableActionsScalarFieldEnum: {
    id: 'id',
    actionName: 'actionName'
  };

  export type AvilableActionsScalarFieldEnum = (typeof AvilableActionsScalarFieldEnum)[keyof typeof AvilableActionsScalarFieldEnum]


  export const ZapRunsScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    metadata: 'metadata'
  };

  export type ZapRunsScalarFieldEnum = (typeof ZapRunsScalarFieldEnum)[keyof typeof ZapRunsScalarFieldEnum]


  export const ZapRunOutboxScalarFieldEnum: {
    id: 'id',
    zapRunId: 'zapRunId'
  };

  export type ZapRunOutboxScalarFieldEnum = (typeof ZapRunOutboxScalarFieldEnum)[keyof typeof ZapRunOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    zap?: ZapListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    zap?: ZapOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    zap?: ZapListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ZapWhereInput = {
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    id?: StringFilter<"Zap"> | string
    userId?: IntFilter<"Zap"> | number
    triggerId?: StringFilter<"Zap"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    zapRuns?: ZapRunsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ZapOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    triggerId?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
    action?: ActionOrderByRelationAggregateInput
    zapRuns?: ZapRunsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ZapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    userId?: IntFilter<"Zap"> | number
    triggerId?: StringFilter<"Zap"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    zapRuns?: ZapRunsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ZapOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    triggerId?: SortOrder
    _count?: ZapCountOrderByAggregateInput
    _avg?: ZapAvgOrderByAggregateInput
    _max?: ZapMaxOrderByAggregateInput
    _min?: ZapMinOrderByAggregateInput
    _sum?: ZapSumOrderByAggregateInput
  }

  export type ZapScalarWhereWithAggregatesInput = {
    AND?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    OR?: ZapScalarWhereWithAggregatesInput[]
    NOT?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zap"> | string
    userId?: IntWithAggregatesFilter<"Zap"> | number
    triggerId?: StringWithAggregatesFilter<"Zap"> | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    type?: XOR<AvilabletriggersScalarRelationFilter, AvilabletriggersWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
    zap?: ZapOrderByWithRelationInput
    type?: AvilabletriggersOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    triggerId?: StringFilter<"Trigger"> | string
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    type?: XOR<AvilabletriggersScalarRelationFilter, AvilabletriggersWhereInput>
  }, "id" | "zapId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    zapId?: StringWithAggregatesFilter<"Trigger"> | string
    triggerId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type AvilabletriggersWhereInput = {
    AND?: AvilabletriggersWhereInput | AvilabletriggersWhereInput[]
    OR?: AvilabletriggersWhereInput[]
    NOT?: AvilabletriggersWhereInput | AvilabletriggersWhereInput[]
    id?: StringFilter<"Avilabletriggers"> | string
    triggerName?: StringFilter<"Avilabletriggers"> | string
    triggers?: TriggerListRelationFilter
  }

  export type AvilabletriggersOrderByWithRelationInput = {
    id?: SortOrder
    triggerName?: SortOrder
    triggers?: TriggerOrderByRelationAggregateInput
  }

  export type AvilabletriggersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvilabletriggersWhereInput | AvilabletriggersWhereInput[]
    OR?: AvilabletriggersWhereInput[]
    NOT?: AvilabletriggersWhereInput | AvilabletriggersWhereInput[]
    triggerName?: StringFilter<"Avilabletriggers"> | string
    triggers?: TriggerListRelationFilter
  }, "id">

  export type AvilabletriggersOrderByWithAggregationInput = {
    id?: SortOrder
    triggerName?: SortOrder
    _count?: AvilabletriggersCountOrderByAggregateInput
    _max?: AvilabletriggersMaxOrderByAggregateInput
    _min?: AvilabletriggersMinOrderByAggregateInput
  }

  export type AvilabletriggersScalarWhereWithAggregatesInput = {
    AND?: AvilabletriggersScalarWhereWithAggregatesInput | AvilabletriggersScalarWhereWithAggregatesInput[]
    OR?: AvilabletriggersScalarWhereWithAggregatesInput[]
    NOT?: AvilabletriggersScalarWhereWithAggregatesInput | AvilabletriggersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avilabletriggers"> | string
    triggerName?: StringWithAggregatesFilter<"Avilabletriggers"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    type?: XOR<AvilableActionsScalarRelationFilter, AvilableActionsWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
    type?: AvilableActionsOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    actionId?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    type?: XOR<AvilableActionsScalarRelationFilter, AvilableActionsWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    actionId?: StringWithAggregatesFilter<"Action"> | string
    zapId?: StringWithAggregatesFilter<"Action"> | string
    sortingOrder?: IntWithAggregatesFilter<"Action"> | number
  }

  export type AvilableActionsWhereInput = {
    AND?: AvilableActionsWhereInput | AvilableActionsWhereInput[]
    OR?: AvilableActionsWhereInput[]
    NOT?: AvilableActionsWhereInput | AvilableActionsWhereInput[]
    id?: StringFilter<"AvilableActions"> | string
    actionName?: StringFilter<"AvilableActions"> | string
    actions?: ActionListRelationFilter
  }

  export type AvilableActionsOrderByWithRelationInput = {
    id?: SortOrder
    actionName?: SortOrder
    actions?: ActionOrderByRelationAggregateInput
  }

  export type AvilableActionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvilableActionsWhereInput | AvilableActionsWhereInput[]
    OR?: AvilableActionsWhereInput[]
    NOT?: AvilableActionsWhereInput | AvilableActionsWhereInput[]
    actionName?: StringFilter<"AvilableActions"> | string
    actions?: ActionListRelationFilter
  }, "id">

  export type AvilableActionsOrderByWithAggregationInput = {
    id?: SortOrder
    actionName?: SortOrder
    _count?: AvilableActionsCountOrderByAggregateInput
    _max?: AvilableActionsMaxOrderByAggregateInput
    _min?: AvilableActionsMinOrderByAggregateInput
  }

  export type AvilableActionsScalarWhereWithAggregatesInput = {
    AND?: AvilableActionsScalarWhereWithAggregatesInput | AvilableActionsScalarWhereWithAggregatesInput[]
    OR?: AvilableActionsScalarWhereWithAggregatesInput[]
    NOT?: AvilableActionsScalarWhereWithAggregatesInput | AvilableActionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvilableActions"> | string
    actionName?: StringWithAggregatesFilter<"AvilableActions"> | string
  }

  export type ZapRunsWhereInput = {
    AND?: ZapRunsWhereInput | ZapRunsWhereInput[]
    OR?: ZapRunsWhereInput[]
    NOT?: ZapRunsWhereInput | ZapRunsWhereInput[]
    id?: StringFilter<"ZapRuns"> | string
    zapId?: StringFilter<"ZapRuns"> | string
    metadata?: JsonFilter<"ZapRuns">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zapRunOutbox?: XOR<ZapRunOutboxNullableScalarRelationFilter, ZapRunOutboxWhereInput> | null
  }

  export type ZapRunsOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
    zap?: ZapOrderByWithRelationInput
    zapRunOutbox?: ZapRunOutboxOrderByWithRelationInput
  }

  export type ZapRunsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapRunsWhereInput | ZapRunsWhereInput[]
    OR?: ZapRunsWhereInput[]
    NOT?: ZapRunsWhereInput | ZapRunsWhereInput[]
    zapId?: StringFilter<"ZapRuns"> | string
    metadata?: JsonFilter<"ZapRuns">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zapRunOutbox?: XOR<ZapRunOutboxNullableScalarRelationFilter, ZapRunOutboxWhereInput> | null
  }, "id">

  export type ZapRunsOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
    _count?: ZapRunsCountOrderByAggregateInput
    _max?: ZapRunsMaxOrderByAggregateInput
    _min?: ZapRunsMinOrderByAggregateInput
  }

  export type ZapRunsScalarWhereWithAggregatesInput = {
    AND?: ZapRunsScalarWhereWithAggregatesInput | ZapRunsScalarWhereWithAggregatesInput[]
    OR?: ZapRunsScalarWhereWithAggregatesInput[]
    NOT?: ZapRunsScalarWhereWithAggregatesInput | ZapRunsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZapRuns"> | string
    zapId?: StringWithAggregatesFilter<"ZapRuns"> | string
    metadata?: JsonWithAggregatesFilter<"ZapRuns">
  }

  export type ZapRunOutboxWhereInput = {
    AND?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    OR?: ZapRunOutboxWhereInput[]
    NOT?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    id?: StringFilter<"ZapRunOutbox"> | string
    zapRunId?: StringFilter<"ZapRunOutbox"> | string
    zapRun?: XOR<ZapRunsScalarRelationFilter, ZapRunsWhereInput>
  }

  export type ZapRunOutboxOrderByWithRelationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    zapRun?: ZapRunsOrderByWithRelationInput
  }

  export type ZapRunOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapRunId?: string
    AND?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    OR?: ZapRunOutboxWhereInput[]
    NOT?: ZapRunOutboxWhereInput | ZapRunOutboxWhereInput[]
    zapRun?: XOR<ZapRunsScalarRelationFilter, ZapRunsWhereInput>
  }, "id" | "zapRunId">

  export type ZapRunOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    _count?: ZapRunOutboxCountOrderByAggregateInput
    _max?: ZapRunOutboxMaxOrderByAggregateInput
    _min?: ZapRunOutboxMinOrderByAggregateInput
  }

  export type ZapRunOutboxScalarWhereWithAggregatesInput = {
    AND?: ZapRunOutboxScalarWhereWithAggregatesInput | ZapRunOutboxScalarWhereWithAggregatesInput[]
    OR?: ZapRunOutboxScalarWhereWithAggregatesInput[]
    NOT?: ZapRunOutboxScalarWhereWithAggregatesInput | ZapRunOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZapRunOutbox"> | string
    zapRunId?: StringWithAggregatesFilter<"ZapRunOutbox"> | string
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password: string
    zap?: ZapCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    zap?: ZapUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    zap?: ZapUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ZapCreateInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunsCreateNestedManyWithoutZapInput
    user: UserCreateNestedOneWithoutZapInput
  }

  export type ZapUncheckedCreateInput = {
    id?: string
    userId: number
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunsUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunsUpdateManyWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunsUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapCreateManyInput = {
    id?: string
    userId: number
    triggerId: string
  }

  export type ZapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateInput = {
    id?: string
    zap: ZapCreateNestedOneWithoutTriggerInput
    type: AvilabletriggersCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    zapId: string
    triggerId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
    type?: AvilabletriggersUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    zapId: string
    triggerId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type AvilabletriggersCreateInput = {
    id?: string
    triggerName: string
    triggers?: TriggerCreateNestedManyWithoutTypeInput
  }

  export type AvilabletriggersUncheckedCreateInput = {
    id?: string
    triggerName: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvilabletriggersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerName?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUpdateManyWithoutTypeNestedInput
  }

  export type AvilabletriggersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerName?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvilabletriggersCreateManyInput = {
    id?: string
    triggerName: string
  }

  export type AvilabletriggersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerName?: StringFieldUpdateOperationsInput | string
  }

  export type AvilabletriggersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerName?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    sortingOrder?: number
    type: AvilableActionsCreateNestedOneWithoutActionsInput
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    actionId: string
    zapId: string
    sortingOrder?: number
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    type?: AvilableActionsUpdateOneRequiredWithoutActionsNestedInput
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionCreateManyInput = {
    id?: string
    actionId: string
    zapId: string
    sortingOrder?: number
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AvilableActionsCreateInput = {
    id?: string
    actionName: string
    actions?: ActionCreateNestedManyWithoutTypeInput
  }

  export type AvilableActionsUncheckedCreateInput = {
    id?: string
    actionName: string
    actions?: ActionUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvilableActionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionName?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutTypeNestedInput
  }

  export type AvilableActionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionName?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvilableActionsCreateManyInput = {
    id?: string
    actionName: string
  }

  export type AvilableActionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionName?: StringFieldUpdateOperationsInput | string
  }

  export type AvilableActionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionName?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunsCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
    zapRunOutbox?: ZapRunOutboxCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunsUncheckedCreateInput = {
    id?: string
    zapId: string
    metadata: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
    zapRunOutbox?: ZapRunOutboxUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunsCreateManyInput = {
    id?: string
    zapId: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunOutboxCreateInput = {
    id?: string
    zapRun: ZapRunsCreateNestedOneWithoutZapRunOutboxInput
  }

  export type ZapRunOutboxUncheckedCreateInput = {
    id?: string
    zapRunId: string
  }

  export type ZapRunOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRun?: ZapRunsUpdateOneRequiredWithoutZapRunOutboxNestedInput
  }

  export type ZapRunOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutboxCreateManyInput = {
    id?: string
    zapRunId: string
  }

  export type ZapRunOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ZapListRelationFilter = {
    every?: ZapWhereInput
    some?: ZapWhereInput
    none?: ZapWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ZapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type ZapRunsListRelationFilter = {
    every?: ZapRunsWhereInput
    some?: ZapRunsWhereInput
    none?: ZapRunsWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapRunsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    triggerId?: SortOrder
  }

  export type ZapAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ZapMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    triggerId?: SortOrder
  }

  export type ZapMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    triggerId?: SortOrder
  }

  export type ZapSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ZapScalarRelationFilter = {
    is?: ZapWhereInput
    isNot?: ZapWhereInput
  }

  export type AvilabletriggersScalarRelationFilter = {
    is?: AvilabletriggersWhereInput
    isNot?: AvilabletriggersWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvilabletriggersCountOrderByAggregateInput = {
    id?: SortOrder
    triggerName?: SortOrder
  }

  export type AvilabletriggersMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerName?: SortOrder
  }

  export type AvilabletriggersMinOrderByAggregateInput = {
    id?: SortOrder
    triggerName?: SortOrder
  }

  export type AvilableActionsScalarRelationFilter = {
    is?: AvilableActionsWhereInput
    isNot?: AvilableActionsWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type AvilableActionsCountOrderByAggregateInput = {
    id?: SortOrder
    actionName?: SortOrder
  }

  export type AvilableActionsMaxOrderByAggregateInput = {
    id?: SortOrder
    actionName?: SortOrder
  }

  export type AvilableActionsMinOrderByAggregateInput = {
    id?: SortOrder
    actionName?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ZapRunOutboxNullableScalarRelationFilter = {
    is?: ZapRunOutboxWhereInput | null
    isNot?: ZapRunOutboxWhereInput | null
  }

  export type ZapRunsCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
  }

  export type ZapRunsMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }

  export type ZapRunsMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ZapRunsScalarRelationFilter = {
    is?: ZapRunsWhereInput
    isNot?: ZapRunsWhereInput
  }

  export type ZapRunOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type ZapRunOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type ZapRunOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type ZapCreateNestedManyWithoutUserInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type ZapUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ZapUpdateManyWithoutUserNestedInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutUserInput | ZapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutUserInput | ZapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutUserInput | ZapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ZapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutUserInput | ZapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutUserInput | ZapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutUserInput | ZapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type TriggerCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ZapRunsCreateNestedManyWithoutZapInput = {
    create?: XOR<ZapRunsCreateWithoutZapInput, ZapRunsUncheckedCreateWithoutZapInput> | ZapRunsCreateWithoutZapInput[] | ZapRunsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunsCreateOrConnectWithoutZapInput | ZapRunsCreateOrConnectWithoutZapInput[]
    createMany?: ZapRunsCreateManyZapInputEnvelope
    connect?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutZapInput = {
    create?: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>
    connectOrCreate?: UserCreateOrConnectWithoutZapInput
    connect?: UserWhereUniqueInput
  }

  export type TriggerUncheckedCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ZapRunsUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ZapRunsCreateWithoutZapInput, ZapRunsUncheckedCreateWithoutZapInput> | ZapRunsCreateWithoutZapInput[] | ZapRunsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunsCreateOrConnectWithoutZapInput | ZapRunsCreateOrConnectWithoutZapInput[]
    createMany?: ZapRunsCreateManyZapInputEnvelope
    connect?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
  }

  export type TriggerUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ZapRunsUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZapRunsCreateWithoutZapInput, ZapRunsUncheckedCreateWithoutZapInput> | ZapRunsCreateWithoutZapInput[] | ZapRunsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunsCreateOrConnectWithoutZapInput | ZapRunsCreateOrConnectWithoutZapInput[]
    upsert?: ZapRunsUpsertWithWhereUniqueWithoutZapInput | ZapRunsUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZapRunsCreateManyZapInputEnvelope
    set?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    disconnect?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    delete?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    connect?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    update?: ZapRunsUpdateWithWhereUniqueWithoutZapInput | ZapRunsUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZapRunsUpdateManyWithWhereWithoutZapInput | ZapRunsUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZapRunsScalarWhereInput | ZapRunsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutZapNestedInput = {
    create?: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>
    connectOrCreate?: UserCreateOrConnectWithoutZapInput
    upsert?: UserUpsertWithoutZapInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutZapInput, UserUpdateWithoutZapInput>, UserUncheckedUpdateWithoutZapInput>
  }

  export type TriggerUncheckedUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ZapRunsUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZapRunsCreateWithoutZapInput, ZapRunsUncheckedCreateWithoutZapInput> | ZapRunsCreateWithoutZapInput[] | ZapRunsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunsCreateOrConnectWithoutZapInput | ZapRunsCreateOrConnectWithoutZapInput[]
    upsert?: ZapRunsUpsertWithWhereUniqueWithoutZapInput | ZapRunsUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZapRunsCreateManyZapInputEnvelope
    set?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    disconnect?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    delete?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    connect?: ZapRunsWhereUniqueInput | ZapRunsWhereUniqueInput[]
    update?: ZapRunsUpdateWithWhereUniqueWithoutZapInput | ZapRunsUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZapRunsUpdateManyWithWhereWithoutZapInput | ZapRunsUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZapRunsScalarWhereInput | ZapRunsScalarWhereInput[]
  }

  export type ZapCreateNestedOneWithoutTriggerInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    connect?: ZapWhereUniqueInput
  }

  export type AvilabletriggersCreateNestedOneWithoutTriggersInput = {
    create?: XOR<AvilabletriggersCreateWithoutTriggersInput, AvilabletriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvilabletriggersCreateOrConnectWithoutTriggersInput
    connect?: AvilabletriggersWhereUniqueInput
  }

  export type ZapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    upsert?: ZapUpsertWithoutTriggerInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutTriggerInput, ZapUpdateWithoutTriggerInput>, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type AvilabletriggersUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<AvilabletriggersCreateWithoutTriggersInput, AvilabletriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvilabletriggersCreateOrConnectWithoutTriggersInput
    upsert?: AvilabletriggersUpsertWithoutTriggersInput
    connect?: AvilabletriggersWhereUniqueInput
    update?: XOR<XOR<AvilabletriggersUpdateToOneWithWhereWithoutTriggersInput, AvilabletriggersUpdateWithoutTriggersInput>, AvilabletriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type TriggerCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type AvilableActionsCreateNestedOneWithoutActionsInput = {
    create?: XOR<AvilableActionsCreateWithoutActionsInput, AvilableActionsUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvilableActionsCreateOrConnectWithoutActionsInput
    connect?: AvilableActionsWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutActionInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    connect?: ZapWhereUniqueInput
  }

  export type AvilableActionsUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<AvilableActionsCreateWithoutActionsInput, AvilableActionsUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvilableActionsCreateOrConnectWithoutActionsInput
    upsert?: AvilableActionsUpsertWithoutActionsInput
    connect?: AvilableActionsWhereUniqueInput
    update?: XOR<XOR<AvilableActionsUpdateToOneWithWhereWithoutActionsInput, AvilableActionsUpdateWithoutActionsInput>, AvilableActionsUncheckedUpdateWithoutActionsInput>
  }

  export type ZapUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    upsert?: ZapUpsertWithoutActionInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutActionInput, ZapUpdateWithoutActionInput>, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ActionCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ZapCreateNestedOneWithoutZapRunsInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
  }

  export type ZapRunOutboxCreateNestedOneWithoutZapRunInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    connect?: ZapRunOutboxWhereUniqueInput
  }

  export type ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    connect?: ZapRunOutboxWhereUniqueInput
  }

  export type ZapUpdateOneRequiredWithoutZapRunsNestedInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    upsert?: ZapUpsertWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutZapRunsInput, ZapUpdateWithoutZapRunsInput>, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type ZapRunOutboxUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    upsert?: ZapRunOutboxUpsertWithoutZapRunInput
    disconnect?: ZapRunOutboxWhereInput | boolean
    delete?: ZapRunOutboxWhereInput | boolean
    connect?: ZapRunOutboxWhereUniqueInput
    update?: XOR<XOR<ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, ZapRunOutboxUpdateWithoutZapRunInput>, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutboxCreateOrConnectWithoutZapRunInput
    upsert?: ZapRunOutboxUpsertWithoutZapRunInput
    disconnect?: ZapRunOutboxWhereInput | boolean
    delete?: ZapRunOutboxWhereInput | boolean
    connect?: ZapRunOutboxWhereUniqueInput
    update?: XOR<XOR<ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput, ZapRunOutboxUpdateWithoutZapRunInput>, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunsCreateNestedOneWithoutZapRunOutboxInput = {
    create?: XOR<ZapRunsCreateWithoutZapRunOutboxInput, ZapRunsUncheckedCreateWithoutZapRunOutboxInput>
    connectOrCreate?: ZapRunsCreateOrConnectWithoutZapRunOutboxInput
    connect?: ZapRunsWhereUniqueInput
  }

  export type ZapRunsUpdateOneRequiredWithoutZapRunOutboxNestedInput = {
    create?: XOR<ZapRunsCreateWithoutZapRunOutboxInput, ZapRunsUncheckedCreateWithoutZapRunOutboxInput>
    connectOrCreate?: ZapRunsCreateOrConnectWithoutZapRunOutboxInput
    upsert?: ZapRunsUpsertWithoutZapRunOutboxInput
    connect?: ZapRunsWhereUniqueInput
    update?: XOR<XOR<ZapRunsUpdateToOneWithWhereWithoutZapRunOutboxInput, ZapRunsUpdateWithoutZapRunOutboxInput>, ZapRunsUncheckedUpdateWithoutZapRunOutboxInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ZapCreateWithoutUserInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunsCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutUserInput = {
    id?: string
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunsUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutUserInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
  }

  export type ZapCreateManyUserInputEnvelope = {
    data: ZapCreateManyUserInput | ZapCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ZapUpsertWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput
    update: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
  }

  export type ZapUpdateWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput
    data: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>
  }

  export type ZapUpdateManyWithWhereWithoutUserInput = {
    where: ZapScalarWhereInput
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyWithoutUserInput>
  }

  export type ZapScalarWhereInput = {
    AND?: ZapScalarWhereInput | ZapScalarWhereInput[]
    OR?: ZapScalarWhereInput[]
    NOT?: ZapScalarWhereInput | ZapScalarWhereInput[]
    id?: StringFilter<"Zap"> | string
    userId?: IntFilter<"Zap"> | number
    triggerId?: StringFilter<"Zap"> | string
  }

  export type TriggerCreateWithoutZapInput = {
    id?: string
    type: AvilabletriggersCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutZapInput = {
    id?: string
    triggerId: string
  }

  export type TriggerCreateOrConnectWithoutZapInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateWithoutZapInput = {
    id?: string
    sortingOrder?: number
    type: AvilableActionsCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutZapInput = {
    id?: string
    actionId: string
    sortingOrder?: number
  }

  export type ActionCreateOrConnectWithoutZapInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateManyZapInputEnvelope = {
    data: ActionCreateManyZapInput | ActionCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type ZapRunsCreateWithoutZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunsUncheckedCreateWithoutZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunsCreateOrConnectWithoutZapInput = {
    where: ZapRunsWhereUniqueInput
    create: XOR<ZapRunsCreateWithoutZapInput, ZapRunsUncheckedCreateWithoutZapInput>
  }

  export type ZapRunsCreateManyZapInputEnvelope = {
    data: ZapRunsCreateManyZapInput | ZapRunsCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutZapInput = {
    name?: string | null
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutZapInput = {
    id?: number
    name?: string | null
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutZapInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>
  }

  export type TriggerUpsertWithoutZapInput = {
    update: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutZapInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type TriggerUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvilabletriggersUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUpsertWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithWhereWithoutZapInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutZapInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    zapId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
  }

  export type ZapRunsUpsertWithWhereUniqueWithoutZapInput = {
    where: ZapRunsWhereUniqueInput
    update: XOR<ZapRunsUpdateWithoutZapInput, ZapRunsUncheckedUpdateWithoutZapInput>
    create: XOR<ZapRunsCreateWithoutZapInput, ZapRunsUncheckedCreateWithoutZapInput>
  }

  export type ZapRunsUpdateWithWhereUniqueWithoutZapInput = {
    where: ZapRunsWhereUniqueInput
    data: XOR<ZapRunsUpdateWithoutZapInput, ZapRunsUncheckedUpdateWithoutZapInput>
  }

  export type ZapRunsUpdateManyWithWhereWithoutZapInput = {
    where: ZapRunsScalarWhereInput
    data: XOR<ZapRunsUpdateManyMutationInput, ZapRunsUncheckedUpdateManyWithoutZapInput>
  }

  export type ZapRunsScalarWhereInput = {
    AND?: ZapRunsScalarWhereInput | ZapRunsScalarWhereInput[]
    OR?: ZapRunsScalarWhereInput[]
    NOT?: ZapRunsScalarWhereInput | ZapRunsScalarWhereInput[]
    id?: StringFilter<"ZapRuns"> | string
    zapId?: StringFilter<"ZapRuns"> | string
    metadata?: JsonFilter<"ZapRuns">
  }

  export type UserUpsertWithoutZapInput = {
    update: XOR<UserUpdateWithoutZapInput, UserUncheckedUpdateWithoutZapInput>
    create: XOR<UserCreateWithoutZapInput, UserUncheckedCreateWithoutZapInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutZapInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutZapInput, UserUncheckedUpdateWithoutZapInput>
  }

  export type UserUpdateWithoutZapInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutZapInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ZapCreateWithoutTriggerInput = {
    id?: string
    triggerId: string
    action?: ActionCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunsCreateNestedManyWithoutZapInput
    user: UserCreateNestedOneWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutTriggerInput = {
    id?: string
    userId: number
    triggerId: string
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunsUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutTriggerInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
  }

  export type AvilabletriggersCreateWithoutTriggersInput = {
    id?: string
    triggerName: string
  }

  export type AvilabletriggersUncheckedCreateWithoutTriggersInput = {
    id?: string
    triggerName: string
  }

  export type AvilabletriggersCreateOrConnectWithoutTriggersInput = {
    where: AvilabletriggersWhereUniqueInput
    create: XOR<AvilabletriggersCreateWithoutTriggersInput, AvilabletriggersUncheckedCreateWithoutTriggersInput>
  }

  export type ZapUpsertWithoutTriggerInput = {
    update: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunsUpdateManyWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    triggerId?: StringFieldUpdateOperationsInput | string
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunsUncheckedUpdateManyWithoutZapNestedInput
  }

  export type AvilabletriggersUpsertWithoutTriggersInput = {
    update: XOR<AvilabletriggersUpdateWithoutTriggersInput, AvilabletriggersUncheckedUpdateWithoutTriggersInput>
    create: XOR<AvilabletriggersCreateWithoutTriggersInput, AvilabletriggersUncheckedCreateWithoutTriggersInput>
    where?: AvilabletriggersWhereInput
  }

  export type AvilabletriggersUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AvilabletriggersWhereInput
    data: XOR<AvilabletriggersUpdateWithoutTriggersInput, AvilabletriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type AvilabletriggersUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerName?: StringFieldUpdateOperationsInput | string
  }

  export type AvilabletriggersUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerName?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateWithoutTypeInput = {
    id?: string
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string
    zapId: string
  }

  export type TriggerCreateOrConnectWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerCreateManyTypeInputEnvelope = {
    data: TriggerCreateManyTypeInput | TriggerCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
  }

  export type TriggerUpdateManyWithWhereWithoutTypeInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
  }

  export type AvilableActionsCreateWithoutActionsInput = {
    id?: string
    actionName: string
  }

  export type AvilableActionsUncheckedCreateWithoutActionsInput = {
    id?: string
    actionName: string
  }

  export type AvilableActionsCreateOrConnectWithoutActionsInput = {
    where: AvilableActionsWhereUniqueInput
    create: XOR<AvilableActionsCreateWithoutActionsInput, AvilableActionsUncheckedCreateWithoutActionsInput>
  }

  export type ZapCreateWithoutActionInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunsCreateNestedManyWithoutZapInput
    user: UserCreateNestedOneWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutActionInput = {
    id?: string
    userId: number
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunsUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutActionInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
  }

  export type AvilableActionsUpsertWithoutActionsInput = {
    update: XOR<AvilableActionsUpdateWithoutActionsInput, AvilableActionsUncheckedUpdateWithoutActionsInput>
    create: XOR<AvilableActionsCreateWithoutActionsInput, AvilableActionsUncheckedCreateWithoutActionsInput>
    where?: AvilableActionsWhereInput
  }

  export type AvilableActionsUpdateToOneWithWhereWithoutActionsInput = {
    where?: AvilableActionsWhereInput
    data: XOR<AvilableActionsUpdateWithoutActionsInput, AvilableActionsUncheckedUpdateWithoutActionsInput>
  }

  export type AvilableActionsUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionName?: StringFieldUpdateOperationsInput | string
  }

  export type AvilableActionsUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionName?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutActionInput = {
    update: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutActionInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ZapUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunsUpdateManyWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunsUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ActionCreateWithoutTypeInput = {
    id?: string
    sortingOrder?: number
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutTypeInput = {
    id?: string
    zapId: string
    sortingOrder?: number
  }

  export type ActionCreateOrConnectWithoutTypeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionCreateManyTypeInputEnvelope = {
    data: ActionCreateManyTypeInput | ActionCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
  }

  export type ActionUpdateManyWithWhereWithoutTypeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutTypeInput>
  }

  export type ZapCreateWithoutZapRunsInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionCreateNestedManyWithoutZapInput
    user: UserCreateNestedOneWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutZapRunsInput = {
    id?: string
    userId: number
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutZapRunsInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
  }

  export type ZapRunOutboxCreateWithoutZapRunInput = {
    id?: string
  }

  export type ZapRunOutboxUncheckedCreateWithoutZapRunInput = {
    id?: string
  }

  export type ZapRunOutboxCreateOrConnectWithoutZapRunInput = {
    where: ZapRunOutboxWhereUniqueInput
    create: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
  }

  export type ZapUpsertWithoutZapRunsInput = {
    update: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutZapRunsInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type ZapUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionUpdateManyWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapRunOutboxUpsertWithoutZapRunInput = {
    update: XOR<ZapRunOutboxUpdateWithoutZapRunInput, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
    create: XOR<ZapRunOutboxCreateWithoutZapRunInput, ZapRunOutboxUncheckedCreateWithoutZapRunInput>
    where?: ZapRunOutboxWhereInput
  }

  export type ZapRunOutboxUpdateToOneWithWhereWithoutZapRunInput = {
    where?: ZapRunOutboxWhereInput
    data: XOR<ZapRunOutboxUpdateWithoutZapRunInput, ZapRunOutboxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunOutboxUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutboxUncheckedUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunsCreateWithoutZapRunOutboxInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
  }

  export type ZapRunsUncheckedCreateWithoutZapRunOutboxInput = {
    id?: string
    zapId: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunsCreateOrConnectWithoutZapRunOutboxInput = {
    where: ZapRunsWhereUniqueInput
    create: XOR<ZapRunsCreateWithoutZapRunOutboxInput, ZapRunsUncheckedCreateWithoutZapRunOutboxInput>
  }

  export type ZapRunsUpsertWithoutZapRunOutboxInput = {
    update: XOR<ZapRunsUpdateWithoutZapRunOutboxInput, ZapRunsUncheckedUpdateWithoutZapRunOutboxInput>
    create: XOR<ZapRunsCreateWithoutZapRunOutboxInput, ZapRunsUncheckedCreateWithoutZapRunOutboxInput>
    where?: ZapRunsWhereInput
  }

  export type ZapRunsUpdateToOneWithWhereWithoutZapRunOutboxInput = {
    where?: ZapRunsWhereInput
    data: XOR<ZapRunsUpdateWithoutZapRunOutboxInput, ZapRunsUncheckedUpdateWithoutZapRunOutboxInput>
  }

  export type ZapRunsUpdateWithoutZapRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
  }

  export type ZapRunsUncheckedUpdateWithoutZapRunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZapCreateManyUserInput = {
    id?: string
    triggerId: string
  }

  export type ZapUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunsUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunsUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyZapInput = {
    id?: string
    actionId: string
    sortingOrder?: number
  }

  export type ZapRunsCreateManyZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    type?: AvilableActionsUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZapRunsUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunsUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapRunOutbox?: ZapRunOutboxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunsUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyTypeInput = {
    id?: string
    zapId: string
  }

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyTypeInput = {
    id?: string
    zapId: string
    sortingOrder?: number
  }

  export type ActionUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}