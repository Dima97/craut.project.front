import {ProjectRequestDto} from "./ProjectRequestDto";
import {CommentResponseDto} from "./CommentResponseDto";

export class ResponseProjectAndTags{
  projectRequestDto:ProjectRequestDto;
  tags:string[];
  comments:CommentResponseDto;
}
