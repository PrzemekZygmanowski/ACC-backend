import { extendType, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("location");
    t.nonNull.string("description");
  },
});

// let projects: NexusGenObjects["Project"][] = [
//   // 1
//   {
//     id: 1,
//     location: "Łódź",
//     description: "first location",
//   },
//   {
//     id: 2,
//     location: "Łódź",
//     description: "second location",
//   },
// ];

export const ProjectQuery = extendType({
  // 2
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("projects", {
      // 3
      type: "Project",
      resolve(parent, args, context, info) {
        // 4
        return context.prisma.project.findMany();
      },
    });
  },
});

export const ProjectMutation = extendType({
  // 1
  type: "Mutation",
  definition(t) {
    t.nonNull.field("add", {
      // 2
      type: "Project",
      args: {
        location: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const newProject = context.prisma.project.create({
          // 2
          data: {
            location: args.location,
            description: args.description,
          },
        });
        return newProject;
      },
    });
  },
});
