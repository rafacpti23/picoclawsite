const Banner = () => {
    return (
        <div className="w-full bg-dark-900 pb-12 pt-8 border-t border-dark-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative group">
                    {/* Decorative glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-600 to-brand-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <a
                        href="https://painelcliente.com.br/aff.php?aff=78&gid=32"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block w-full overflow-hidden rounded-xl border border-dark-600 bg-dark-800 hover:border-brand-500/50 transition-all duration-300"
                    >
                        <div className="w-full">
                            <img
                                src="https://hkmequsfknqpqqxrldog.supabase.co/storage/v1/object/public/banners/1766719838171-mdz5eithw98.gif"
                                alt="PicoClaw Banner Promotion"
                                className="w-full h-auto block transform hover:scale-[1.01] transition-transform duration-500"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
