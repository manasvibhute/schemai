import mongoose from 'mongoose';

const schemaSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: 'anonymous',
    },
    name: {
      type: String,
      required: true,
      default: 'Untitled Schema',
    },
    description: String,
    tables: [
      {
        name: String,
        columns: [
          {
            name: String,
            type: String,
            pk: Boolean,
            fk: Boolean,
            unique: Boolean,
            nullable: Boolean,
          },
        ],
      },
    ],
    relations: [
      {
        fromTable: String,
        fromColumn: String,
        toTable: String,
        toColumn: String,
        type: String,
      },
    ],
    dialect: {
      type: String,
      default: 'postgres',
      enum: ['postgres', 'mysql', 'mongodb', 'prisma'],
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Schema = mongoose.model('Schema', schemaSchema);
