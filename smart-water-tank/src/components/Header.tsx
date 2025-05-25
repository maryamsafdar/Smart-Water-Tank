interface HeaderProps {
    title: string;
  }
  
  export default function Header({ title }: HeaderProps) {
    return <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>;
  }
  