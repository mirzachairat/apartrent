import { HomeModernIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline'
import RoleCard from '@/components/Iklan/rolecard'
import Link from 'next/link'

export default function Iklan() {
  return (
    <section className="mt-10">
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Iklankan Properti Anda</h1>
                <p className="text-lg text-gray-600">
                    Pilih peran Anda untuk memulai proses listing properti
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RoleCard 
                    icon={<HomeModernIcon className="h-10 w-10 text-blue-600" />}
                    title="Pemilik Rumah"
                    description="Ingin menyewakan/menjual properti pribadi"
                    buttonText="Lanjutkan sebagai Pemilik"
                    bgColor="bg-blue-50"
                />
                
                <RoleCard 
                    icon={<BuildingOfficeIcon className="h-10 w-10 text-green-600" />}
                    title="Developer"
                    description="Memiliki banyak unit untuk dipasarkan"
                    buttonText="Lanjutkan sebagai Developer"
                    bgColor="bg-green-50"
                />
                
                <RoleCard 
                    icon={<UserIcon className="h-10 w-10 text-purple-600" />}
                    title="Agen Properti"
                    description="Mewakili klien untuk memasarkan properti"
                    buttonText="Lanjutkan sebagai Agen"
                    bgColor="bg-purple-50"
                />
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                <p>Sudah punya akun Agen atau Pemilik Properti? Silahkan 
                    <span className="underline underline-offset-8 text-blue-600/100 dark:text-sky-400/100">
                            <Link href="/login">
                                    Login
                            </Link>
                    </span>
                </p>
                </div>
            </div>
        </div>
    </section>
  )
}