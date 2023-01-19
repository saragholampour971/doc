/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateCommentDto {
  /** @maxLength 1500 */
  body?: string | null;
  /** @format double */
  rating: number;
  /** @minLength 1 */
  doctorId: string;
}

/** @format int32 */
export type Gender = 1 | 2 | 3 | 4;

export interface GetAllCategoriesDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface GetAllCitiesDto {
  cityName?: string | null;
}

export interface GetAllCommentsDto {
  /** @format int64 */
  id?: number;
  body?: string | null;
  authorFirstName?: string | null;
  authorLastName?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** @format double */
  rating?: number;
}

export interface GetAllCommentsDtoPageResult {
  elements?: GetAllCommentsDto[] | null;
  /** @format int32 */
  totalElements?: number;
}

export interface GetAllDoctorByBestRatingDto {
  doctorId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  categoryTitle?: string | null;
  address?: string | null;
  city?: string | null;
  /** @format double */
  rating?: number | null;
}

export interface GetAllDoctorByBestRatingForTheSearchBarDto {
  address?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  doctorId?: string | null;
  categoryTitle?: string | null;
  /** @format double */
  rating?: number | null;
  city?: string | null;
  insurances?: string[] | null;
}

export interface GetAllDoctorByBestRatingForTheSearchBarDtoPageResult {
  elements?: GetAllDoctorByBestRatingForTheSearchBarDto[] | null;
  /** @format int32 */
  totalElements?: number;
}

export interface GetAllInsurancesDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface GetCategoryDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface GetDoctorInfoDto {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  categotyTitle?: string | null;
  address?: string | null;
  city?: string | null;
  /** @format double */
  rating?: number | null;
  insurances?: string[] | null;
}

export interface RegisterDoctorDto {
  /**
   * @minLength 1
   * @maxLength 150
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 150
   */
  lastName: string;
  /** @maxLength 1500 */
  address?: string | null;
  /** @format date-time */
  birthDate?: string;
  /**
   * @minLength 1
   * @maxLength 10
   */
  nationalCode: string;
  gender: Gender;
  /** @format int32 */
  categoryId?: number;
  /**
   * @minLength 1
   * @maxLength 150
   */
  email: string;
  /**
   * @minLength 1
   * @maxLength 11
   */
  mobileNumber: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  password: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  confirmPassword: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  city: string;
  /** @maxLength 1000 */
  shortDescription?: string | null;
  /** @uniqueItems true */
  insuranceIds?: number[] | null;
}

