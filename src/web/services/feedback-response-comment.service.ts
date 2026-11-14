import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';
import { QueryParamKeys, ResourceEndpoints } from '../types/api-const';
import { ResponseInstructorComment, MessageOutput } from '../types/api-output';
import { ResponseInstructorCommentCreateRequest, ResponseInstructorCommentUpdateRequest } from '../types/api-request';

/**
 * Handles requests to the back-end related to response comments.
 */
@Injectable({
  providedIn: 'root',
})
export class ResponseInstructorCommentService {
  private httpRequestService = inject(HttpRequestService);

  /**
   * Create a comment by calling API.
   */
  createComment(
    createRequest: ResponseInstructorCommentCreateRequest,
    responseId: string,
  ): Observable<ResponseInstructorComment> {
    return this.httpRequestService.post(
      ResourceEndpoints.RESPONSE_COMMENT,
      {
        [QueryParamKeys.FEEDBACK_RESPONSE_ID]: responseId,
      },
      createRequest,
    );
  }

  /**
   * Updates a comment by calling API.
   */
  updateComment(
    updateRequest: ResponseInstructorCommentUpdateRequest,
    commentId: string,
  ): Observable<ResponseInstructorComment> {
    return this.httpRequestService.put(
      ResourceEndpoints.RESPONSE_COMMENT,
      {
        [QueryParamKeys.FEEDBACK_RESPONSE_COMMENT_ID]: commentId,
      },
      updateRequest,
    );
  }

  /**
   * Deletes a comment by calling API.
   */
  deleteComment(commentId: string): Observable<MessageOutput> {
    return this.httpRequestService.delete(ResourceEndpoints.RESPONSE_COMMENT, {
      [QueryParamKeys.FEEDBACK_RESPONSE_COMMENT_ID]: commentId,
    });
  }
}
