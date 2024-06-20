/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PlagiarismReportService } from "../plagiarismReport.service";
import { PlagiarismReportCreateInput } from "./PlagiarismReportCreateInput";
import { PlagiarismReport } from "./PlagiarismReport";
import { PlagiarismReportFindManyArgs } from "./PlagiarismReportFindManyArgs";
import { PlagiarismReportWhereUniqueInput } from "./PlagiarismReportWhereUniqueInput";
import { PlagiarismReportUpdateInput } from "./PlagiarismReportUpdateInput";

export class PlagiarismReportControllerBase {
  constructor(protected readonly service: PlagiarismReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlagiarismReport })
  async createPlagiarismReport(
    @common.Body() data: PlagiarismReportCreateInput
  ): Promise<PlagiarismReport> {
    return await this.service.createPlagiarismReport({
      data: {
        ...data,

        document: data.document
          ? {
              connect: data.document,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        details: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        score: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlagiarismReport] })
  @ApiNestedQuery(PlagiarismReportFindManyArgs)
  async plagiarismReports(
    @common.Req() request: Request
  ): Promise<PlagiarismReport[]> {
    const args = plainToClass(PlagiarismReportFindManyArgs, request.query);
    return this.service.plagiarismReports({
      ...args,
      select: {
        createdAt: true,
        details: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        score: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlagiarismReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async plagiarismReport(
    @common.Param() params: PlagiarismReportWhereUniqueInput
  ): Promise<PlagiarismReport | null> {
    const result = await this.service.plagiarismReport({
      where: params,
      select: {
        createdAt: true,
        details: true,

        document: {
          select: {
            id: true,
          },
        },

        id: true,
        score: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PlagiarismReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePlagiarismReport(
    @common.Param() params: PlagiarismReportWhereUniqueInput,
    @common.Body() data: PlagiarismReportUpdateInput
  ): Promise<PlagiarismReport | null> {
    try {
      return await this.service.updatePlagiarismReport({
        where: params,
        data: {
          ...data,

          document: data.document
            ? {
                connect: data.document,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          details: true,

          document: {
            select: {
              id: true,
            },
          },

          id: true,
          score: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PlagiarismReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePlagiarismReport(
    @common.Param() params: PlagiarismReportWhereUniqueInput
  ): Promise<PlagiarismReport | null> {
    try {
      return await this.service.deletePlagiarismReport({
        where: params,
        select: {
          createdAt: true,
          details: true,

          document: {
            select: {
              id: true,
            },
          },

          id: true,
          score: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
