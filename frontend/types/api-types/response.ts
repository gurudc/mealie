/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export interface ErrorResponse {
  message: string;
  error?: boolean;
  exception?: string;
}
export interface FileTokenResponse {
  fileToken: string;
}
export interface SuccessResponse {
  message: string;
  error?: boolean;
}
export interface ValidationResponse {
  valid: boolean;
}
