import Card from "./Card";

export default function App() {
  const data = [
    {
      id: 1, name: 'John', role: 'Admin', job: 'Management', child: [
        { id: 1, name: 'Shubham', role: 'Admin', job: 'Management' },
        {
          id: 2, name: 'Manav', role: 'Admin', job: 'Management', child: [
            { id: 1, name: 'Ajay', role: 'Admin', job: 'Management' },
            { id: 2, name: 'Abhishek', role: 'Admin', job: 'Management' },
            {
              id: 3, name: 'Nilesh', role: 'Admin', job: 'Management', child: [
                { id: 1, name: 'Shivam', role: 'Admin', job: 'Management' },
                { id: 2, name: 'John', role: 'Admin', job: 'Management' },
                { id: 3, name: 'John', role: 'Admin', job: 'Management' },
                { id: 4, name: 'John', role: 'Admin', job: 'Management' },
              ]
            },
            { id: 4, name: 'Binit', role: 'Admin', job: 'Management' },
          ]
        },
        { id: 3, name: 'John', role: 'Admin', job: 'Management' },
        {
          id: 4, name: 'John', role: 'Admin', job: 'Management',
        },
      ]
    },
  ]

  // type Node = {
  //   name: string;
  //   nodes?: Node[];
  // };

  // const nodes: Node[] = [
  //   {
  //     name: 'Home',
  //     nodes: [
  //       {
  //         name: 'Movies',
  //         nodes: [
  //           {
  //             name: 'Action',
  //             nodes: [
  //               {
  //                 name: '2000s',
  //                 nodes: [
  //                   { name: 'Gladiator.mp4' },
  //                   { name: 'The-Dark-Knight.mp4' },
  //                 ],
  //               },
  //               { name: '2010s', nodes: [] },
  //             ],
  //           },
  //           {
  //             name: 'Comedy',
  //             nodes: [{ name: '2000s', nodes: [{ name: 'Superbad.mp4' }] }],
  //           },
  //           {
  //             name: 'Drama',
  //             nodes: [
  //               { name: '2000s', nodes: [{ name: 'American-Beauty.mp4' }] },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         name: 'Music',
  //         nodes: [
  //           { name: 'Rock', nodes: [] },
  //           { name: 'Classical', nodes: [] },
  //         ],
  //       },
  //       { name: 'Pictures', nodes: [] },
  //       {
  //         name: 'Documents',
  //         nodes: [],
  //       },
  //       { name: 'passwords.txt' },
  //     ],
  //   },]

  return (
    <div className='mt-32'>
      <ul className="">
        {data.map((node) => (
          <Card node={node} key={node.name} />
        ))}
      </ul>
    </div>
  )
}
