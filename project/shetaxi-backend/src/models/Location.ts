import { Schema, model, Document } from 'mongoose';

export interface ILocation extends Document {
  name: string;
  coordinates: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
  createdAt: Date;
  updatedAt: Date;
}

const locationSchema = new Schema<ILocation>({
  name: { type: String, required: true },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
}, {
  timestamps: true,
});

locationSchema.index({ coordinates: '2dsphere' });

const Location = model<ILocation>('Location', locationSchema);
export default Location;
