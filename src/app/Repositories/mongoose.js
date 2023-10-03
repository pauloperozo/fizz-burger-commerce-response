
class Repository {

  constructor( model ) {

    this.Model = model

  }

  async index( query, sort = {} ) {

    const docs = await this.Model.find( query ).sort(sort).lean()
    return docs

  }

  async create( data ) {

    const doc = await this.Model.create( data )
    return doc.toObject() 

  }

  async read( id ) {

    const docs = await this.Model.findById(id).lean()
    return docs

  }

  async update(id, data) {

    const doc = await this.Model.findByIdAndUpdate(id, data, { runValidators: true }).lean()
    return doc

  }

  async delete( id ) {

    const doc = await this.Model.findByIdAndDelete( id ).lean()
    return doc

  }
  
}

module.exports =  Repository