import './state/wavefunction'
import './state/eigenstate'
import './state/activatedstate'
import './state/Cohereststate'
import './state/Degeneratestate'
interface eigenstate{
    energy: number
    wavefunction: string
    isDegenerate?: boolean
}
interface activatedstate{
    energy:number
    excitationLevel:number
}
type ComplexNumber = {
    real:number
    imaginary:number
}
namespace CoherentState{
    amplitude:ComplexNumber
    phase:number
}
namespace DegenerateState{
    energy:number
    degeneracy:number
}
console.log('eigenstate','activatedstate','CoherentState','DegenerateState')
