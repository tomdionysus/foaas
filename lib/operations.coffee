
module.exports = (app) ->

  app.get '/operations', (req, res) ->
    res.send [
      { name: "Version", url: '/version', fields: [] }

      { name: "Fuck Off", url: '/off/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck You", url: '/you/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck This", url: '/this/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck That", url: '/that/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck Everything", url: '/everything/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck Everyone", url: '/everyone/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Shakespeare", url: '/shakespeare/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Linus", url: '/linus/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "King", url: '/king/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck me Pink", url: '/pink/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck my Life", url: '/life/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck me with a chainsaw", url: '/chainsaw/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Hide-and-go-fuck-yourself", url: '/outside/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck you very much", url: '/outside/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Fuck [x]", url: '/:thing/:from', fields: [
        { name: 'Thing', field: 'thing'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Flying Fuck", url: '/flying/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Cool story" , url: "/cool/:from", fields: [
       { name: 'From', field: 'from'}
      ] }

      { name: "Field of Fucks", url: '/field/:name/:from/:reference', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
        { name: 'Reference', field: 'reference'}
      ] }

      { name: "Fuck-nugget", url:'nugget/:name/:from', fields:[
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Yoda", url: '/yoda/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Ballmer", url: '/ballmer/:name/:company/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'Company', field: 'company'}
        { name: 'From', field: 'from'}
      ] }

      { name: "What", url: '/what/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Because", url: '/because/:from', fields: [
        { name: 'From', field: 'from'}
      ] }

      { name: "Can I Use", url: '/caniuse/:tool/:from', fields: [
        { name: 'Tool', field: 'tool'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Random with Name", url: '/random/:name/:from', fields: [
        { name: 'Name', field: 'name'}
        { name: 'From', field: 'from'}
      ] }

      { name: "Random without Name", url: '/random/:from', fields: [
        { name: 'From', field: 'from'}
      ] }
    ]
