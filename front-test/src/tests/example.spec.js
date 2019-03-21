import { mount } from '@vue/test-utils'
import * as info from "@/components/infos.vue"

describe('Testes', () => {
  it('Qual é a cor', () => {
    const dados = mount(info, {
      propsData: {
        color: 'red',
        timeStamp: '2018-10-02T15:56:16.823311Z',
      }
    })
    expect(dados.props().color).toBe('red')
  })
  describe('Testes do component INFO', () => {
    test('Teste pra passar', () => {
      const soma = 1+1
      expect(soma).toBe(2)
    });
    it('Transformação do TimeStamp JS', () => {
      const data = dados.timeStamp;
      const dataTratada = InfosSeguro().dataFix(data)
      expect(dataTratada).toBe('02/10/2018')
    });
  });
})




// it("Validação TimeStamp do JS", () => {
  //   const time = cmp.timeStampJS
  //   const result = dateFix(time)
  //   expect(result).toEqual(["02/10/2018"])
  // })