export interface RegisterDoctorWorkPlaneDto {
  /** @format double */
  pricePerSession: number;
  /** @format date-time */
  duration: string;
  /** @format date-time */
  startOfWorkingHour: string;
  /** @format date-time */
  endOfWorkingHour: string;
  /** @format date-time */
  breakAfterEverySession: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Appiontment Api
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  login = {
    /**
     * No description
     *
     * @tags Account
     * @name LoginCreate
     * @request POST:/login
     * @secure
     */
    loginCreate: (
      query: {
        /** @maxLength 50 */
        UserName: string;
        /** @maxLength 50 */
        Password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/login`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  register = {
    /**
     * No description
     *
     * @tags Account
     * @name RegisterCreate
     * @request POST:/register
     * @secure
     */
    registerCreate: (
      query: {
        /**
         * @format email
         * @maxLength 250
         */
        Username: string;
        /** @maxLength 255 */
        Password: string;
        /** @maxLength 255 */
        ConfirmPassword: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/register`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  addBlog = {
    /**
     * No description
     *
     * @tags Blogs
     * @name AddBlogCreate
     * @request POST:/add-blog
     * @secure
     */
    addBlogCreate: (
      query: {
        /** @maxLength 100 */
        Title: string;
        /** @maxLength 1500 */
        Body: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/add-blog`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),
  };
  createCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name CreateCategoryCreate
     * @request POST:/create-category
     * @secure
     */
    createCategoryCreate: (
      query: {
        /** @maxLength 150 */
        Title: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/create-category`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),
  };
  getAllCategories = {
    /**
     * No description
     *
     * @tags Category
     * @name GetAllCategoriesList
     * @request GET:/get-all-categories
     * @secure
     */
    getAllCategoriesList: (
      query?: {
        Title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllCategoriesDto[], any>({
        path: `/get-all-categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  editCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name EditCategoryUpdate
     * @request PUT:/edit-category/{id}
     * @secure
     */
    editCategoryUpdate: (
      id: number,
      query: {
        /** @maxLength 150 */
        Title: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/edit-category/${id}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),
  };
  getCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name GetCategoryDetail
     * @request GET:/get-category/{id}
     * @secure
     */
    getCategoryDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetCategoryDto, any>({
        path: `/get-category/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deleteCategory = {
    /**
     * No description
     *
     * @tags Category
     * @name DeleteCategoryDelete
     * @request DELETE:/delete-category/{id}
     * @secure
     */
    deleteCategoryDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/delete-category/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  createComment = {
    /**
     * No description
     *
     * @tags Comment
     * @name CreateCommentCreate
     * @request POST:/create-comment
     * @secure
     */
    createCommentCreate: (data: CreateCommentDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/create-comment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  getAllComments = {
    /**
     * No description
     *
     * @tags Comment
     * @name GetAllCommentsList
     * @request GET:/get-all-comments
     * @secure
     */
    getAllCommentsList: (
      query?: {
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
        doctorId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllCommentsDtoPageResult, any>({
        path: `/get-all-comments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  registerDoctor = {
    /**
     * No description
     *
     * @tags Doctors
     * @name RegisterDoctorCreate
     * @request POST:/register-doctor
     * @secure
     */
    registerDoctorCreate: (data: RegisterDoctorDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/register-doctor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  getDoctorInfo = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetDoctorInfoDetail
     * @request GET:/get-doctor-info/{doctorId}
     * @secure
     */
    getDoctorInfoDetail: (doctorId: string, params: RequestParams = {}) =>
      this.request<GetDoctorInfoDto, any>({
        path: `/get-doctor-info/${doctorId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getBestDoctorByHighestRanting = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetBestDoctorByHighestRantingList
     * @request GET:/get-best-doctor-by-highest-ranting
     * @secure
     */
    getBestDoctorByHighestRantingList: (params: RequestParams = {}) =>
      this.request<GetAllDoctorByBestRatingDto[], any>({
        path: `/get-best-doctor-by-highest-ranting`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getAllCities = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetAllCitiesList
     * @request GET:/get-all-cities
     * @secure
     */
    getAllCitiesList: (
      query?: {
        Title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllCitiesDto[], any>({
        path: `/get-all-cities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  getBestDoctorByHighestRaingForSearchBar = {
    /**
     * No description
     *
     * @tags Doctors
     * @name GetBestDoctorByHighestRaingForSearchBarList
     * @request GET:/get_best_doctor_by_highest_raing_for_search_bar
     * @secure
     */
    getBestDoctorByHighestRaingForSearchBarList: (
      query?: {
        /** @format int32 */
        limit?: number;
        /** @format int32 */
        offset?: number;
        City?: string;
        Insurance?: string;
        Category?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllDoctorByBestRatingForTheSearchBarDtoPageResult, any>({
        path: `/get_best_doctor_by_highest_raing_for_search_bar`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  registerDoctorWorkPlan = {
    /**
     * No description
     *
     * @tags DoctorWorkPlans
     * @name RegisterDoctorWorkPlanCreate
     * @request POST:/register-doctor-work-plan
     * @secure
     */
    registerDoctorWorkPlanCreate: (data: RegisterDoctorWorkPlaneDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/register-doctor-work-plan`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  getAllInsurances = {
    /**
     * No description
     *
     * @tags Insurances
     * @name GetAllInsurancesList
     * @request GET:/get-all-insurances
     * @secure
     */
    getAllInsurancesList: (
      query?: {
        Title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllInsurancesDto[], any>({
        path: `/get-all-insurances`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
