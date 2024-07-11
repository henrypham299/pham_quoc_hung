import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface ResourceAttributes {
    id: number;
    name: string;
    description: string;
}

interface ResourceCreationAttributes extends Optional<ResourceAttributes, 'id'> {}

class Resource extends Model<ResourceAttributes, ResourceCreationAttributes> implements ResourceAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
}


Resource.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'resources',
});

export default Resource;
