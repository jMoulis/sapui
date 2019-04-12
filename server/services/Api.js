/* eslint-disable class-methods-use-this */
module.exports = class Api {
  constructor(res) {
    this.res = res;
  }

  success(
    { data, searchedEntity, navigation, parentId, displayedEntity, query },
    code,
  ) {
    // Check if data is an array of document
    // Because the type receveid is always an object, must check through available method
    if (typeof data.map === 'function') {
      return this.res.status(code || 200).send(
        data.map(item => {
          return {
            ...item._doc,
            displayedEntity,
            uris: this._buildUris(searchedEntity, item._id),
            navigation:
              navigation &&
              `/api/v1/${searchedEntity}/${parentId || item._id}/${navigation}${
                query ? `?${query}=${item._id}` : ''
              }`,
          };
        }),
      );
    }
    return this.res.status(code || 200).send({
      ...data._doc,
      uris: this._buildUris(searchedEntity, data._id),
    });
  }

  failure(error, code, message) {
    return this.res.status(code).send({
      message: message || error.message,
      status: code,
    });
  }

  _buildUris(collection, id) {
    return {
      post: `/api/v1/${collection}/${id}`,
      get: `/api/v1/${collection}/${id}`,
      patch: `/api/v1/${collection}/${id}`,
    };
  }
};
