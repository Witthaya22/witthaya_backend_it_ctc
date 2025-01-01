
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
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model ActivityResults
 * 
 */
export type ActivityResults = $Result.DefaultSelection<Prisma.$ActivityResultsPayload>
/**
 * Model ActivityDetails
 * 
 */
export type ActivityDetails = $Result.DefaultSelection<Prisma.$ActivityDetailsPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs>;

  /**
   * `prisma.activityResults`: Exposes CRUD operations for the **ActivityResults** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityResults
    * const activityResults = await prisma.activityResults.findMany()
    * ```
    */
  get activityResults(): Prisma.ActivityResultsDelegate<ExtArgs>;

  /**
   * `prisma.activityDetails`: Exposes CRUD operations for the **ActivityDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityDetails
    * const activityDetails = await prisma.activityDetails.findMany()
    * ```
    */
  get activityDetails(): Prisma.ActivityDetailsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Department: 'Department',
    Admin: 'Admin',
    Activity: 'Activity',
    ActivityResults: 'ActivityResults',
    ActivityDetails: 'ActivityDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'department' | 'admin' | 'activity' | 'activityResults' | 'activityDetails'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      ActivityResults: {
        payload: Prisma.$ActivityResultsPayload<ExtArgs>
        fields: Prisma.ActivityResultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityResultsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityResultsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>
          }
          findFirst: {
            args: Prisma.ActivityResultsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityResultsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>
          }
          findMany: {
            args: Prisma.ActivityResultsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>[]
          }
          create: {
            args: Prisma.ActivityResultsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>
          }
          createMany: {
            args: Prisma.ActivityResultsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityResultsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>[]
          }
          delete: {
            args: Prisma.ActivityResultsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>
          }
          update: {
            args: Prisma.ActivityResultsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>
          }
          deleteMany: {
            args: Prisma.ActivityResultsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityResultsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActivityResultsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityResultsPayload>
          }
          aggregate: {
            args: Prisma.ActivityResultsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivityResults>
          }
          groupBy: {
            args: Prisma.ActivityResultsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivityResultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityResultsCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivityResultsCountAggregateOutputType> | number
          }
        }
      }
      ActivityDetails: {
        payload: Prisma.$ActivityDetailsPayload<ExtArgs>
        fields: Prisma.ActivityDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>
          }
          findFirst: {
            args: Prisma.ActivityDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>
          }
          findMany: {
            args: Prisma.ActivityDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>[]
          }
          create: {
            args: Prisma.ActivityDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>
          }
          createMany: {
            args: Prisma.ActivityDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityDetailsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>[]
          }
          delete: {
            args: Prisma.ActivityDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>
          }
          update: {
            args: Prisma.ActivityDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActivityDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityDetailsPayload>
          }
          aggregate: {
            args: Prisma.ActivityDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivityDetails>
          }
          groupBy: {
            args: Prisma.ActivityDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivityDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivityDetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    ActivityResults: number
    ActivityDetails: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActivityResults?: boolean | UserCountOutputTypeCountActivityResultsArgs
    ActivityDetails?: boolean | UserCountOutputTypeCountActivityDetailsArgs
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
  export type UserCountOutputTypeCountActivityResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityResultsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDetailsWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    Users: number
    ActivityResults: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | DepartmentCountOutputTypeCountUsersArgs
    ActivityResults?: boolean | DepartmentCountOutputTypeCountActivityResultsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountActivityResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityResultsWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    ActivityResults: number
    ActivityDetails: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActivityResults?: boolean | ActivityCountOutputTypeCountActivityResultsArgs
    ActivityDetails?: boolean | ActivityCountOutputTypeCountActivityDetailsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountActivityResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityResultsWhereInput
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountActivityDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    UserID: string | null
    UserFirstName: string | null
    UserLastName: string | null
    UserPassword: string | null
    UserImage: string | null
    DepartmentID: string | null
    Role: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    UserID: string | null
    UserFirstName: string | null
    UserLastName: string | null
    UserPassword: string | null
    UserImage: string | null
    DepartmentID: string | null
    Role: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    UserID: number
    UserFirstName: number
    UserLastName: number
    UserPassword: number
    UserImage: number
    DepartmentID: number
    Role: number
    IsArchived: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    UserID?: true
    UserFirstName?: true
    UserLastName?: true
    UserPassword?: true
    UserImage?: true
    DepartmentID?: true
    Role?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    UserID?: true
    UserFirstName?: true
    UserLastName?: true
    UserPassword?: true
    UserImage?: true
    DepartmentID?: true
    Role?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UserCountAggregateInputType = {
    UserID?: true
    UserFirstName?: true
    UserLastName?: true
    UserPassword?: true
    UserImage?: true
    DepartmentID?: true
    Role?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UserID: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage: string | null
    DepartmentID: string
    Role: string
    IsArchived: boolean
    CreatedAt: Date
    UpdatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    UserID?: boolean
    UserFirstName?: boolean
    UserLastName?: boolean
    UserPassword?: boolean
    UserImage?: boolean
    DepartmentID?: boolean
    Role?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    ActivityResults?: boolean | User$ActivityResultsArgs<ExtArgs>
    ActivityDetails?: boolean | User$ActivityDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    UserFirstName?: boolean
    UserLastName?: boolean
    UserPassword?: boolean
    UserImage?: boolean
    DepartmentID?: boolean
    Role?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    UserID?: boolean
    UserFirstName?: boolean
    UserLastName?: boolean
    UserPassword?: boolean
    UserImage?: boolean
    DepartmentID?: boolean
    Role?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    ActivityResults?: boolean | User$ActivityResultsArgs<ExtArgs>
    ActivityDetails?: boolean | User$ActivityDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Department: Prisma.$DepartmentPayload<ExtArgs>
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      ActivityResults: Prisma.$ActivityResultsPayload<ExtArgs>[]
      ActivityDetails: Prisma.$ActivityDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: string
      UserFirstName: string
      UserLastName: string
      UserPassword: string
      UserImage: string | null
      DepartmentID: string
      Role: string
      IsArchived: boolean
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
     * // Only select the `UserID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { UserID: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Users and only return the `UserID`
     * const userWithUserIDOnly = await prisma.user.createManyAndReturn({ 
     *   select: { UserID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ActivityResults<T extends User$ActivityResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$ActivityResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findMany'> | Null>;

    ActivityDetails<T extends User$ActivityDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$ActivityDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly UserID: FieldRef<"User", 'String'>
    readonly UserFirstName: FieldRef<"User", 'String'>
    readonly UserLastName: FieldRef<"User", 'String'>
    readonly UserPassword: FieldRef<"User", 'String'>
    readonly UserImage: FieldRef<"User", 'String'>
    readonly DepartmentID: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'String'>
    readonly IsArchived: FieldRef<"User", 'Boolean'>
    readonly CreatedAt: FieldRef<"User", 'DateTime'>
    readonly UpdatedAt: FieldRef<"User", 'DateTime'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.ActivityResults
   */
  export type User$ActivityResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    where?: ActivityResultsWhereInput
    orderBy?: ActivityResultsOrderByWithRelationInput | ActivityResultsOrderByWithRelationInput[]
    cursor?: ActivityResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityResultsScalarFieldEnum | ActivityResultsScalarFieldEnum[]
  }

  /**
   * User.ActivityDetails
   */
  export type User$ActivityDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    where?: ActivityDetailsWhereInput
    orderBy?: ActivityDetailsOrderByWithRelationInput | ActivityDetailsOrderByWithRelationInput[]
    cursor?: ActivityDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDetailsScalarFieldEnum | ActivityDetailsScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    DepartmentID: string | null
    Name: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    DepartmentID: string | null
    Name: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    DepartmentID: number
    Name: number
    IsArchived: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    DepartmentID?: true
    Name?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    DepartmentID?: true
    Name?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    DepartmentID?: true
    Name?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    DepartmentID: string
    Name: string
    IsArchived: boolean
    CreatedAt: Date
    UpdatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    Name?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Users?: boolean | Department$UsersArgs<ExtArgs>
    ActivityResults?: boolean | Department$ActivityResultsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    Name?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    DepartmentID?: boolean
    Name?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Department$UsersArgs<ExtArgs>
    ActivityResults?: boolean | Department$ActivityResultsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      Users: Prisma.$UserPayload<ExtArgs>[]
      ActivityResults: Prisma.$ActivityResultsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DepartmentID: string
      Name: string
      IsArchived: boolean
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepartmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepartmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `DepartmentID`
     * const departmentWithDepartmentIDOnly = await prisma.department.findMany({ select: { DepartmentID: true } })
     * 
    **/
    findMany<T extends DepartmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
    **/
    create<T extends DepartmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DepartmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `DepartmentID`
     * const departmentWithDepartmentIDOnly = await prisma.department.createManyAndReturn({ 
     *   select: { DepartmentID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
    **/
    delete<T extends DepartmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepartmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepartmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepartmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
    **/
    upsert<T extends DepartmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>
    ): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Users<T extends Department$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Department$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    ActivityResults<T extends Department$ActivityResultsArgs<ExtArgs> = {}>(args?: Subset<T, Department$ActivityResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly DepartmentID: FieldRef<"Department", 'String'>
    readonly Name: FieldRef<"Department", 'String'>
    readonly IsArchived: FieldRef<"Department", 'Boolean'>
    readonly CreatedAt: FieldRef<"Department", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department.Users
   */
  export type Department$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department.ActivityResults
   */
  export type Department$ActivityResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    where?: ActivityResultsWhereInput
    orderBy?: ActivityResultsOrderByWithRelationInput | ActivityResultsOrderByWithRelationInput[]
    cursor?: ActivityResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityResultsScalarFieldEnum | ActivityResultsScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    AdminID: string | null
    AdminPass: string | null
    UserID: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    AdminID: string | null
    AdminPass: string | null
    UserID: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    AdminID: number
    AdminPass: number
    UserID: number
    IsArchived: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    AdminID?: true
    AdminPass?: true
    UserID?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    AdminID?: true
    AdminPass?: true
    UserID?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    AdminID?: true
    AdminPass?: true
    UserID?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    AdminID: string
    AdminPass: string
    UserID: string
    IsArchived: boolean
    CreatedAt: Date
    UpdatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AdminID?: boolean
    AdminPass?: boolean
    UserID?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AdminID?: boolean
    AdminPass?: boolean
    UserID?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    AdminID?: boolean
    AdminPass?: boolean
    UserID?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      AdminID: string
      AdminPass: string
      UserID: string
      IsArchived: boolean
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `AdminID`
     * const adminWithAdminIDOnly = await prisma.admin.findMany({ select: { AdminID: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `AdminID`
     * const adminWithAdminIDOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { AdminID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly AdminID: FieldRef<"Admin", 'String'>
    readonly AdminPass: FieldRef<"Admin", 'String'>
    readonly UserID: FieldRef<"Admin", 'String'>
    readonly IsArchived: FieldRef<"Admin", 'Boolean'>
    readonly CreatedAt: FieldRef<"Admin", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    ID: number | null
    Score: number | null
    MaxParticipants: number | null
  }

  export type ActivitySumAggregateOutputType = {
    ID: number | null
    Score: number | null
    MaxParticipants: number | null
  }

  export type ActivityMinAggregateOutputType = {
    ID: number | null
    Title: string | null
    Description: string | null
    StartDate: Date | null
    EndDate: Date | null
    Type: string | null
    Score: number | null
    Location: string | null
    MaxParticipants: number | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    ID: number | null
    Title: string | null
    Description: string | null
    StartDate: Date | null
    EndDate: Date | null
    Type: string | null
    Score: number | null
    Location: string | null
    MaxParticipants: number | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    ID: number
    Title: number
    Description: number
    StartDate: number
    EndDate: number
    Type: number
    Images: number
    Score: number
    Location: number
    MaxParticipants: number
    IsArchived: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    ID?: true
    Score?: true
    MaxParticipants?: true
  }

  export type ActivitySumAggregateInputType = {
    ID?: true
    Score?: true
    MaxParticipants?: true
  }

  export type ActivityMinAggregateInputType = {
    ID?: true
    Title?: true
    Description?: true
    StartDate?: true
    EndDate?: true
    Type?: true
    Score?: true
    Location?: true
    MaxParticipants?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    ID?: true
    Title?: true
    Description?: true
    StartDate?: true
    EndDate?: true
    Type?: true
    Score?: true
    Location?: true
    MaxParticipants?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ActivityCountAggregateInputType = {
    ID?: true
    Title?: true
    Description?: true
    StartDate?: true
    EndDate?: true
    Type?: true
    Images?: true
    Score?: true
    Location?: true
    MaxParticipants?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    ID: number
    Title: string
    Description: string
    StartDate: Date
    EndDate: Date
    Type: string
    Images: JsonValue
    Score: number
    Location: string | null
    MaxParticipants: number | null
    IsArchived: boolean
    CreatedAt: Date
    UpdatedAt: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Title?: boolean
    Description?: boolean
    StartDate?: boolean
    EndDate?: boolean
    Type?: boolean
    Images?: boolean
    Score?: boolean
    Location?: boolean
    MaxParticipants?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    ActivityResults?: boolean | Activity$ActivityResultsArgs<ExtArgs>
    ActivityDetails?: boolean | Activity$ActivityDetailsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Title?: boolean
    Description?: boolean
    StartDate?: boolean
    EndDate?: boolean
    Type?: boolean
    Images?: boolean
    Score?: boolean
    Location?: boolean
    MaxParticipants?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    ID?: boolean
    Title?: boolean
    Description?: boolean
    StartDate?: boolean
    EndDate?: boolean
    Type?: boolean
    Images?: boolean
    Score?: boolean
    Location?: boolean
    MaxParticipants?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActivityResults?: boolean | Activity$ActivityResultsArgs<ExtArgs>
    ActivityDetails?: boolean | Activity$ActivityDetailsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      ActivityResults: Prisma.$ActivityResultsPayload<ExtArgs>[]
      ActivityDetails: Prisma.$ActivityDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Title: string
      Description: string
      StartDate: Date
      EndDate: Date
      Type: string
      Images: Prisma.JsonValue
      Score: number
      Location: string | null
      MaxParticipants: number | null
      IsArchived: boolean
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const activityWithIDOnly = await prisma.activity.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends ActivityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
    **/
    create<T extends ActivityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ActivityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `ID`
     * const activityWithIDOnly = await prisma.activity.createManyAndReturn({ 
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
    **/
    delete<T extends ActivityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
    **/
    upsert<T extends ActivityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>
    ): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ActivityResults<T extends Activity$ActivityResultsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$ActivityResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findMany'> | Null>;

    ActivityDetails<T extends Activity$ActivityDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$ActivityDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly ID: FieldRef<"Activity", 'Int'>
    readonly Title: FieldRef<"Activity", 'String'>
    readonly Description: FieldRef<"Activity", 'String'>
    readonly StartDate: FieldRef<"Activity", 'DateTime'>
    readonly EndDate: FieldRef<"Activity", 'DateTime'>
    readonly Type: FieldRef<"Activity", 'String'>
    readonly Images: FieldRef<"Activity", 'Json'>
    readonly Score: FieldRef<"Activity", 'Int'>
    readonly Location: FieldRef<"Activity", 'String'>
    readonly MaxParticipants: FieldRef<"Activity", 'Int'>
    readonly IsArchived: FieldRef<"Activity", 'Boolean'>
    readonly CreatedAt: FieldRef<"Activity", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity.ActivityResults
   */
  export type Activity$ActivityResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    where?: ActivityResultsWhereInput
    orderBy?: ActivityResultsOrderByWithRelationInput | ActivityResultsOrderByWithRelationInput[]
    cursor?: ActivityResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityResultsScalarFieldEnum | ActivityResultsScalarFieldEnum[]
  }

  /**
   * Activity.ActivityDetails
   */
  export type Activity$ActivityDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    where?: ActivityDetailsWhereInput
    orderBy?: ActivityDetailsOrderByWithRelationInput | ActivityDetailsOrderByWithRelationInput[]
    cursor?: ActivityDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDetailsScalarFieldEnum | ActivityDetailsScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model ActivityResults
   */

  export type AggregateActivityResults = {
    _count: ActivityResultsCountAggregateOutputType | null
    _avg: ActivityResultsAvgAggregateOutputType | null
    _sum: ActivityResultsSumAggregateOutputType | null
    _min: ActivityResultsMinAggregateOutputType | null
    _max: ActivityResultsMaxAggregateOutputType | null
  }

  export type ActivityResultsAvgAggregateOutputType = {
    ID: number | null
    ActivityID: number | null
  }

  export type ActivityResultsSumAggregateOutputType = {
    ID: number | null
    ActivityID: number | null
  }

  export type ActivityResultsMinAggregateOutputType = {
    ID: number | null
    DepartmentID: string | null
    UserID: string | null
    ActivityID: number | null
    Reservation: boolean | null
    Status: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ActivityResultsMaxAggregateOutputType = {
    ID: number | null
    DepartmentID: string | null
    UserID: string | null
    ActivityID: number | null
    Reservation: boolean | null
    Status: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ActivityResultsCountAggregateOutputType = {
    ID: number
    DepartmentID: number
    UserID: number
    ActivityID: number
    Reservation: number
    Status: number
    IsArchived: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type ActivityResultsAvgAggregateInputType = {
    ID?: true
    ActivityID?: true
  }

  export type ActivityResultsSumAggregateInputType = {
    ID?: true
    ActivityID?: true
  }

  export type ActivityResultsMinAggregateInputType = {
    ID?: true
    DepartmentID?: true
    UserID?: true
    ActivityID?: true
    Reservation?: true
    Status?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ActivityResultsMaxAggregateInputType = {
    ID?: true
    DepartmentID?: true
    UserID?: true
    ActivityID?: true
    Reservation?: true
    Status?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ActivityResultsCountAggregateInputType = {
    ID?: true
    DepartmentID?: true
    UserID?: true
    ActivityID?: true
    Reservation?: true
    Status?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type ActivityResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityResults to aggregate.
     */
    where?: ActivityResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityResults to fetch.
     */
    orderBy?: ActivityResultsOrderByWithRelationInput | ActivityResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityResults
    **/
    _count?: true | ActivityResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityResultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityResultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityResultsMaxAggregateInputType
  }

  export type GetActivityResultsAggregateType<T extends ActivityResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityResults[P]>
      : GetScalarType<T[P], AggregateActivityResults[P]>
  }




  export type ActivityResultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityResultsWhereInput
    orderBy?: ActivityResultsOrderByWithAggregationInput | ActivityResultsOrderByWithAggregationInput[]
    by: ActivityResultsScalarFieldEnum[] | ActivityResultsScalarFieldEnum
    having?: ActivityResultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityResultsCountAggregateInputType | true
    _avg?: ActivityResultsAvgAggregateInputType
    _sum?: ActivityResultsSumAggregateInputType
    _min?: ActivityResultsMinAggregateInputType
    _max?: ActivityResultsMaxAggregateInputType
  }

  export type ActivityResultsGroupByOutputType = {
    ID: number
    DepartmentID: string
    UserID: string
    ActivityID: number
    Reservation: boolean
    Status: string
    IsArchived: boolean
    CreatedAt: Date
    UpdatedAt: Date
    _count: ActivityResultsCountAggregateOutputType | null
    _avg: ActivityResultsAvgAggregateOutputType | null
    _sum: ActivityResultsSumAggregateOutputType | null
    _min: ActivityResultsMinAggregateOutputType | null
    _max: ActivityResultsMaxAggregateOutputType | null
  }

  type GetActivityResultsGroupByPayload<T extends ActivityResultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityResultsGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityResultsGroupByOutputType[P]>
        }
      >
    >


  export type ActivityResultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    DepartmentID?: boolean
    UserID?: boolean
    ActivityID?: boolean
    Reservation?: boolean
    Status?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityResults"]>

  export type ActivityResultsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    DepartmentID?: boolean
    UserID?: boolean
    ActivityID?: boolean
    Reservation?: boolean
    Status?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityResults"]>

  export type ActivityResultsSelectScalar = {
    ID?: boolean
    DepartmentID?: boolean
    UserID?: boolean
    ActivityID?: boolean
    Reservation?: boolean
    Status?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type ActivityResultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type ActivityResultsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $ActivityResultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityResults"
    objects: {
      Department: Prisma.$DepartmentPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      Activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      DepartmentID: string
      UserID: string
      ActivityID: number
      Reservation: boolean
      Status: string
      IsArchived: boolean
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["activityResults"]>
    composites: {}
  }

  type ActivityResultsGetPayload<S extends boolean | null | undefined | ActivityResultsDefaultArgs> = $Result.GetResult<Prisma.$ActivityResultsPayload, S>

  type ActivityResultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityResultsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityResultsCountAggregateInputType | true
    }

  export interface ActivityResultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityResults'], meta: { name: 'ActivityResults' } }
    /**
     * Find zero or one ActivityResults that matches the filter.
     * @param {ActivityResultsFindUniqueArgs} args - Arguments to find a ActivityResults
     * @example
     * // Get one ActivityResults
     * const activityResults = await prisma.activityResults.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivityResultsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityResultsFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ActivityResults that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityResultsFindUniqueOrThrowArgs} args - Arguments to find a ActivityResults
     * @example
     * // Get one ActivityResults
     * const activityResults = await prisma.activityResults.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivityResultsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityResultsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ActivityResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityResultsFindFirstArgs} args - Arguments to find a ActivityResults
     * @example
     * // Get one ActivityResults
     * const activityResults = await prisma.activityResults.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivityResultsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityResultsFindFirstArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ActivityResults that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityResultsFindFirstOrThrowArgs} args - Arguments to find a ActivityResults
     * @example
     * // Get one ActivityResults
     * const activityResults = await prisma.activityResults.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivityResultsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityResultsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ActivityResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityResultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityResults
     * const activityResults = await prisma.activityResults.findMany()
     * 
     * // Get first 10 ActivityResults
     * const activityResults = await prisma.activityResults.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const activityResultsWithIDOnly = await prisma.activityResults.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends ActivityResultsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityResultsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ActivityResults.
     * @param {ActivityResultsCreateArgs} args - Arguments to create a ActivityResults.
     * @example
     * // Create one ActivityResults
     * const ActivityResults = await prisma.activityResults.create({
     *   data: {
     *     // ... data to create a ActivityResults
     *   }
     * })
     * 
    **/
    create<T extends ActivityResultsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityResultsCreateArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ActivityResults.
     * @param {ActivityResultsCreateManyArgs} args - Arguments to create many ActivityResults.
     * @example
     * // Create many ActivityResults
     * const activityResults = await prisma.activityResults.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ActivityResultsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityResultsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityResults and returns the data saved in the database.
     * @param {ActivityResultsCreateManyAndReturnArgs} args - Arguments to create many ActivityResults.
     * @example
     * // Create many ActivityResults
     * const activityResults = await prisma.activityResults.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityResults and only return the `ID`
     * const activityResultsWithIDOnly = await prisma.activityResults.createManyAndReturn({ 
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ActivityResultsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityResultsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ActivityResults.
     * @param {ActivityResultsDeleteArgs} args - Arguments to delete one ActivityResults.
     * @example
     * // Delete one ActivityResults
     * const ActivityResults = await prisma.activityResults.delete({
     *   where: {
     *     // ... filter to delete one ActivityResults
     *   }
     * })
     * 
    **/
    delete<T extends ActivityResultsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityResultsDeleteArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ActivityResults.
     * @param {ActivityResultsUpdateArgs} args - Arguments to update one ActivityResults.
     * @example
     * // Update one ActivityResults
     * const activityResults = await prisma.activityResults.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivityResultsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityResultsUpdateArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ActivityResults.
     * @param {ActivityResultsDeleteManyArgs} args - Arguments to filter ActivityResults to delete.
     * @example
     * // Delete a few ActivityResults
     * const { count } = await prisma.activityResults.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivityResultsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityResultsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityResultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityResults
     * const activityResults = await prisma.activityResults.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivityResultsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityResultsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityResults.
     * @param {ActivityResultsUpsertArgs} args - Arguments to update or create a ActivityResults.
     * @example
     * // Update or create a ActivityResults
     * const activityResults = await prisma.activityResults.upsert({
     *   create: {
     *     // ... data to create a ActivityResults
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityResults we want to update
     *   }
     * })
    **/
    upsert<T extends ActivityResultsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityResultsUpsertArgs<ExtArgs>>
    ): Prisma__ActivityResultsClient<$Result.GetResult<Prisma.$ActivityResultsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ActivityResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityResultsCountArgs} args - Arguments to filter ActivityResults to count.
     * @example
     * // Count the number of ActivityResults
     * const count = await prisma.activityResults.count({
     *   where: {
     *     // ... the filter for the ActivityResults we want to count
     *   }
     * })
    **/
    count<T extends ActivityResultsCountArgs>(
      args?: Subset<T, ActivityResultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityResultsAggregateArgs>(args: Subset<T, ActivityResultsAggregateArgs>): Prisma.PrismaPromise<GetActivityResultsAggregateType<T>>

    /**
     * Group by ActivityResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityResultsGroupByArgs} args - Group by arguments.
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
      T extends ActivityResultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityResultsGroupByArgs['orderBy'] }
        : { orderBy?: ActivityResultsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityResultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityResults model
   */
  readonly fields: ActivityResultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityResults.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityResultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ActivityResults model
   */ 
  interface ActivityResultsFieldRefs {
    readonly ID: FieldRef<"ActivityResults", 'Int'>
    readonly DepartmentID: FieldRef<"ActivityResults", 'String'>
    readonly UserID: FieldRef<"ActivityResults", 'String'>
    readonly ActivityID: FieldRef<"ActivityResults", 'Int'>
    readonly Reservation: FieldRef<"ActivityResults", 'Boolean'>
    readonly Status: FieldRef<"ActivityResults", 'String'>
    readonly IsArchived: FieldRef<"ActivityResults", 'Boolean'>
    readonly CreatedAt: FieldRef<"ActivityResults", 'DateTime'>
    readonly UpdatedAt: FieldRef<"ActivityResults", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityResults findUnique
   */
  export type ActivityResultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityResults to fetch.
     */
    where: ActivityResultsWhereUniqueInput
  }

  /**
   * ActivityResults findUniqueOrThrow
   */
  export type ActivityResultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityResults to fetch.
     */
    where: ActivityResultsWhereUniqueInput
  }

  /**
   * ActivityResults findFirst
   */
  export type ActivityResultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityResults to fetch.
     */
    where?: ActivityResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityResults to fetch.
     */
    orderBy?: ActivityResultsOrderByWithRelationInput | ActivityResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityResults.
     */
    cursor?: ActivityResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityResults.
     */
    distinct?: ActivityResultsScalarFieldEnum | ActivityResultsScalarFieldEnum[]
  }

  /**
   * ActivityResults findFirstOrThrow
   */
  export type ActivityResultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityResults to fetch.
     */
    where?: ActivityResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityResults to fetch.
     */
    orderBy?: ActivityResultsOrderByWithRelationInput | ActivityResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityResults.
     */
    cursor?: ActivityResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityResults.
     */
    distinct?: ActivityResultsScalarFieldEnum | ActivityResultsScalarFieldEnum[]
  }

  /**
   * ActivityResults findMany
   */
  export type ActivityResultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityResults to fetch.
     */
    where?: ActivityResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityResults to fetch.
     */
    orderBy?: ActivityResultsOrderByWithRelationInput | ActivityResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityResults.
     */
    cursor?: ActivityResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityResults.
     */
    skip?: number
    distinct?: ActivityResultsScalarFieldEnum | ActivityResultsScalarFieldEnum[]
  }

  /**
   * ActivityResults create
   */
  export type ActivityResultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityResults.
     */
    data: XOR<ActivityResultsCreateInput, ActivityResultsUncheckedCreateInput>
  }

  /**
   * ActivityResults createMany
   */
  export type ActivityResultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityResults.
     */
    data: ActivityResultsCreateManyInput | ActivityResultsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityResults createManyAndReturn
   */
  export type ActivityResultsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivityResults.
     */
    data: ActivityResultsCreateManyInput | ActivityResultsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityResults update
   */
  export type ActivityResultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityResults.
     */
    data: XOR<ActivityResultsUpdateInput, ActivityResultsUncheckedUpdateInput>
    /**
     * Choose, which ActivityResults to update.
     */
    where: ActivityResultsWhereUniqueInput
  }

  /**
   * ActivityResults updateMany
   */
  export type ActivityResultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityResults.
     */
    data: XOR<ActivityResultsUpdateManyMutationInput, ActivityResultsUncheckedUpdateManyInput>
    /**
     * Filter which ActivityResults to update
     */
    where?: ActivityResultsWhereInput
  }

  /**
   * ActivityResults upsert
   */
  export type ActivityResultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityResults to update in case it exists.
     */
    where: ActivityResultsWhereUniqueInput
    /**
     * In case the ActivityResults found by the `where` argument doesn't exist, create a new ActivityResults with this data.
     */
    create: XOR<ActivityResultsCreateInput, ActivityResultsUncheckedCreateInput>
    /**
     * In case the ActivityResults was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityResultsUpdateInput, ActivityResultsUncheckedUpdateInput>
  }

  /**
   * ActivityResults delete
   */
  export type ActivityResultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
    /**
     * Filter which ActivityResults to delete.
     */
    where: ActivityResultsWhereUniqueInput
  }

  /**
   * ActivityResults deleteMany
   */
  export type ActivityResultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityResults to delete
     */
    where?: ActivityResultsWhereInput
  }

  /**
   * ActivityResults without action
   */
  export type ActivityResultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityResults
     */
    select?: ActivityResultsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityResultsInclude<ExtArgs> | null
  }


  /**
   * Model ActivityDetails
   */

  export type AggregateActivityDetails = {
    _count: ActivityDetailsCountAggregateOutputType | null
    _avg: ActivityDetailsAvgAggregateOutputType | null
    _sum: ActivityDetailsSumAggregateOutputType | null
    _min: ActivityDetailsMinAggregateOutputType | null
    _max: ActivityDetailsMaxAggregateOutputType | null
  }

  export type ActivityDetailsAvgAggregateOutputType = {
    ID: number | null
    ActivityID: number | null
  }

  export type ActivityDetailsSumAggregateOutputType = {
    ID: number | null
    ActivityID: number | null
  }

  export type ActivityDetailsMinAggregateOutputType = {
    ID: number | null
    UserID: string | null
    ActivityID: number | null
    Details: string | null
    IsApproved: boolean | null
    ReviewedBy: string | null
    ReviewNote: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ActivityDetailsMaxAggregateOutputType = {
    ID: number | null
    UserID: string | null
    ActivityID: number | null
    Details: string | null
    IsApproved: boolean | null
    ReviewedBy: string | null
    ReviewNote: string | null
    IsArchived: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type ActivityDetailsCountAggregateOutputType = {
    ID: number
    UserID: number
    ActivityID: number
    Details: number
    IsApproved: number
    ReviewedBy: number
    ReviewNote: number
    IsArchived: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type ActivityDetailsAvgAggregateInputType = {
    ID?: true
    ActivityID?: true
  }

  export type ActivityDetailsSumAggregateInputType = {
    ID?: true
    ActivityID?: true
  }

  export type ActivityDetailsMinAggregateInputType = {
    ID?: true
    UserID?: true
    ActivityID?: true
    Details?: true
    IsApproved?: true
    ReviewedBy?: true
    ReviewNote?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ActivityDetailsMaxAggregateInputType = {
    ID?: true
    UserID?: true
    ActivityID?: true
    Details?: true
    IsApproved?: true
    ReviewedBy?: true
    ReviewNote?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type ActivityDetailsCountAggregateInputType = {
    ID?: true
    UserID?: true
    ActivityID?: true
    Details?: true
    IsApproved?: true
    ReviewedBy?: true
    ReviewNote?: true
    IsArchived?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type ActivityDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityDetails to aggregate.
     */
    where?: ActivityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailsOrderByWithRelationInput | ActivityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityDetails
    **/
    _count?: true | ActivityDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityDetailsMaxAggregateInputType
  }

  export type GetActivityDetailsAggregateType<T extends ActivityDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityDetails[P]>
      : GetScalarType<T[P], AggregateActivityDetails[P]>
  }




  export type ActivityDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDetailsWhereInput
    orderBy?: ActivityDetailsOrderByWithAggregationInput | ActivityDetailsOrderByWithAggregationInput[]
    by: ActivityDetailsScalarFieldEnum[] | ActivityDetailsScalarFieldEnum
    having?: ActivityDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityDetailsCountAggregateInputType | true
    _avg?: ActivityDetailsAvgAggregateInputType
    _sum?: ActivityDetailsSumAggregateInputType
    _min?: ActivityDetailsMinAggregateInputType
    _max?: ActivityDetailsMaxAggregateInputType
  }

  export type ActivityDetailsGroupByOutputType = {
    ID: number
    UserID: string
    ActivityID: number
    Details: string
    IsApproved: boolean
    ReviewedBy: string | null
    ReviewNote: string | null
    IsArchived: boolean
    CreatedAt: Date
    UpdatedAt: Date
    _count: ActivityDetailsCountAggregateOutputType | null
    _avg: ActivityDetailsAvgAggregateOutputType | null
    _sum: ActivityDetailsSumAggregateOutputType | null
    _min: ActivityDetailsMinAggregateOutputType | null
    _max: ActivityDetailsMaxAggregateOutputType | null
  }

  type GetActivityDetailsGroupByPayload<T extends ActivityDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ActivityDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    UserID?: boolean
    ActivityID?: boolean
    Details?: boolean
    IsApproved?: boolean
    ReviewedBy?: boolean
    ReviewNote?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDetails"]>

  export type ActivityDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    UserID?: boolean
    ActivityID?: boolean
    Details?: boolean
    IsApproved?: boolean
    ReviewedBy?: boolean
    ReviewNote?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDetails"]>

  export type ActivityDetailsSelectScalar = {
    ID?: boolean
    UserID?: boolean
    ActivityID?: boolean
    Details?: boolean
    IsApproved?: boolean
    ReviewedBy?: boolean
    ReviewNote?: boolean
    IsArchived?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type ActivityDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type ActivityDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $ActivityDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityDetails"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      UserID: string
      ActivityID: number
      Details: string
      IsApproved: boolean
      ReviewedBy: string | null
      ReviewNote: string | null
      IsArchived: boolean
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["activityDetails"]>
    composites: {}
  }

  type ActivityDetailsGetPayload<S extends boolean | null | undefined | ActivityDetailsDefaultArgs> = $Result.GetResult<Prisma.$ActivityDetailsPayload, S>

  type ActivityDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityDetailsCountAggregateInputType | true
    }

  export interface ActivityDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityDetails'], meta: { name: 'ActivityDetails' } }
    /**
     * Find zero or one ActivityDetails that matches the filter.
     * @param {ActivityDetailsFindUniqueArgs} args - Arguments to find a ActivityDetails
     * @example
     * // Get one ActivityDetails
     * const activityDetails = await prisma.activityDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivityDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ActivityDetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityDetailsFindUniqueOrThrowArgs} args - Arguments to find a ActivityDetails
     * @example
     * // Get one ActivityDetails
     * const activityDetails = await prisma.activityDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivityDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ActivityDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailsFindFirstArgs} args - Arguments to find a ActivityDetails
     * @example
     * // Get one ActivityDetails
     * const activityDetails = await prisma.activityDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivityDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ActivityDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailsFindFirstOrThrowArgs} args - Arguments to find a ActivityDetails
     * @example
     * // Get one ActivityDetails
     * const activityDetails = await prisma.activityDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivityDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ActivityDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityDetails
     * const activityDetails = await prisma.activityDetails.findMany()
     * 
     * // Get first 10 ActivityDetails
     * const activityDetails = await prisma.activityDetails.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const activityDetailsWithIDOnly = await prisma.activityDetails.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends ActivityDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ActivityDetails.
     * @param {ActivityDetailsCreateArgs} args - Arguments to create a ActivityDetails.
     * @example
     * // Create one ActivityDetails
     * const ActivityDetails = await prisma.activityDetails.create({
     *   data: {
     *     // ... data to create a ActivityDetails
     *   }
     * })
     * 
    **/
    create<T extends ActivityDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDetailsCreateArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ActivityDetails.
     * @param {ActivityDetailsCreateManyArgs} args - Arguments to create many ActivityDetails.
     * @example
     * // Create many ActivityDetails
     * const activityDetails = await prisma.activityDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ActivityDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityDetails and returns the data saved in the database.
     * @param {ActivityDetailsCreateManyAndReturnArgs} args - Arguments to create many ActivityDetails.
     * @example
     * // Create many ActivityDetails
     * const activityDetails = await prisma.activityDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityDetails and only return the `ID`
     * const activityDetailsWithIDOnly = await prisma.activityDetails.createManyAndReturn({ 
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ActivityDetailsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDetailsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ActivityDetails.
     * @param {ActivityDetailsDeleteArgs} args - Arguments to delete one ActivityDetails.
     * @example
     * // Delete one ActivityDetails
     * const ActivityDetails = await prisma.activityDetails.delete({
     *   where: {
     *     // ... filter to delete one ActivityDetails
     *   }
     * })
     * 
    **/
    delete<T extends ActivityDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDetailsDeleteArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ActivityDetails.
     * @param {ActivityDetailsUpdateArgs} args - Arguments to update one ActivityDetails.
     * @example
     * // Update one ActivityDetails
     * const activityDetails = await prisma.activityDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivityDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDetailsUpdateArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ActivityDetails.
     * @param {ActivityDetailsDeleteManyArgs} args - Arguments to filter ActivityDetails to delete.
     * @example
     * // Delete a few ActivityDetails
     * const { count } = await prisma.activityDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivityDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityDetails
     * const activityDetails = await prisma.activityDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivityDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityDetails.
     * @param {ActivityDetailsUpsertArgs} args - Arguments to update or create a ActivityDetails.
     * @example
     * // Update or create a ActivityDetails
     * const activityDetails = await prisma.activityDetails.upsert({
     *   create: {
     *     // ... data to create a ActivityDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityDetails we want to update
     *   }
     * })
    **/
    upsert<T extends ActivityDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityDetailsUpsertArgs<ExtArgs>>
    ): Prisma__ActivityDetailsClient<$Result.GetResult<Prisma.$ActivityDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ActivityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailsCountArgs} args - Arguments to filter ActivityDetails to count.
     * @example
     * // Count the number of ActivityDetails
     * const count = await prisma.activityDetails.count({
     *   where: {
     *     // ... the filter for the ActivityDetails we want to count
     *   }
     * })
    **/
    count<T extends ActivityDetailsCountArgs>(
      args?: Subset<T, ActivityDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityDetailsAggregateArgs>(args: Subset<T, ActivityDetailsAggregateArgs>): Prisma.PrismaPromise<GetActivityDetailsAggregateType<T>>

    /**
     * Group by ActivityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDetailsGroupByArgs} args - Group by arguments.
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
      T extends ActivityDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ActivityDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityDetails model
   */
  readonly fields: ActivityDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ActivityDetails model
   */ 
  interface ActivityDetailsFieldRefs {
    readonly ID: FieldRef<"ActivityDetails", 'Int'>
    readonly UserID: FieldRef<"ActivityDetails", 'String'>
    readonly ActivityID: FieldRef<"ActivityDetails", 'Int'>
    readonly Details: FieldRef<"ActivityDetails", 'String'>
    readonly IsApproved: FieldRef<"ActivityDetails", 'Boolean'>
    readonly ReviewedBy: FieldRef<"ActivityDetails", 'String'>
    readonly ReviewNote: FieldRef<"ActivityDetails", 'String'>
    readonly IsArchived: FieldRef<"ActivityDetails", 'Boolean'>
    readonly CreatedAt: FieldRef<"ActivityDetails", 'DateTime'>
    readonly UpdatedAt: FieldRef<"ActivityDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityDetails findUnique
   */
  export type ActivityDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetails to fetch.
     */
    where: ActivityDetailsWhereUniqueInput
  }

  /**
   * ActivityDetails findUniqueOrThrow
   */
  export type ActivityDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetails to fetch.
     */
    where: ActivityDetailsWhereUniqueInput
  }

  /**
   * ActivityDetails findFirst
   */
  export type ActivityDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetails to fetch.
     */
    where?: ActivityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailsOrderByWithRelationInput | ActivityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityDetails.
     */
    cursor?: ActivityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityDetails.
     */
    distinct?: ActivityDetailsScalarFieldEnum | ActivityDetailsScalarFieldEnum[]
  }

  /**
   * ActivityDetails findFirstOrThrow
   */
  export type ActivityDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetails to fetch.
     */
    where?: ActivityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailsOrderByWithRelationInput | ActivityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityDetails.
     */
    cursor?: ActivityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityDetails.
     */
    distinct?: ActivityDetailsScalarFieldEnum | ActivityDetailsScalarFieldEnum[]
  }

  /**
   * ActivityDetails findMany
   */
  export type ActivityDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDetails to fetch.
     */
    where?: ActivityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDetails to fetch.
     */
    orderBy?: ActivityDetailsOrderByWithRelationInput | ActivityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityDetails.
     */
    cursor?: ActivityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDetails.
     */
    skip?: number
    distinct?: ActivityDetailsScalarFieldEnum | ActivityDetailsScalarFieldEnum[]
  }

  /**
   * ActivityDetails create
   */
  export type ActivityDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityDetails.
     */
    data: XOR<ActivityDetailsCreateInput, ActivityDetailsUncheckedCreateInput>
  }

  /**
   * ActivityDetails createMany
   */
  export type ActivityDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityDetails.
     */
    data: ActivityDetailsCreateManyInput | ActivityDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityDetails createManyAndReturn
   */
  export type ActivityDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivityDetails.
     */
    data: ActivityDetailsCreateManyInput | ActivityDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityDetails update
   */
  export type ActivityDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityDetails.
     */
    data: XOR<ActivityDetailsUpdateInput, ActivityDetailsUncheckedUpdateInput>
    /**
     * Choose, which ActivityDetails to update.
     */
    where: ActivityDetailsWhereUniqueInput
  }

  /**
   * ActivityDetails updateMany
   */
  export type ActivityDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityDetails.
     */
    data: XOR<ActivityDetailsUpdateManyMutationInput, ActivityDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ActivityDetails to update
     */
    where?: ActivityDetailsWhereInput
  }

  /**
   * ActivityDetails upsert
   */
  export type ActivityDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityDetails to update in case it exists.
     */
    where: ActivityDetailsWhereUniqueInput
    /**
     * In case the ActivityDetails found by the `where` argument doesn't exist, create a new ActivityDetails with this data.
     */
    create: XOR<ActivityDetailsCreateInput, ActivityDetailsUncheckedCreateInput>
    /**
     * In case the ActivityDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityDetailsUpdateInput, ActivityDetailsUncheckedUpdateInput>
  }

  /**
   * ActivityDetails delete
   */
  export type ActivityDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
    /**
     * Filter which ActivityDetails to delete.
     */
    where: ActivityDetailsWhereUniqueInput
  }

  /**
   * ActivityDetails deleteMany
   */
  export type ActivityDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityDetails to delete
     */
    where?: ActivityDetailsWhereInput
  }

  /**
   * ActivityDetails without action
   */
  export type ActivityDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDetails
     */
    select?: ActivityDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDetailsInclude<ExtArgs> | null
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
    UserID: 'UserID',
    UserFirstName: 'UserFirstName',
    UserLastName: 'UserLastName',
    UserPassword: 'UserPassword',
    UserImage: 'UserImage',
    DepartmentID: 'DepartmentID',
    Role: 'Role',
    IsArchived: 'IsArchived',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    DepartmentID: 'DepartmentID',
    Name: 'Name',
    IsArchived: 'IsArchived',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    AdminID: 'AdminID',
    AdminPass: 'AdminPass',
    UserID: 'UserID',
    IsArchived: 'IsArchived',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    ID: 'ID',
    Title: 'Title',
    Description: 'Description',
    StartDate: 'StartDate',
    EndDate: 'EndDate',
    Type: 'Type',
    Images: 'Images',
    Score: 'Score',
    Location: 'Location',
    MaxParticipants: 'MaxParticipants',
    IsArchived: 'IsArchived',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const ActivityResultsScalarFieldEnum: {
    ID: 'ID',
    DepartmentID: 'DepartmentID',
    UserID: 'UserID',
    ActivityID: 'ActivityID',
    Reservation: 'Reservation',
    Status: 'Status',
    IsArchived: 'IsArchived',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type ActivityResultsScalarFieldEnum = (typeof ActivityResultsScalarFieldEnum)[keyof typeof ActivityResultsScalarFieldEnum]


  export const ActivityDetailsScalarFieldEnum: {
    ID: 'ID',
    UserID: 'UserID',
    ActivityID: 'ActivityID',
    Details: 'Details',
    IsApproved: 'IsApproved',
    ReviewedBy: 'ReviewedBy',
    ReviewNote: 'ReviewNote',
    IsArchived: 'IsArchived',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type ActivityDetailsScalarFieldEnum = (typeof ActivityDetailsScalarFieldEnum)[keyof typeof ActivityDetailsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
    UserID?: StringFilter<"User"> | string
    UserFirstName?: StringFilter<"User"> | string
    UserLastName?: StringFilter<"User"> | string
    UserPassword?: StringFilter<"User"> | string
    UserImage?: StringNullableFilter<"User"> | string | null
    DepartmentID?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    IsArchived?: BoolFilter<"User"> | boolean
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    Department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    Admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    ActivityResults?: ActivityResultsListRelationFilter
    ActivityDetails?: ActivityDetailsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    UserID?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    UserPassword?: SortOrder
    UserImage?: SortOrderInput | SortOrder
    DepartmentID?: SortOrder
    Role?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Department?: DepartmentOrderByWithRelationInput
    Admin?: AdminOrderByWithRelationInput
    ActivityResults?: ActivityResultsOrderByRelationAggregateInput
    ActivityDetails?: ActivityDetailsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    UserID?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    UserFirstName?: StringFilter<"User"> | string
    UserLastName?: StringFilter<"User"> | string
    UserPassword?: StringFilter<"User"> | string
    UserImage?: StringNullableFilter<"User"> | string | null
    DepartmentID?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    IsArchived?: BoolFilter<"User"> | boolean
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
    Department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    Admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    ActivityResults?: ActivityResultsListRelationFilter
    ActivityDetails?: ActivityDetailsListRelationFilter
  }, "UserID" | "UserID">

  export type UserOrderByWithAggregationInput = {
    UserID?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    UserPassword?: SortOrder
    UserImage?: SortOrderInput | SortOrder
    DepartmentID?: SortOrder
    Role?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    UserID?: StringWithAggregatesFilter<"User"> | string
    UserFirstName?: StringWithAggregatesFilter<"User"> | string
    UserLastName?: StringWithAggregatesFilter<"User"> | string
    UserPassword?: StringWithAggregatesFilter<"User"> | string
    UserImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    DepartmentID?: StringWithAggregatesFilter<"User"> | string
    Role?: StringWithAggregatesFilter<"User"> | string
    IsArchived?: BoolWithAggregatesFilter<"User"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    DepartmentID?: StringFilter<"Department"> | string
    Name?: StringFilter<"Department"> | string
    IsArchived?: BoolFilter<"Department"> | boolean
    CreatedAt?: DateTimeFilter<"Department"> | Date | string
    UpdatedAt?: DateTimeFilter<"Department"> | Date | string
    Users?: UserListRelationFilter
    ActivityResults?: ActivityResultsListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    DepartmentID?: SortOrder
    Name?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Users?: UserOrderByRelationAggregateInput
    ActivityResults?: ActivityResultsOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    DepartmentID?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    Name?: StringFilter<"Department"> | string
    IsArchived?: BoolFilter<"Department"> | boolean
    CreatedAt?: DateTimeFilter<"Department"> | Date | string
    UpdatedAt?: DateTimeFilter<"Department"> | Date | string
    Users?: UserListRelationFilter
    ActivityResults?: ActivityResultsListRelationFilter
  }, "DepartmentID">

  export type DepartmentOrderByWithAggregationInput = {
    DepartmentID?: SortOrder
    Name?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    DepartmentID?: StringWithAggregatesFilter<"Department"> | string
    Name?: StringWithAggregatesFilter<"Department"> | string
    IsArchived?: BoolWithAggregatesFilter<"Department"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    AdminID?: StringFilter<"Admin"> | string
    AdminPass?: StringFilter<"Admin"> | string
    UserID?: StringFilter<"Admin"> | string
    IsArchived?: BoolFilter<"Admin"> | boolean
    CreatedAt?: DateTimeFilter<"Admin"> | Date | string
    UpdatedAt?: DateTimeFilter<"Admin"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    AdminID?: SortOrder
    AdminPass?: SortOrder
    UserID?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    AdminID?: string
    UserID?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    AdminPass?: StringFilter<"Admin"> | string
    IsArchived?: BoolFilter<"Admin"> | boolean
    CreatedAt?: DateTimeFilter<"Admin"> | Date | string
    UpdatedAt?: DateTimeFilter<"Admin"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "AdminID" | "UserID">

  export type AdminOrderByWithAggregationInput = {
    AdminID?: SortOrder
    AdminPass?: SortOrder
    UserID?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    AdminID?: StringWithAggregatesFilter<"Admin"> | string
    AdminPass?: StringWithAggregatesFilter<"Admin"> | string
    UserID?: StringWithAggregatesFilter<"Admin"> | string
    IsArchived?: BoolWithAggregatesFilter<"Admin"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    ID?: IntFilter<"Activity"> | number
    Title?: StringFilter<"Activity"> | string
    Description?: StringFilter<"Activity"> | string
    StartDate?: DateTimeFilter<"Activity"> | Date | string
    EndDate?: DateTimeFilter<"Activity"> | Date | string
    Type?: StringFilter<"Activity"> | string
    Images?: JsonFilter<"Activity">
    Score?: IntFilter<"Activity"> | number
    Location?: StringNullableFilter<"Activity"> | string | null
    MaxParticipants?: IntNullableFilter<"Activity"> | number | null
    IsArchived?: BoolFilter<"Activity"> | boolean
    CreatedAt?: DateTimeFilter<"Activity"> | Date | string
    UpdatedAt?: DateTimeFilter<"Activity"> | Date | string
    ActivityResults?: ActivityResultsListRelationFilter
    ActivityDetails?: ActivityDetailsListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    ID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Type?: SortOrder
    Images?: SortOrder
    Score?: SortOrder
    Location?: SortOrderInput | SortOrder
    MaxParticipants?: SortOrderInput | SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    ActivityResults?: ActivityResultsOrderByRelationAggregateInput
    ActivityDetails?: ActivityDetailsOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    Title?: StringFilter<"Activity"> | string
    Description?: StringFilter<"Activity"> | string
    StartDate?: DateTimeFilter<"Activity"> | Date | string
    EndDate?: DateTimeFilter<"Activity"> | Date | string
    Type?: StringFilter<"Activity"> | string
    Images?: JsonFilter<"Activity">
    Score?: IntFilter<"Activity"> | number
    Location?: StringNullableFilter<"Activity"> | string | null
    MaxParticipants?: IntNullableFilter<"Activity"> | number | null
    IsArchived?: BoolFilter<"Activity"> | boolean
    CreatedAt?: DateTimeFilter<"Activity"> | Date | string
    UpdatedAt?: DateTimeFilter<"Activity"> | Date | string
    ActivityResults?: ActivityResultsListRelationFilter
    ActivityDetails?: ActivityDetailsListRelationFilter
  }, "ID">

  export type ActivityOrderByWithAggregationInput = {
    ID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Type?: SortOrder
    Images?: SortOrder
    Score?: SortOrder
    Location?: SortOrderInput | SortOrder
    MaxParticipants?: SortOrderInput | SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Activity"> | number
    Title?: StringWithAggregatesFilter<"Activity"> | string
    Description?: StringWithAggregatesFilter<"Activity"> | string
    StartDate?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    EndDate?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    Type?: StringWithAggregatesFilter<"Activity"> | string
    Images?: JsonWithAggregatesFilter<"Activity">
    Score?: IntWithAggregatesFilter<"Activity"> | number
    Location?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    MaxParticipants?: IntNullableWithAggregatesFilter<"Activity"> | number | null
    IsArchived?: BoolWithAggregatesFilter<"Activity"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type ActivityResultsWhereInput = {
    AND?: ActivityResultsWhereInput | ActivityResultsWhereInput[]
    OR?: ActivityResultsWhereInput[]
    NOT?: ActivityResultsWhereInput | ActivityResultsWhereInput[]
    ID?: IntFilter<"ActivityResults"> | number
    DepartmentID?: StringFilter<"ActivityResults"> | string
    UserID?: StringFilter<"ActivityResults"> | string
    ActivityID?: IntFilter<"ActivityResults"> | number
    Reservation?: BoolFilter<"ActivityResults"> | boolean
    Status?: StringFilter<"ActivityResults"> | string
    IsArchived?: BoolFilter<"ActivityResults"> | boolean
    CreatedAt?: DateTimeFilter<"ActivityResults"> | Date | string
    UpdatedAt?: DateTimeFilter<"ActivityResults"> | Date | string
    Department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
    Activity?: XOR<ActivityRelationFilter, ActivityWhereInput>
  }

  export type ActivityResultsOrderByWithRelationInput = {
    ID?: SortOrder
    DepartmentID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Reservation?: SortOrder
    Status?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Department?: DepartmentOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    Activity?: ActivityOrderByWithRelationInput
  }

  export type ActivityResultsWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ActivityResultsWhereInput | ActivityResultsWhereInput[]
    OR?: ActivityResultsWhereInput[]
    NOT?: ActivityResultsWhereInput | ActivityResultsWhereInput[]
    DepartmentID?: StringFilter<"ActivityResults"> | string
    UserID?: StringFilter<"ActivityResults"> | string
    ActivityID?: IntFilter<"ActivityResults"> | number
    Reservation?: BoolFilter<"ActivityResults"> | boolean
    Status?: StringFilter<"ActivityResults"> | string
    IsArchived?: BoolFilter<"ActivityResults"> | boolean
    CreatedAt?: DateTimeFilter<"ActivityResults"> | Date | string
    UpdatedAt?: DateTimeFilter<"ActivityResults"> | Date | string
    Department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
    Activity?: XOR<ActivityRelationFilter, ActivityWhereInput>
  }, "ID">

  export type ActivityResultsOrderByWithAggregationInput = {
    ID?: SortOrder
    DepartmentID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Reservation?: SortOrder
    Status?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: ActivityResultsCountOrderByAggregateInput
    _avg?: ActivityResultsAvgOrderByAggregateInput
    _max?: ActivityResultsMaxOrderByAggregateInput
    _min?: ActivityResultsMinOrderByAggregateInput
    _sum?: ActivityResultsSumOrderByAggregateInput
  }

  export type ActivityResultsScalarWhereWithAggregatesInput = {
    AND?: ActivityResultsScalarWhereWithAggregatesInput | ActivityResultsScalarWhereWithAggregatesInput[]
    OR?: ActivityResultsScalarWhereWithAggregatesInput[]
    NOT?: ActivityResultsScalarWhereWithAggregatesInput | ActivityResultsScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"ActivityResults"> | number
    DepartmentID?: StringWithAggregatesFilter<"ActivityResults"> | string
    UserID?: StringWithAggregatesFilter<"ActivityResults"> | string
    ActivityID?: IntWithAggregatesFilter<"ActivityResults"> | number
    Reservation?: BoolWithAggregatesFilter<"ActivityResults"> | boolean
    Status?: StringWithAggregatesFilter<"ActivityResults"> | string
    IsArchived?: BoolWithAggregatesFilter<"ActivityResults"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"ActivityResults"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"ActivityResults"> | Date | string
  }

  export type ActivityDetailsWhereInput = {
    AND?: ActivityDetailsWhereInput | ActivityDetailsWhereInput[]
    OR?: ActivityDetailsWhereInput[]
    NOT?: ActivityDetailsWhereInput | ActivityDetailsWhereInput[]
    ID?: IntFilter<"ActivityDetails"> | number
    UserID?: StringFilter<"ActivityDetails"> | string
    ActivityID?: IntFilter<"ActivityDetails"> | number
    Details?: StringFilter<"ActivityDetails"> | string
    IsApproved?: BoolFilter<"ActivityDetails"> | boolean
    ReviewedBy?: StringNullableFilter<"ActivityDetails"> | string | null
    ReviewNote?: StringNullableFilter<"ActivityDetails"> | string | null
    IsArchived?: BoolFilter<"ActivityDetails"> | boolean
    CreatedAt?: DateTimeFilter<"ActivityDetails"> | Date | string
    UpdatedAt?: DateTimeFilter<"ActivityDetails"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Activity?: XOR<ActivityRelationFilter, ActivityWhereInput>
  }

  export type ActivityDetailsOrderByWithRelationInput = {
    ID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Details?: SortOrder
    IsApproved?: SortOrder
    ReviewedBy?: SortOrderInput | SortOrder
    ReviewNote?: SortOrderInput | SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Activity?: ActivityOrderByWithRelationInput
  }

  export type ActivityDetailsWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ActivityDetailsWhereInput | ActivityDetailsWhereInput[]
    OR?: ActivityDetailsWhereInput[]
    NOT?: ActivityDetailsWhereInput | ActivityDetailsWhereInput[]
    UserID?: StringFilter<"ActivityDetails"> | string
    ActivityID?: IntFilter<"ActivityDetails"> | number
    Details?: StringFilter<"ActivityDetails"> | string
    IsApproved?: BoolFilter<"ActivityDetails"> | boolean
    ReviewedBy?: StringNullableFilter<"ActivityDetails"> | string | null
    ReviewNote?: StringNullableFilter<"ActivityDetails"> | string | null
    IsArchived?: BoolFilter<"ActivityDetails"> | boolean
    CreatedAt?: DateTimeFilter<"ActivityDetails"> | Date | string
    UpdatedAt?: DateTimeFilter<"ActivityDetails"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Activity?: XOR<ActivityRelationFilter, ActivityWhereInput>
  }, "ID">

  export type ActivityDetailsOrderByWithAggregationInput = {
    ID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Details?: SortOrder
    IsApproved?: SortOrder
    ReviewedBy?: SortOrderInput | SortOrder
    ReviewNote?: SortOrderInput | SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: ActivityDetailsCountOrderByAggregateInput
    _avg?: ActivityDetailsAvgOrderByAggregateInput
    _max?: ActivityDetailsMaxOrderByAggregateInput
    _min?: ActivityDetailsMinOrderByAggregateInput
    _sum?: ActivityDetailsSumOrderByAggregateInput
  }

  export type ActivityDetailsScalarWhereWithAggregatesInput = {
    AND?: ActivityDetailsScalarWhereWithAggregatesInput | ActivityDetailsScalarWhereWithAggregatesInput[]
    OR?: ActivityDetailsScalarWhereWithAggregatesInput[]
    NOT?: ActivityDetailsScalarWhereWithAggregatesInput | ActivityDetailsScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"ActivityDetails"> | number
    UserID?: StringWithAggregatesFilter<"ActivityDetails"> | string
    ActivityID?: IntWithAggregatesFilter<"ActivityDetails"> | number
    Details?: StringWithAggregatesFilter<"ActivityDetails"> | string
    IsApproved?: BoolWithAggregatesFilter<"ActivityDetails"> | boolean
    ReviewedBy?: StringNullableWithAggregatesFilter<"ActivityDetails"> | string | null
    ReviewNote?: StringNullableWithAggregatesFilter<"ActivityDetails"> | string | null
    IsArchived?: BoolWithAggregatesFilter<"ActivityDetails"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"ActivityDetails"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"ActivityDetails"> | Date | string
  }

  export type UserCreateInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Department: DepartmentCreateNestedOneWithoutUsersInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    ActivityResults?: ActivityResultsCreateNestedManyWithoutUserInput
    ActivityDetails?: ActivityDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    DepartmentID: string
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutUserInput
    ActivityDetails?: ActivityDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    ActivityResults?: ActivityResultsUpdateManyWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    DepartmentID: string
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    DepartmentID: string
    Name: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Users?: UserCreateNestedManyWithoutDepartmentInput
    ActivityResults?: ActivityResultsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    DepartmentID: string
    Name: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUpdateManyWithoutDepartmentNestedInput
    ActivityResults?: ActivityResultsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    DepartmentID: string
    Name: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    AdminID?: string
    AdminPass: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    User: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    AdminID?: string
    AdminPass: string
    UserID: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    AdminID?: StringFieldUpdateOperationsInput | string
    AdminPass?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    AdminID?: StringFieldUpdateOperationsInput | string
    AdminPass?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    AdminID?: string
    AdminPass: string
    UserID: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    AdminID?: StringFieldUpdateOperationsInput | string
    AdminPass?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    AdminID?: StringFieldUpdateOperationsInput | string
    AdminPass?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    Title: string
    Description: string
    StartDate: Date | string
    EndDate: Date | string
    Type: string
    Images: JsonNullValueInput | InputJsonValue
    Score: number
    Location?: string | null
    MaxParticipants?: number | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityResults?: ActivityResultsCreateNestedManyWithoutActivityInput
    ActivityDetails?: ActivityDetailsCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    ID?: number
    Title: string
    Description: string
    StartDate: Date | string
    EndDate: Date | string
    Type: string
    Images: JsonNullValueInput | InputJsonValue
    Score: number
    Location?: string | null
    MaxParticipants?: number | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutActivityInput
    ActivityDetails?: ActivityDetailsUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityResults?: ActivityResultsUpdateManyWithoutActivityNestedInput
    ActivityDetails?: ActivityDetailsUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutActivityNestedInput
    ActivityDetails?: ActivityDetailsUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    ID?: number
    Title: string
    Description: string
    StartDate: Date | string
    EndDate: Date | string
    Type: string
    Images: JsonNullValueInput | InputJsonValue
    Score: number
    Location?: string | null
    MaxParticipants?: number | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsCreateInput = {
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Department: DepartmentCreateNestedOneWithoutActivityResultsInput
    User: UserCreateNestedOneWithoutActivityResultsInput
    Activity: ActivityCreateNestedOneWithoutActivityResultsInput
  }

  export type ActivityResultsUncheckedCreateInput = {
    ID?: number
    DepartmentID: string
    UserID: string
    ActivityID: number
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsUpdateInput = {
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Department?: DepartmentUpdateOneRequiredWithoutActivityResultsNestedInput
    User?: UserUpdateOneRequiredWithoutActivityResultsNestedInput
    Activity?: ActivityUpdateOneRequiredWithoutActivityResultsNestedInput
  }

  export type ActivityResultsUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsCreateManyInput = {
    ID?: number
    DepartmentID: string
    UserID: string
    ActivityID: number
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsUpdateManyMutationInput = {
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailsCreateInput = {
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    User: UserCreateNestedOneWithoutActivityDetailsInput
    Activity: ActivityCreateNestedOneWithoutActivityDetailsInput
  }

  export type ActivityDetailsUncheckedCreateInput = {
    ID?: number
    UserID: string
    ActivityID: number
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityDetailsUpdateInput = {
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutActivityDetailsNestedInput
    Activity?: ActivityUpdateOneRequiredWithoutActivityDetailsNestedInput
  }

  export type ActivityDetailsUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailsCreateManyInput = {
    ID?: number
    UserID: string
    ActivityID: number
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityDetailsUpdateManyMutationInput = {
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailsUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DepartmentRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type ActivityResultsListRelationFilter = {
    every?: ActivityResultsWhereInput
    some?: ActivityResultsWhereInput
    none?: ActivityResultsWhereInput
  }

  export type ActivityDetailsListRelationFilter = {
    every?: ActivityDetailsWhereInput
    some?: ActivityDetailsWhereInput
    none?: ActivityDetailsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityResultsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    UserID?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    UserPassword?: SortOrder
    UserImage?: SortOrder
    DepartmentID?: SortOrder
    Role?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    UserID?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    UserPassword?: SortOrder
    UserImage?: SortOrder
    DepartmentID?: SortOrder
    Role?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    UserID?: SortOrder
    UserFirstName?: SortOrder
    UserLastName?: SortOrder
    UserPassword?: SortOrder
    UserImage?: SortOrder
    DepartmentID?: SortOrder
    Role?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    DepartmentID?: SortOrder
    Name?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    DepartmentID?: SortOrder
    Name?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    DepartmentID?: SortOrder
    Name?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    AdminID?: SortOrder
    AdminPass?: SortOrder
    UserID?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    AdminID?: SortOrder
    AdminPass?: SortOrder
    UserID?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    AdminID?: SortOrder
    AdminPass?: SortOrder
    UserID?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ActivityCountOrderByAggregateInput = {
    ID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Type?: SortOrder
    Images?: SortOrder
    Score?: SortOrder
    Location?: SortOrder
    MaxParticipants?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    ID?: SortOrder
    Score?: SortOrder
    MaxParticipants?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    ID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Type?: SortOrder
    Score?: SortOrder
    Location?: SortOrder
    MaxParticipants?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    ID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    Type?: SortOrder
    Score?: SortOrder
    Location?: SortOrder
    MaxParticipants?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    ID?: SortOrder
    Score?: SortOrder
    MaxParticipants?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ActivityRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type ActivityResultsCountOrderByAggregateInput = {
    ID?: SortOrder
    DepartmentID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Reservation?: SortOrder
    Status?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityResultsAvgOrderByAggregateInput = {
    ID?: SortOrder
    ActivityID?: SortOrder
  }

  export type ActivityResultsMaxOrderByAggregateInput = {
    ID?: SortOrder
    DepartmentID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Reservation?: SortOrder
    Status?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityResultsMinOrderByAggregateInput = {
    ID?: SortOrder
    DepartmentID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Reservation?: SortOrder
    Status?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityResultsSumOrderByAggregateInput = {
    ID?: SortOrder
    ActivityID?: SortOrder
  }

  export type ActivityDetailsCountOrderByAggregateInput = {
    ID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Details?: SortOrder
    IsApproved?: SortOrder
    ReviewedBy?: SortOrder
    ReviewNote?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityDetailsAvgOrderByAggregateInput = {
    ID?: SortOrder
    ActivityID?: SortOrder
  }

  export type ActivityDetailsMaxOrderByAggregateInput = {
    ID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Details?: SortOrder
    IsApproved?: SortOrder
    ReviewedBy?: SortOrder
    ReviewNote?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityDetailsMinOrderByAggregateInput = {
    ID?: SortOrder
    UserID?: SortOrder
    ActivityID?: SortOrder
    Details?: SortOrder
    IsApproved?: SortOrder
    ReviewedBy?: SortOrder
    ReviewNote?: SortOrder
    IsArchived?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type ActivityDetailsSumOrderByAggregateInput = {
    ID?: SortOrder
    ActivityID?: SortOrder
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type ActivityResultsCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityResultsCreateWithoutUserInput, ActivityResultsUncheckedCreateWithoutUserInput> | ActivityResultsCreateWithoutUserInput[] | ActivityResultsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutUserInput | ActivityResultsCreateOrConnectWithoutUserInput[]
    createMany?: ActivityResultsCreateManyUserInputEnvelope
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
  }

  export type ActivityDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityDetailsCreateWithoutUserInput, ActivityDetailsUncheckedCreateWithoutUserInput> | ActivityDetailsCreateWithoutUserInput[] | ActivityDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutUserInput | ActivityDetailsCreateOrConnectWithoutUserInput[]
    createMany?: ActivityDetailsCreateManyUserInputEnvelope
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type ActivityResultsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityResultsCreateWithoutUserInput, ActivityResultsUncheckedCreateWithoutUserInput> | ActivityResultsCreateWithoutUserInput[] | ActivityResultsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutUserInput | ActivityResultsCreateOrConnectWithoutUserInput[]
    createMany?: ActivityResultsCreateManyUserInputEnvelope
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
  }

  export type ActivityDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityDetailsCreateWithoutUserInput, ActivityDetailsUncheckedCreateWithoutUserInput> | ActivityDetailsCreateWithoutUserInput[] | ActivityDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutUserInput | ActivityDetailsCreateOrConnectWithoutUserInput[]
    createMany?: ActivityDetailsCreateManyUserInputEnvelope
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DepartmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ActivityResultsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityResultsCreateWithoutUserInput, ActivityResultsUncheckedCreateWithoutUserInput> | ActivityResultsCreateWithoutUserInput[] | ActivityResultsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutUserInput | ActivityResultsCreateOrConnectWithoutUserInput[]
    upsert?: ActivityResultsUpsertWithWhereUniqueWithoutUserInput | ActivityResultsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityResultsCreateManyUserInputEnvelope
    set?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    disconnect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    delete?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    update?: ActivityResultsUpdateWithWhereUniqueWithoutUserInput | ActivityResultsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityResultsUpdateManyWithWhereWithoutUserInput | ActivityResultsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
  }

  export type ActivityDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityDetailsCreateWithoutUserInput, ActivityDetailsUncheckedCreateWithoutUserInput> | ActivityDetailsCreateWithoutUserInput[] | ActivityDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutUserInput | ActivityDetailsCreateOrConnectWithoutUserInput[]
    upsert?: ActivityDetailsUpsertWithWhereUniqueWithoutUserInput | ActivityDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityDetailsCreateManyUserInputEnvelope
    set?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    disconnect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    delete?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    update?: ActivityDetailsUpdateWithWhereUniqueWithoutUserInput | ActivityDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityDetailsUpdateManyWithWhereWithoutUserInput | ActivityDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityDetailsScalarWhereInput | ActivityDetailsScalarWhereInput[]
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ActivityResultsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityResultsCreateWithoutUserInput, ActivityResultsUncheckedCreateWithoutUserInput> | ActivityResultsCreateWithoutUserInput[] | ActivityResultsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutUserInput | ActivityResultsCreateOrConnectWithoutUserInput[]
    upsert?: ActivityResultsUpsertWithWhereUniqueWithoutUserInput | ActivityResultsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityResultsCreateManyUserInputEnvelope
    set?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    disconnect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    delete?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    update?: ActivityResultsUpdateWithWhereUniqueWithoutUserInput | ActivityResultsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityResultsUpdateManyWithWhereWithoutUserInput | ActivityResultsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
  }

  export type ActivityDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityDetailsCreateWithoutUserInput, ActivityDetailsUncheckedCreateWithoutUserInput> | ActivityDetailsCreateWithoutUserInput[] | ActivityDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutUserInput | ActivityDetailsCreateOrConnectWithoutUserInput[]
    upsert?: ActivityDetailsUpsertWithWhereUniqueWithoutUserInput | ActivityDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityDetailsCreateManyUserInputEnvelope
    set?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    disconnect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    delete?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    update?: ActivityDetailsUpdateWithWhereUniqueWithoutUserInput | ActivityDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityDetailsUpdateManyWithWhereWithoutUserInput | ActivityDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityDetailsScalarWhereInput | ActivityDetailsScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ActivityResultsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ActivityResultsCreateWithoutDepartmentInput, ActivityResultsUncheckedCreateWithoutDepartmentInput> | ActivityResultsCreateWithoutDepartmentInput[] | ActivityResultsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutDepartmentInput | ActivityResultsCreateOrConnectWithoutDepartmentInput[]
    createMany?: ActivityResultsCreateManyDepartmentInputEnvelope
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ActivityResultsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ActivityResultsCreateWithoutDepartmentInput, ActivityResultsUncheckedCreateWithoutDepartmentInput> | ActivityResultsCreateWithoutDepartmentInput[] | ActivityResultsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutDepartmentInput | ActivityResultsCreateOrConnectWithoutDepartmentInput[]
    createMany?: ActivityResultsCreateManyDepartmentInputEnvelope
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivityResultsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ActivityResultsCreateWithoutDepartmentInput, ActivityResultsUncheckedCreateWithoutDepartmentInput> | ActivityResultsCreateWithoutDepartmentInput[] | ActivityResultsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutDepartmentInput | ActivityResultsCreateOrConnectWithoutDepartmentInput[]
    upsert?: ActivityResultsUpsertWithWhereUniqueWithoutDepartmentInput | ActivityResultsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ActivityResultsCreateManyDepartmentInputEnvelope
    set?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    disconnect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    delete?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    update?: ActivityResultsUpdateWithWhereUniqueWithoutDepartmentInput | ActivityResultsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ActivityResultsUpdateManyWithWhereWithoutDepartmentInput | ActivityResultsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivityResultsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ActivityResultsCreateWithoutDepartmentInput, ActivityResultsUncheckedCreateWithoutDepartmentInput> | ActivityResultsCreateWithoutDepartmentInput[] | ActivityResultsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutDepartmentInput | ActivityResultsCreateOrConnectWithoutDepartmentInput[]
    upsert?: ActivityResultsUpsertWithWhereUniqueWithoutDepartmentInput | ActivityResultsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ActivityResultsCreateManyDepartmentInputEnvelope
    set?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    disconnect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    delete?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    update?: ActivityResultsUpdateWithWhereUniqueWithoutDepartmentInput | ActivityResultsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ActivityResultsUpdateManyWithWhereWithoutDepartmentInput | ActivityResultsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type ActivityResultsCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityResultsCreateWithoutActivityInput, ActivityResultsUncheckedCreateWithoutActivityInput> | ActivityResultsCreateWithoutActivityInput[] | ActivityResultsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutActivityInput | ActivityResultsCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityResultsCreateManyActivityInputEnvelope
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
  }

  export type ActivityDetailsCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDetailsCreateWithoutActivityInput, ActivityDetailsUncheckedCreateWithoutActivityInput> | ActivityDetailsCreateWithoutActivityInput[] | ActivityDetailsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutActivityInput | ActivityDetailsCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDetailsCreateManyActivityInputEnvelope
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
  }

  export type ActivityResultsUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityResultsCreateWithoutActivityInput, ActivityResultsUncheckedCreateWithoutActivityInput> | ActivityResultsCreateWithoutActivityInput[] | ActivityResultsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutActivityInput | ActivityResultsCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityResultsCreateManyActivityInputEnvelope
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
  }

  export type ActivityDetailsUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDetailsCreateWithoutActivityInput, ActivityDetailsUncheckedCreateWithoutActivityInput> | ActivityDetailsCreateWithoutActivityInput[] | ActivityDetailsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutActivityInput | ActivityDetailsCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDetailsCreateManyActivityInputEnvelope
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActivityResultsUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityResultsCreateWithoutActivityInput, ActivityResultsUncheckedCreateWithoutActivityInput> | ActivityResultsCreateWithoutActivityInput[] | ActivityResultsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutActivityInput | ActivityResultsCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityResultsUpsertWithWhereUniqueWithoutActivityInput | ActivityResultsUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityResultsCreateManyActivityInputEnvelope
    set?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    disconnect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    delete?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    update?: ActivityResultsUpdateWithWhereUniqueWithoutActivityInput | ActivityResultsUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityResultsUpdateManyWithWhereWithoutActivityInput | ActivityResultsUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
  }

  export type ActivityDetailsUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDetailsCreateWithoutActivityInput, ActivityDetailsUncheckedCreateWithoutActivityInput> | ActivityDetailsCreateWithoutActivityInput[] | ActivityDetailsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutActivityInput | ActivityDetailsCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDetailsUpsertWithWhereUniqueWithoutActivityInput | ActivityDetailsUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDetailsCreateManyActivityInputEnvelope
    set?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    disconnect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    delete?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    update?: ActivityDetailsUpdateWithWhereUniqueWithoutActivityInput | ActivityDetailsUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDetailsUpdateManyWithWhereWithoutActivityInput | ActivityDetailsUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDetailsScalarWhereInput | ActivityDetailsScalarWhereInput[]
  }

  export type ActivityResultsUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityResultsCreateWithoutActivityInput, ActivityResultsUncheckedCreateWithoutActivityInput> | ActivityResultsCreateWithoutActivityInput[] | ActivityResultsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityResultsCreateOrConnectWithoutActivityInput | ActivityResultsCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityResultsUpsertWithWhereUniqueWithoutActivityInput | ActivityResultsUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityResultsCreateManyActivityInputEnvelope
    set?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    disconnect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    delete?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    connect?: ActivityResultsWhereUniqueInput | ActivityResultsWhereUniqueInput[]
    update?: ActivityResultsUpdateWithWhereUniqueWithoutActivityInput | ActivityResultsUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityResultsUpdateManyWithWhereWithoutActivityInput | ActivityResultsUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
  }

  export type ActivityDetailsUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDetailsCreateWithoutActivityInput, ActivityDetailsUncheckedCreateWithoutActivityInput> | ActivityDetailsCreateWithoutActivityInput[] | ActivityDetailsUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDetailsCreateOrConnectWithoutActivityInput | ActivityDetailsCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDetailsUpsertWithWhereUniqueWithoutActivityInput | ActivityDetailsUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDetailsCreateManyActivityInputEnvelope
    set?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    disconnect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    delete?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    connect?: ActivityDetailsWhereUniqueInput | ActivityDetailsWhereUniqueInput[]
    update?: ActivityDetailsUpdateWithWhereUniqueWithoutActivityInput | ActivityDetailsUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDetailsUpdateManyWithWhereWithoutActivityInput | ActivityDetailsUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDetailsScalarWhereInput | ActivityDetailsScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutActivityResultsInput = {
    create?: XOR<DepartmentCreateWithoutActivityResultsInput, DepartmentUncheckedCreateWithoutActivityResultsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutActivityResultsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivityResultsInput = {
    create?: XOR<UserCreateWithoutActivityResultsInput, UserUncheckedCreateWithoutActivityResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityResultsInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutActivityResultsInput = {
    create?: XOR<ActivityCreateWithoutActivityResultsInput, ActivityUncheckedCreateWithoutActivityResultsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityResultsInput
    connect?: ActivityWhereUniqueInput
  }

  export type DepartmentUpdateOneRequiredWithoutActivityResultsNestedInput = {
    create?: XOR<DepartmentCreateWithoutActivityResultsInput, DepartmentUncheckedCreateWithoutActivityResultsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutActivityResultsInput
    upsert?: DepartmentUpsertWithoutActivityResultsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutActivityResultsInput, DepartmentUpdateWithoutActivityResultsInput>, DepartmentUncheckedUpdateWithoutActivityResultsInput>
  }

  export type UserUpdateOneRequiredWithoutActivityResultsNestedInput = {
    create?: XOR<UserCreateWithoutActivityResultsInput, UserUncheckedCreateWithoutActivityResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityResultsInput
    upsert?: UserUpsertWithoutActivityResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityResultsInput, UserUpdateWithoutActivityResultsInput>, UserUncheckedUpdateWithoutActivityResultsInput>
  }

  export type ActivityUpdateOneRequiredWithoutActivityResultsNestedInput = {
    create?: XOR<ActivityCreateWithoutActivityResultsInput, ActivityUncheckedCreateWithoutActivityResultsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityResultsInput
    upsert?: ActivityUpsertWithoutActivityResultsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutActivityResultsInput, ActivityUpdateWithoutActivityResultsInput>, ActivityUncheckedUpdateWithoutActivityResultsInput>
  }

  export type UserCreateNestedOneWithoutActivityDetailsInput = {
    create?: XOR<UserCreateWithoutActivityDetailsInput, UserUncheckedCreateWithoutActivityDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutActivityDetailsInput = {
    create?: XOR<ActivityCreateWithoutActivityDetailsInput, ActivityUncheckedCreateWithoutActivityDetailsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityDetailsInput
    connect?: ActivityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityDetailsNestedInput = {
    create?: XOR<UserCreateWithoutActivityDetailsInput, UserUncheckedCreateWithoutActivityDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityDetailsInput
    upsert?: UserUpsertWithoutActivityDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityDetailsInput, UserUpdateWithoutActivityDetailsInput>, UserUncheckedUpdateWithoutActivityDetailsInput>
  }

  export type ActivityUpdateOneRequiredWithoutActivityDetailsNestedInput = {
    create?: XOR<ActivityCreateWithoutActivityDetailsInput, ActivityUncheckedCreateWithoutActivityDetailsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutActivityDetailsInput
    upsert?: ActivityUpsertWithoutActivityDetailsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutActivityDetailsInput, ActivityUpdateWithoutActivityDetailsInput>, ActivityUncheckedUpdateWithoutActivityDetailsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DepartmentCreateWithoutUsersInput = {
    DepartmentID: string
    Name: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityResults?: ActivityResultsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    DepartmentID: string
    Name: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type AdminCreateWithoutUserInput = {
    AdminID?: string
    AdminPass: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    AdminID?: string
    AdminPass: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type ActivityResultsCreateWithoutUserInput = {
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Department: DepartmentCreateNestedOneWithoutActivityResultsInput
    Activity: ActivityCreateNestedOneWithoutActivityResultsInput
  }

  export type ActivityResultsUncheckedCreateWithoutUserInput = {
    ID?: number
    DepartmentID: string
    ActivityID: number
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsCreateOrConnectWithoutUserInput = {
    where: ActivityResultsWhereUniqueInput
    create: XOR<ActivityResultsCreateWithoutUserInput, ActivityResultsUncheckedCreateWithoutUserInput>
  }

  export type ActivityResultsCreateManyUserInputEnvelope = {
    data: ActivityResultsCreateManyUserInput | ActivityResultsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityDetailsCreateWithoutUserInput = {
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Activity: ActivityCreateNestedOneWithoutActivityDetailsInput
  }

  export type ActivityDetailsUncheckedCreateWithoutUserInput = {
    ID?: number
    ActivityID: number
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityDetailsCreateOrConnectWithoutUserInput = {
    where: ActivityDetailsWhereUniqueInput
    create: XOR<ActivityDetailsCreateWithoutUserInput, ActivityDetailsUncheckedCreateWithoutUserInput>
  }

  export type ActivityDetailsCreateManyUserInputEnvelope = {
    data: ActivityDetailsCreateManyUserInput | ActivityDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityResults?: ActivityResultsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    AdminID?: StringFieldUpdateOperationsInput | string
    AdminPass?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    AdminID?: StringFieldUpdateOperationsInput | string
    AdminPass?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityResultsWhereUniqueInput
    update: XOR<ActivityResultsUpdateWithoutUserInput, ActivityResultsUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityResultsCreateWithoutUserInput, ActivityResultsUncheckedCreateWithoutUserInput>
  }

  export type ActivityResultsUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityResultsWhereUniqueInput
    data: XOR<ActivityResultsUpdateWithoutUserInput, ActivityResultsUncheckedUpdateWithoutUserInput>
  }

  export type ActivityResultsUpdateManyWithWhereWithoutUserInput = {
    where: ActivityResultsScalarWhereInput
    data: XOR<ActivityResultsUpdateManyMutationInput, ActivityResultsUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityResultsScalarWhereInput = {
    AND?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
    OR?: ActivityResultsScalarWhereInput[]
    NOT?: ActivityResultsScalarWhereInput | ActivityResultsScalarWhereInput[]
    ID?: IntFilter<"ActivityResults"> | number
    DepartmentID?: StringFilter<"ActivityResults"> | string
    UserID?: StringFilter<"ActivityResults"> | string
    ActivityID?: IntFilter<"ActivityResults"> | number
    Reservation?: BoolFilter<"ActivityResults"> | boolean
    Status?: StringFilter<"ActivityResults"> | string
    IsArchived?: BoolFilter<"ActivityResults"> | boolean
    CreatedAt?: DateTimeFilter<"ActivityResults"> | Date | string
    UpdatedAt?: DateTimeFilter<"ActivityResults"> | Date | string
  }

  export type ActivityDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityDetailsWhereUniqueInput
    update: XOR<ActivityDetailsUpdateWithoutUserInput, ActivityDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityDetailsCreateWithoutUserInput, ActivityDetailsUncheckedCreateWithoutUserInput>
  }

  export type ActivityDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityDetailsWhereUniqueInput
    data: XOR<ActivityDetailsUpdateWithoutUserInput, ActivityDetailsUncheckedUpdateWithoutUserInput>
  }

  export type ActivityDetailsUpdateManyWithWhereWithoutUserInput = {
    where: ActivityDetailsScalarWhereInput
    data: XOR<ActivityDetailsUpdateManyMutationInput, ActivityDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityDetailsScalarWhereInput = {
    AND?: ActivityDetailsScalarWhereInput | ActivityDetailsScalarWhereInput[]
    OR?: ActivityDetailsScalarWhereInput[]
    NOT?: ActivityDetailsScalarWhereInput | ActivityDetailsScalarWhereInput[]
    ID?: IntFilter<"ActivityDetails"> | number
    UserID?: StringFilter<"ActivityDetails"> | string
    ActivityID?: IntFilter<"ActivityDetails"> | number
    Details?: StringFilter<"ActivityDetails"> | string
    IsApproved?: BoolFilter<"ActivityDetails"> | boolean
    ReviewedBy?: StringNullableFilter<"ActivityDetails"> | string | null
    ReviewNote?: StringNullableFilter<"ActivityDetails"> | string | null
    IsArchived?: BoolFilter<"ActivityDetails"> | boolean
    CreatedAt?: DateTimeFilter<"ActivityDetails"> | Date | string
    UpdatedAt?: DateTimeFilter<"ActivityDetails"> | Date | string
  }

  export type UserCreateWithoutDepartmentInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Admin?: AdminCreateNestedOneWithoutUserInput
    ActivityResults?: ActivityResultsCreateNestedManyWithoutUserInput
    ActivityDetails?: ActivityDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutUserInput
    ActivityDetails?: ActivityDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type ActivityResultsCreateWithoutDepartmentInput = {
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    User: UserCreateNestedOneWithoutActivityResultsInput
    Activity: ActivityCreateNestedOneWithoutActivityResultsInput
  }

  export type ActivityResultsUncheckedCreateWithoutDepartmentInput = {
    ID?: number
    UserID: string
    ActivityID: number
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsCreateOrConnectWithoutDepartmentInput = {
    where: ActivityResultsWhereUniqueInput
    create: XOR<ActivityResultsCreateWithoutDepartmentInput, ActivityResultsUncheckedCreateWithoutDepartmentInput>
  }

  export type ActivityResultsCreateManyDepartmentInputEnvelope = {
    data: ActivityResultsCreateManyDepartmentInput | ActivityResultsCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    UserID?: StringFilter<"User"> | string
    UserFirstName?: StringFilter<"User"> | string
    UserLastName?: StringFilter<"User"> | string
    UserPassword?: StringFilter<"User"> | string
    UserImage?: StringNullableFilter<"User"> | string | null
    DepartmentID?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    IsArchived?: BoolFilter<"User"> | boolean
    CreatedAt?: DateTimeFilter<"User"> | Date | string
    UpdatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ActivityResultsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ActivityResultsWhereUniqueInput
    update: XOR<ActivityResultsUpdateWithoutDepartmentInput, ActivityResultsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<ActivityResultsCreateWithoutDepartmentInput, ActivityResultsUncheckedCreateWithoutDepartmentInput>
  }

  export type ActivityResultsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ActivityResultsWhereUniqueInput
    data: XOR<ActivityResultsUpdateWithoutDepartmentInput, ActivityResultsUncheckedUpdateWithoutDepartmentInput>
  }

  export type ActivityResultsUpdateManyWithWhereWithoutDepartmentInput = {
    where: ActivityResultsScalarWhereInput
    data: XOR<ActivityResultsUpdateManyMutationInput, ActivityResultsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserCreateWithoutAdminInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Department: DepartmentCreateNestedOneWithoutUsersInput
    ActivityResults?: ActivityResultsCreateNestedManyWithoutUserInput
    ActivityDetails?: ActivityDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    DepartmentID: string
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutUserInput
    ActivityDetails?: ActivityDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    ActivityResults?: ActivityResultsUpdateManyWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityResultsCreateWithoutActivityInput = {
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Department: DepartmentCreateNestedOneWithoutActivityResultsInput
    User: UserCreateNestedOneWithoutActivityResultsInput
  }

  export type ActivityResultsUncheckedCreateWithoutActivityInput = {
    ID?: number
    DepartmentID: string
    UserID: string
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsCreateOrConnectWithoutActivityInput = {
    where: ActivityResultsWhereUniqueInput
    create: XOR<ActivityResultsCreateWithoutActivityInput, ActivityResultsUncheckedCreateWithoutActivityInput>
  }

  export type ActivityResultsCreateManyActivityInputEnvelope = {
    data: ActivityResultsCreateManyActivityInput | ActivityResultsCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type ActivityDetailsCreateWithoutActivityInput = {
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    User: UserCreateNestedOneWithoutActivityDetailsInput
  }

  export type ActivityDetailsUncheckedCreateWithoutActivityInput = {
    ID?: number
    UserID: string
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityDetailsCreateOrConnectWithoutActivityInput = {
    where: ActivityDetailsWhereUniqueInput
    create: XOR<ActivityDetailsCreateWithoutActivityInput, ActivityDetailsUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDetailsCreateManyActivityInputEnvelope = {
    data: ActivityDetailsCreateManyActivityInput | ActivityDetailsCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type ActivityResultsUpsertWithWhereUniqueWithoutActivityInput = {
    where: ActivityResultsWhereUniqueInput
    update: XOR<ActivityResultsUpdateWithoutActivityInput, ActivityResultsUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityResultsCreateWithoutActivityInput, ActivityResultsUncheckedCreateWithoutActivityInput>
  }

  export type ActivityResultsUpdateWithWhereUniqueWithoutActivityInput = {
    where: ActivityResultsWhereUniqueInput
    data: XOR<ActivityResultsUpdateWithoutActivityInput, ActivityResultsUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityResultsUpdateManyWithWhereWithoutActivityInput = {
    where: ActivityResultsScalarWhereInput
    data: XOR<ActivityResultsUpdateManyMutationInput, ActivityResultsUncheckedUpdateManyWithoutActivityInput>
  }

  export type ActivityDetailsUpsertWithWhereUniqueWithoutActivityInput = {
    where: ActivityDetailsWhereUniqueInput
    update: XOR<ActivityDetailsUpdateWithoutActivityInput, ActivityDetailsUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityDetailsCreateWithoutActivityInput, ActivityDetailsUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDetailsUpdateWithWhereUniqueWithoutActivityInput = {
    where: ActivityDetailsWhereUniqueInput
    data: XOR<ActivityDetailsUpdateWithoutActivityInput, ActivityDetailsUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityDetailsUpdateManyWithWhereWithoutActivityInput = {
    where: ActivityDetailsScalarWhereInput
    data: XOR<ActivityDetailsUpdateManyMutationInput, ActivityDetailsUncheckedUpdateManyWithoutActivityInput>
  }

  export type DepartmentCreateWithoutActivityResultsInput = {
    DepartmentID: string
    Name: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutActivityResultsInput = {
    DepartmentID: string
    Name: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutActivityResultsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutActivityResultsInput, DepartmentUncheckedCreateWithoutActivityResultsInput>
  }

  export type UserCreateWithoutActivityResultsInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Department: DepartmentCreateNestedOneWithoutUsersInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    ActivityDetails?: ActivityDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityResultsInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    DepartmentID: string
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    ActivityDetails?: ActivityDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityResultsInput, UserUncheckedCreateWithoutActivityResultsInput>
  }

  export type ActivityCreateWithoutActivityResultsInput = {
    Title: string
    Description: string
    StartDate: Date | string
    EndDate: Date | string
    Type: string
    Images: JsonNullValueInput | InputJsonValue
    Score: number
    Location?: string | null
    MaxParticipants?: number | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityDetails?: ActivityDetailsCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutActivityResultsInput = {
    ID?: number
    Title: string
    Description: string
    StartDate: Date | string
    EndDate: Date | string
    Type: string
    Images: JsonNullValueInput | InputJsonValue
    Score: number
    Location?: string | null
    MaxParticipants?: number | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityDetails?: ActivityDetailsUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutActivityResultsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutActivityResultsInput, ActivityUncheckedCreateWithoutActivityResultsInput>
  }

  export type DepartmentUpsertWithoutActivityResultsInput = {
    update: XOR<DepartmentUpdateWithoutActivityResultsInput, DepartmentUncheckedUpdateWithoutActivityResultsInput>
    create: XOR<DepartmentCreateWithoutActivityResultsInput, DepartmentUncheckedCreateWithoutActivityResultsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutActivityResultsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutActivityResultsInput, DepartmentUncheckedUpdateWithoutActivityResultsInput>
  }

  export type DepartmentUpdateWithoutActivityResultsInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutActivityResultsInput = {
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type UserUpsertWithoutActivityResultsInput = {
    update: XOR<UserUpdateWithoutActivityResultsInput, UserUncheckedUpdateWithoutActivityResultsInput>
    create: XOR<UserCreateWithoutActivityResultsInput, UserUncheckedCreateWithoutActivityResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityResultsInput, UserUncheckedUpdateWithoutActivityResultsInput>
  }

  export type UserUpdateWithoutActivityResultsInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityResultsInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityUpsertWithoutActivityResultsInput = {
    update: XOR<ActivityUpdateWithoutActivityResultsInput, ActivityUncheckedUpdateWithoutActivityResultsInput>
    create: XOR<ActivityCreateWithoutActivityResultsInput, ActivityUncheckedCreateWithoutActivityResultsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutActivityResultsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutActivityResultsInput, ActivityUncheckedUpdateWithoutActivityResultsInput>
  }

  export type ActivityUpdateWithoutActivityResultsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityDetails?: ActivityDetailsUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutActivityResultsInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityDetails?: ActivityDetailsUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type UserCreateWithoutActivityDetailsInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Department: DepartmentCreateNestedOneWithoutUsersInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    ActivityResults?: ActivityResultsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityDetailsInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    DepartmentID: string
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityDetailsInput, UserUncheckedCreateWithoutActivityDetailsInput>
  }

  export type ActivityCreateWithoutActivityDetailsInput = {
    Title: string
    Description: string
    StartDate: Date | string
    EndDate: Date | string
    Type: string
    Images: JsonNullValueInput | InputJsonValue
    Score: number
    Location?: string | null
    MaxParticipants?: number | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityResults?: ActivityResultsCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutActivityDetailsInput = {
    ID?: number
    Title: string
    Description: string
    StartDate: Date | string
    EndDate: Date | string
    Type: string
    Images: JsonNullValueInput | InputJsonValue
    Score: number
    Location?: string | null
    MaxParticipants?: number | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    ActivityResults?: ActivityResultsUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutActivityDetailsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutActivityDetailsInput, ActivityUncheckedCreateWithoutActivityDetailsInput>
  }

  export type UserUpsertWithoutActivityDetailsInput = {
    update: XOR<UserUpdateWithoutActivityDetailsInput, UserUncheckedUpdateWithoutActivityDetailsInput>
    create: XOR<UserCreateWithoutActivityDetailsInput, UserUncheckedCreateWithoutActivityDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityDetailsInput, UserUncheckedUpdateWithoutActivityDetailsInput>
  }

  export type UserUpdateWithoutActivityDetailsInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Department?: DepartmentUpdateOneRequiredWithoutUsersNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    ActivityResults?: ActivityResultsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityDetailsInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityUpsertWithoutActivityDetailsInput = {
    update: XOR<ActivityUpdateWithoutActivityDetailsInput, ActivityUncheckedUpdateWithoutActivityDetailsInput>
    create: XOR<ActivityCreateWithoutActivityDetailsInput, ActivityUncheckedCreateWithoutActivityDetailsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutActivityDetailsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutActivityDetailsInput, ActivityUncheckedUpdateWithoutActivityDetailsInput>
  }

  export type ActivityUpdateWithoutActivityDetailsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityResults?: ActivityResultsUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutActivityDetailsInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Type?: StringFieldUpdateOperationsInput | string
    Images?: JsonNullValueInput | InputJsonValue
    Score?: IntFieldUpdateOperationsInput | number
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    MaxParticipants?: NullableIntFieldUpdateOperationsInput | number | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityResultsCreateManyUserInput = {
    ID?: number
    DepartmentID: string
    ActivityID: number
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityDetailsCreateManyUserInput = {
    ID?: number
    ActivityID: number
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsUpdateWithoutUserInput = {
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Department?: DepartmentUpdateOneRequiredWithoutActivityResultsNestedInput
    Activity?: ActivityUpdateOneRequiredWithoutActivityResultsNestedInput
  }

  export type ActivityResultsUncheckedUpdateWithoutUserInput = {
    ID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsUncheckedUpdateManyWithoutUserInput = {
    ID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailsUpdateWithoutUserInput = {
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Activity?: ActivityUpdateOneRequiredWithoutActivityDetailsNestedInput
  }

  export type ActivityDetailsUncheckedUpdateWithoutUserInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ActivityID?: IntFieldUpdateOperationsInput | number
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailsUncheckedUpdateManyWithoutUserInput = {
    ID?: IntFieldUpdateOperationsInput | number
    ActivityID?: IntFieldUpdateOperationsInput | number
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyDepartmentInput = {
    UserID?: string
    UserFirstName: string
    UserLastName: string
    UserPassword: string
    UserImage?: string | null
    Role?: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsCreateManyDepartmentInput = {
    ID?: number
    UserID: string
    ActivityID: number
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type UserUpdateWithoutDepartmentInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUpdateOneWithoutUserNestedInput
    ActivityResults?: ActivityResultsUpdateManyWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    ActivityResults?: ActivityResultsUncheckedUpdateManyWithoutUserNestedInput
    ActivityDetails?: ActivityDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    UserFirstName?: StringFieldUpdateOperationsInput | string
    UserLastName?: StringFieldUpdateOperationsInput | string
    UserPassword?: StringFieldUpdateOperationsInput | string
    UserImage?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsUpdateWithoutDepartmentInput = {
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutActivityResultsNestedInput
    Activity?: ActivityUpdateOneRequiredWithoutActivityResultsNestedInput
  }

  export type ActivityResultsUncheckedUpdateWithoutDepartmentInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsUncheckedUpdateManyWithoutDepartmentInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    ActivityID?: IntFieldUpdateOperationsInput | number
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsCreateManyActivityInput = {
    ID?: number
    DepartmentID: string
    UserID: string
    Reservation: boolean
    Status: string
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityDetailsCreateManyActivityInput = {
    ID?: number
    UserID: string
    Details: string
    IsApproved?: boolean
    ReviewedBy?: string | null
    ReviewNote?: string | null
    IsArchived?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ActivityResultsUpdateWithoutActivityInput = {
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Department?: DepartmentUpdateOneRequiredWithoutActivityResultsNestedInput
    User?: UserUpdateOneRequiredWithoutActivityResultsNestedInput
  }

  export type ActivityResultsUncheckedUpdateWithoutActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityResultsUncheckedUpdateManyWithoutActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: StringFieldUpdateOperationsInput | string
    UserID?: StringFieldUpdateOperationsInput | string
    Reservation?: BoolFieldUpdateOperationsInput | boolean
    Status?: StringFieldUpdateOperationsInput | string
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailsUpdateWithoutActivityInput = {
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutActivityDetailsNestedInput
  }

  export type ActivityDetailsUncheckedUpdateWithoutActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDetailsUncheckedUpdateManyWithoutActivityInput = {
    ID?: IntFieldUpdateOperationsInput | number
    UserID?: StringFieldUpdateOperationsInput | string
    Details?: StringFieldUpdateOperationsInput | string
    IsApproved?: BoolFieldUpdateOperationsInput | boolean
    ReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ReviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    IsArchived?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
     */
    export type DepartmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityCountOutputTypeDefaultArgs instead
     */
    export type ActivityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentDefaultArgs instead
     */
    export type DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityDefaultArgs instead
     */
    export type ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityResultsDefaultArgs instead
     */
    export type ActivityResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityResultsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityDetailsDefaultArgs instead
     */
    export type ActivityDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityDetailsDefaultArgs<ExtArgs>

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