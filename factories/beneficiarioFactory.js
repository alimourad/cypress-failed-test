let gen = require("../support/create/randomData");

export default {
	dadosBeneficiario: function() {

		var data = {
			name: gen.name(),
			cpf: gen.cpf(),
            email: gen.email(),
            celular: gen.celular()
		}

		return data
	}
}