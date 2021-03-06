import typeorm from "typeorm";

const { EntitySchema } = typeorm;

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    email: {
      type: "varchar",
    },
    nickname: {
      type: "varchar",
      nullable: true
    },
    password: {
      type: "varchar",
    }
  },
  relations: {
    user_meta: {
      target: "UserMeta",
      type: "one-to-one",
      cascade: true,
      joinColumn: true
    },
    rolen: {
      target: "Rolen",
      type: "many-to-one",
      joinColumn: true,
      inverseSide: 'user'
    }
  }
});
